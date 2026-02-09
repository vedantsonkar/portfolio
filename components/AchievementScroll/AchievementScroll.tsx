"use client";
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import {
  Gauge,
  Accessibility,
  Zap,
  Users,
  TestTube,
  Bot,
  TrendingUp,
  Star,
  Database,
  LucideIcon,
} from "lucide-react";
import { Achievement } from "@/constants";
import DropText from "../DropText/DropText";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Gauge,
  Accessibility,
  Zap,
  Users,
  TestTube,
  Bot,
  TrendingUp,
  Star,
  Database,
};

interface AchievementScrollProps {
  achievements: Achievement[];
  className?: string;
}

const AchievementScroll: React.FC<AchievementScrollProps> = ({
  achievements,
  className,
}) => {
  return (
    <div className="py-16 md:py-24 lg:py-32 overflow-hidden space-y-16 md:space-y-24 max-w-5xl mx-auto px-2 md:px-6">
      <DropText
        text1="MY"
        text2="ACHIEVEMENTS"
        duration={0.5}
        delay={0.3}
        textClassname="max-sm:text-[45px]"
      />
      <div
        className={twMerge("relative w-full  ", className)}
        style={{ perspective: "1200px" }}
      >
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              achievement={achievement}
              index={index}
              isLast={index === achievements.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
  isLast: boolean;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  achievement,
  index,
  isLast,
}) => {
  const isLeft = achievement.direction === "left";
  const IconComponent = iconMap[achievement.icon] || Zap;

  // Curved animation: 6 o'clock to 3 o'clock (left) or 6 o'clock to 9 o'clock (right)
  // This creates an arc motion by combining Y (up) and X (horizontal) with rotation
  const curveVariants = {
    hidden: {
      opacity: 0,
      y: 150, // Start from below (6 o'clock)
      x: 0, // Start centered
      rotateZ: isLeft ? 15 : -15, // Slight tilt
      rotateY: isLeft ? -20 : 20,
      scale: 0.85,
    },
    visible: {
      opacity: 1,
      y: 0, // End at final position
      x: isLeft ? 0 : 0, // Stay centered but came from curve
      rotateZ: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        delay: index * 0.05,
        ease: [0.34, 1.56, 0.64, 1] as const, // Custom spring-like easing for curve effect
      },
    },
  };

  // Render text with highlight
  const renderText = () => {
    if (!achievement.highlight) {
      return achievement.text;
    }

    const parts = achievement.text.split(achievement.highlight);
    return (
      <>
        {parts[0]}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 font-bold">
          {achievement.highlight}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: isLast ? 0.2 : 0.3 }}
      variants={curveVariants}
      className={twMerge("flex", isLeft ? "justify-start" : "justify-end")}
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: isLeft ? "left center" : "right center",
      }}
    >
      {/* Card */}
      <div
        className={twMerge(
          "relative max-w-xl w-full",
          "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md",
          "border border-gray-200 dark:border-gray-700",
          "rounded-2xl",
          "p-6 md:p-8",
          "transition-all duration-300",
          "hover:shadow-lg hover:scale-[1.01] hover:border-purple-300 dark:hover:border-purple-600",
          "cursor-default",
        )}
      >
        {/* Icon with gradient background */}
        <div
          className={twMerge(
            "absolute -top-5 w-12 h-12 md:w-14 md:h-14",
            "flex items-center justify-center",
            "rounded-xl",
            "bg-linear-to-br from-blue-500 via-purple-500 to-pink-500",
            isLeft ? "left-6 md:left-8" : "right-6 md:right-8",
          )}
        >
          <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
        </div>

        {/* Text content */}
        <p
          className={twMerge(
            "mt-4 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed",
            "text-gray-800 dark:text-gray-100",
            isLeft ? "text-left" : "text-right",
          )}
        >
          {renderText()}
        </p>

        {/* Decorative gradient line at bottom */}
        <div
          className={twMerge(
            "absolute bottom-0 h-1 w-24 md:w-32",
            "bg-linear-to-r from-blue-500 via-purple-500 to-pink-500",
            "rounded-full",
            isLeft ? "left-6 md:left-8" : "right-6 md:right-8",
          )}
        />
      </div>
    </motion.div>
  );
};

export default AchievementScroll;
