"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Users, Zap } from "lucide-react";

const stats = [
  {
    number: "50%",
    label: "Less Time on Paperwork",
    description: "Automate score calculations and standings updates",
    icon: Clock,
    bgNumber: "50",
  },
  {
    number: "1000+",
    label: "Leagues Ready to Join",
    description: "Built to scale from small leagues to large organizations",
    icon: Users,
    bgNumber: "1K",
  },
  {
    number: "10min",
    label: "Average Setup Time",
    description: "Get your league up and running in minutes, not hours",
    icon: Zap,
    bgNumber: "10",
  },
];

interface StatBlockProps {
  stat: typeof stats[0];
  index: number;
}

function StatBlock({ stat, index }: StatBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.5,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex flex-col items-center text-center py-16"
    >
      {/* Large Background Number */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[200px] font-black text-burgundy/[0.04] leading-none select-none">
          {stat.bgNumber}
        </span>
      </div>

      {/* Icon Circle */}
      <div className="relative z-10 w-16 h-16 rounded-full border-2 border-burgundy flex items-center justify-center mb-6 bg-white">
        <stat.icon className="w-7 h-7 text-burgundy" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <span className="block text-5xl md:text-6xl font-black text-slate-950 tracking-tighter mb-2">
          {stat.number}
        </span>
        <h3 className="text-xl font-bold text-slate-950 mb-2">
          {stat.label}
        </h3>
        <p className="text-slate-500 max-w-xs mx-auto">
          {stat.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-burgundy mb-4 block">
            By The Numbers
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter">
            Built for Efficiency
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-burgundy/30 -translate-x-1/2" />

          {/* Stats */}
          <div className="relative">
            {stats.map((stat, index) => (
              <StatBlock key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
