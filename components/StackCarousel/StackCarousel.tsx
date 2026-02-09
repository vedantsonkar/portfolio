"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TechStack } from "@/constants";

interface StackCarouselProps {
  techStack: TechStack[];
  className?: string;
}

// Icon URL resolver - supports Simple Icons, Devicon CDNs, and local icons
const getIconUrl = (slug: string) => {
  // Check if it's a local icon (prefixed with '/icons/')
  if (slug.startsWith("/icons/")) {
    return slug;
  }
  // Check if it's a devicon (prefixed with 'devicon:')
  if (slug.startsWith("devicon:")) {
    const iconName = slug.replace("devicon:", "");
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconName}/${iconName}-original.svg`;
  }
  // Default to Simple Icons CDN
  return `https://cdn.simpleicons.org/${slug}`;
};

function TechCard({ tech, index }: { tech: TechStack; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(tech.url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex-shrink-0 cursor-pointer"
    >
      <div
        className="relative w-28 h-36 sm:w-32 sm:h-40 md:w-36 md:h-44 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-2"
        style={{
          background: isHovered
            ? `linear-gradient(135deg, ${tech.color}22, ${tech.color}44)`
            : "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
        }}
      >
        {/* Glass effect background */}
        <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl transition-all duration-300 group-hover:border-opacity-0" />

        {/* Colored border on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            border: `2px solid ${tech.color}`,
            boxShadow: `0 0 20px ${tech.color}40, inset 0 0 20px ${tech.color}10`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-3 gap-2">
          {/* Logo */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <img
              src={getIconUrl(tech.icon)}
              alt={`${tech.name} logo`}
              className="w-full h-full object-contain"
              style={{
                filter: isHovered ? "none" : "grayscale(30%)",
              }}
            />
          </div>

          {/* Name */}
          <span
            className="text-xs sm:text-sm font-semibold text-center text-gray-800 dark:text-gray-100 transition-colors duration-300 leading-tight"
            style={{
              color: isHovered ? tech.color : undefined,
            }}
          >
            {tech.name}
          </span>

          {/* Category badge */}
          <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium">
            {tech.category}
          </span>
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700 rotate-12" />
        </div>
      </div>
    </motion.div>
  );
}

// CSS-based infinite scrolling row - no gaps ever
function ScrollingRow({
  techStack,
  direction = "left",
  duration = 25,
}: {
  techStack: TechStack[];
  direction?: "left" | "right";
  duration?: number;
}) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items 4 times to ensure no gaps on any screen size
  const items = [...techStack, ...techStack, ...techStack, ...techStack];

  return (
    <div
      className="relative overflow-hidden py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-28 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-28 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />

      <div
        className={`flex gap-3 sm:gap-4 md:gap-6 w-max ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"}`}
        style={{
          animationDuration: `${duration}s`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {items.map((tech, index) => (
          <TechCard
            key={`${tech.name}-${index}`}
            tech={tech}
            index={index % techStack.length}
          />
        ))}
      </div>
    </div>
  );
}

export default function StackCarousel({
  techStack,
  className,
}: StackCarouselProps) {
  // Split tech stack into two rows
  const midpoint = Math.ceil(techStack.length / 2);
  const row1 = techStack.slice(0, midpoint);
  const row2 = [...techStack.slice(midpoint)].reverse(); // Reversed to show different items initially

  return (
    <div className={`w-full space-y-4 md:space-y-6 ${className || ""}`}>
      {/* Row 1 - scrolls left */}
      <ScrollingRow techStack={row1} direction="left" duration={30} />
      {/* Divider line with fade effect */}
      <div className="relative w-full">
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-28 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />
        {/* Right fade mask */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-28 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10 pointer-events-none" />
        {/* Divider line */}
        <div className="w-full h-[1px] neon-divider" />
      </div>
      {/* Row 2 - scrolls right */}
      <ScrollingRow techStack={row2} direction="right" duration={35} />

      {/* Instruction text */}
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 pt-4">
        Hover to pause • Click to visit official site
      </p>

      {/* CSS Keyframes for seamless infinite scroll */}
      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right linear infinite;
        }
      `}</style>
    </div>
  );
}
