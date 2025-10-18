"use client";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface DropTextProps {
  text1: string;
  text2?: string;
  duration?: number; // in seconds
  delay?: number; // delay before second line animates
  textClassname?: string;
}

const DropText: React.FC<DropTextProps> = ({
  text1,
  text2,
  duration = 0.15,
  delay = 0.1,
  textClassname,
}) => {
  const lineVariant = (customDelay = 0) => ({
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration, delay: customDelay },
    },
  });

  return (
    <h1 className="text-6xl sm:text-8xl [1600px]:text-9xl font-bold leading-[0.85]">
      {/* First line */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={lineVariant(0)}
      >
        {text1}
      </motion.div>

      {/* Second line */}
      {text2 && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={lineVariant(delay)}
          className={twMerge("dark:text-white/30 text-black/40", textClassname)}
        >
          {text2}
        </motion.div>
      )}
    </h1>
  );
};

export default DropText;
