"use client";
import React, { useEffect, useState } from "react";

interface NumberCounterProps {
  end: number;
  text: string;
  speed?: number; // milliseconds between increments
}

const NumberCounter: React.FC<NumberCounterProps> = ({
  end,
  text,
  speed = 30,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < end) {
      const increment = Math.ceil(end / (1000 / speed));
      const timer = setTimeout(() => {
        setCount((prev) => (prev + increment > end ? end : prev + increment));
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [count, end, speed]);

  return (
    <div
      className="text-center max-w-24 col-span-1"
      role="region"
      aria-label={text}
    >
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
        <span aria-label={`${end}+ ${text}`}>{count}+</span>
      </h2>
      <p className="text-gray-600 dark:text-white/60 lg:text-lg">{text}</p>
    </div>
  );
};

export default NumberCounter;
