"use client";

import React, { useRef, useState, useCallback } from "react";
import { Canvas, useFrame, useThree, ThreeEvent } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import { Physics, useSphere, usePlane } from "@react-three/cannon";
import * as THREE from "three";
import { TechStack } from "@/constants";

interface StackBubblesProps {
  techStack: TechStack[];
  className?: string;
}

// Invisible boundary walls
function Boundaries() {
  const { viewport } = useThree();
  const wallThickness = 1;

  // Floor
  usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -viewport.height / 2 + 0.5, 0],
  }));

  // Ceiling
  usePlane(() => ({
    rotation: [Math.PI / 2, 0, 0],
    position: [0, viewport.height / 2 - 0.5, 0],
  }));

  // Left wall
  usePlane(() => ({
    rotation: [0, Math.PI / 2, 0],
    position: [-viewport.width / 2 + 0.5, 0, 0],
  }));

  // Right wall
  usePlane(() => ({
    rotation: [0, -Math.PI / 2, 0],
    position: [viewport.width / 2 - 0.5, 0, 0],
  }));

  // Back wall
  usePlane(() => ({
    rotation: [0, 0, 0],
    position: [0, 0, -3],
  }));

  // Front wall (invisible)
  usePlane(() => ({
    rotation: [0, Math.PI, 0],
    position: [0, 0, 3],
  }));

  return null;
}

interface BubbleProps {
  tech: TechStack;
  position: [number, number, number];
  radius: number;
}

function Bubble({ tech, position, radius }: BubbleProps) {
  const [hovered, setHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera, gl } = useThree();

  const [ref, api] = useSphere(() => ({
    mass: 1,
    position,
    args: [radius],
    linearDamping: 0.4,
    angularDamping: 0.4,
    restitution: 0.8, // Bounciness
    friction: 0.1,
  }));

  // Track velocity for visual feedback
  const velocity = useRef([0, 0, 0]);
  api.velocity.subscribe((v) => (velocity.current = v));

  // Gentle floating animation
  useFrame((state) => {
    if (!isDragging && meshRef.current) {
      // Add subtle floating force
      const time = state.clock.elapsedTime;
      const floatForce = Math.sin(time * 0.5 + position[0]) * 0.02;
      api.applyForce([0, floatForce, 0], [0, 0, 0]);
    }
  });

  // Drag handling
  const handlePointerDown = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      e.stopPropagation();
      setIsDragging(true);
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
      gl.domElement.style.cursor = "grabbing";
    },
    [gl],
  );

  const handlePointerUp = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      setIsDragging(false);
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
      gl.domElement.style.cursor = hovered ? "pointer" : "auto";
      // Apply throw velocity
      api.velocity.set(velocity.current[0] * 2, velocity.current[1] * 2, 0);
    },
    [api, gl, hovered],
  );

  const handlePointerMove = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      if (isDragging) {
        e.stopPropagation();
        // Convert screen to world coordinates
        const vec = new THREE.Vector3();
        const pos = new THREE.Vector3();

        vec.set(
          (e.clientX / window.innerWidth) * 2 - 1,
          -(e.clientY / window.innerHeight) * 2 + 1,
          0.5,
        );
        vec.unproject(camera);
        vec.sub(camera.position).normalize();

        const distance = (0 - camera.position.z) / vec.z;
        pos.copy(camera.position).add(vec.multiplyScalar(distance));

        api.position.set(pos.x, pos.y, 0);
        api.velocity.set(0, 0, 0);
      }
    },
    [isDragging, camera, api],
  );

  const handleClick = useCallback(() => {
    if (!isDragging) {
      window.open(tech.url, "_blank", "noopener,noreferrer");
    }
  }, [isDragging, tech.url]);

  // Determine text color based on background
  const isLightColor = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return r * 0.299 + g * 0.587 + b * 0.114 > 150;
  };

  const textColor = isLightColor(tech.color) ? "#000000" : "#ffffff";
  const bubbleColor =
    tech.color === "#000000"
      ? "#1a1a1a"
      : tech.color === "#F7DF1E"
        ? "#F7DF1E"
        : tech.color;

  return (
    <Float
      speed={isDragging ? 0 : 1}
      rotationIntensity={isDragging ? 0 : 0.2}
      floatIntensity={isDragging ? 0 : 0.3}
    >
      <group ref={ref as React.Ref<THREE.Group>}>
        <mesh
          ref={meshRef}
          onPointerOver={() => {
            setHovered(true);
            gl.domElement.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            setHovered(false);
            if (!isDragging) gl.domElement.style.cursor = "auto";
          }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerMove={handlePointerMove}
          onClick={handleClick}
          scale={hovered ? 1.1 : 1}
        >
          <sphereGeometry args={[radius, 32, 32]} />
          <meshStandardMaterial
            color={bubbleColor}
            transparent
            opacity={0.9}
            roughness={0.1}
            metalness={0.2}
            emissive={bubbleColor}
            emissiveIntensity={hovered ? 0.3 : 0.1}
          />
        </mesh>
        {/* Tech name */}
        <Text
          position={[0, 0, radius + 0.01]}
          fontSize={radius * 0.4}
          color={textColor}
          anchorX="center"
          anchorY="middle"
          maxWidth={radius * 1.8}
          textAlign="center"
        >
          {tech.name}
        </Text>
      </group>
    </Float>
  );
}

function Scene({ techStack }: { techStack: TechStack[] }) {
  const { viewport } = useThree();

  // Calculate positions in a scattered but contained layout
  const getPositions = useCallback((): [number, number, number][] => {
    const positions: [number, number, number][] = [];
    const cols = Math.ceil(Math.sqrt(techStack.length));
    const rows = Math.ceil(techStack.length / cols);

    const spacingX = (viewport.width - 2) / (cols + 1);
    const spacingY = (viewport.height - 2) / (rows + 1);

    for (let i = 0; i < techStack.length; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);

      // Add randomness to make it feel organic
      const randomX = (Math.random() - 0.5) * spacingX * 0.5;
      const randomY = (Math.random() - 0.5) * spacingY * 0.5;

      const x = -viewport.width / 2 + spacingX * (col + 1) + randomX + 1;
      const y = viewport.height / 2 - spacingY * (row + 1) + randomY - 1;

      positions.push([x, y, 0]);
    }

    return positions;
  }, [techStack.length, viewport.width, viewport.height]);

  const positions = getPositions();
  const baseRadius = Math.min(viewport.width, viewport.height) / 15;

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 5]} intensity={0.5} color="#ff88ff" />
      <directionalLight position={[0, 5, 5]} intensity={0.5} />

      <Physics
        gravity={[0, -2, 0]}
        defaultContactMaterial={{ restitution: 0.7 }}
      >
        <Boundaries />
        {techStack.map((tech, index) => (
          <Bubble
            key={tech.name}
            tech={tech}
            position={positions[index] || [0, 0, 0]}
            radius={baseRadius + (index % 3) * 0.15}
          />
        ))}
      </Physics>
    </>
  );
}

export default function StackBubbles({
  techStack,
  className,
}: StackBubblesProps) {
  return (
    <div className={`w-full h-[70vh] min-h-[500px] ${className || ""}`}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene techStack={techStack} />
      </Canvas>
      <p className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
        Drag bubbles to play • Click to visit official site
      </p>
    </div>
  );
}
