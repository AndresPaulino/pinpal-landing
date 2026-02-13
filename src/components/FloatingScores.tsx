"use client";

import { motion } from "framer-motion";

const bowlingScores = [
  { text: "300", color: "text-burgundy" },
  { text: "STRIKE!", color: "text-gold" },
  { text: "279", color: "text-teal-600" },
  { text: "SPARE", color: "text-burgundy" },
  { text: "245", color: "text-amber-500" },
  { text: "7-10 SPLIT", color: "text-purple-600" },
  { text: "189", color: "text-gold" },
  { text: "TURKEY", color: "text-burgundy" },
  { text: "220", color: "text-teal-600" },
  { text: "PERFECT", color: "text-gold" },
  { text: "267", color: "text-amber-500" },
  { text: "X X X", color: "text-burgundy" },
  { text: "198", color: "text-purple-600" },
  { text: "HAMBONE", color: "text-teal-600" },
  { text: "234", color: "text-gold" },
  { text: "CLEAN", color: "text-burgundy" },
  { text: "256", color: "text-amber-500" },
  { text: "BROOKLYN", color: "text-purple-600" },
  { text: "212", color: "text-teal-600" },
  { text: "POCKET", color: "text-gold" },
];

interface FloatingScoreProps {
  text: string;
  color: string;
  index: number;
}

function FloatingScore({ text, color, index }: FloatingScoreProps) {
  // Generate random position and animation duration
  const row = Math.floor(index / 5);
  const col = index % 5;
  const baseX = col * 20 + 5; // 5%, 25%, 45%, 65%, 85%
  const baseY = row * 25 + 10; // 10%, 35%, 60%, 85%

  // Add some randomness to positions
  const randomOffsetX = (Math.random() - 0.5) * 10;
  const randomOffsetY = (Math.random() - 0.5) * 10;

  const x = baseX + randomOffsetX;
  const y = baseY + randomOffsetY;

  const duration = 15 + Math.random() * 20; // 15-35 seconds
  const delay = Math.random() * 5;

  return (
    <motion.div
      className={`absolute font-mono font-semibold text-sm md:text-base ${color} opacity-20 select-none pointer-events-none`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        opacity: [0.15, 0.25, 0.15],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {text}
    </motion.div>
  );
}

export default function FloatingScores() {
  return (
    <div className="absolute inset-0 overflow-hidden mask-radial pointer-events-none">
      {bowlingScores.map((score, index) => (
        <FloatingScore
          key={index}
          text={score.text}
          color={score.color}
          index={index}
        />
      ))}
    </div>
  );
}
