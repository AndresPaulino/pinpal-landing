"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, BarChart3, WifiOff } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "League & Bowler Management",
    description:
      "Create leagues, add bowlers, organize teams, and manage rosters with ease. Everything in one place, accessible anywhere.",
    icon: Users,
    iconAnimation: "animate-spin-slow",
    gradient: "from-burgundy/10 to-burgundy/5",
    mockup: "/images/iphone-15-mockups/league-management-left.png",
    mockupAlt: "PinPal league management screen",
  },
  {
    title: "Score Tracking & Standings",
    description:
      "Enter scores quickly, auto-calculate averages and standings. No more spreadsheets or manual math. Real-time updates for everyone.",
    icon: BarChart3,
    iconAnimation: "animate-pulse",
    gradient: "from-gold/10 to-gold/5",
    mockup: "/images/iphone-15-mockups/score-tracking-left.png",
    mockupAlt: "PinPal frame-by-frame score entry screen",
  },
  {
    title: "Works Offline",
    description:
      "No wifi at the bowling alley? No problem. Enter scores offline and sync when you're back online. Never lose your data.",
    icon: WifiOff,
    iconAnimation: "animate-ping-slow",
    gradient: "from-burgundy/10 to-gold/5",
    mockup: "/images/iphone-15-mockups/stats-analytics-left.png",
    mockupAlt: "PinPal stats and analytics screen",
  },
];

interface FeatureBlockProps {
  feature: (typeof features)[0];
  index: number;
  reverse?: boolean;
}

function FeatureBlock({ feature, index, reverse }: FeatureBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.5,
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        relative flex flex-col lg:flex-row items-center gap-12 lg:gap-20
        ${reverse ? "lg:flex-row-reverse" : ""}
      `}
    >
      {/* Mockup Side */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 1.5,
          delay: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex-1 relative flex items-center justify-center"
      >
        <Image
          src={feature.mockup}
          alt={feature.mockupAlt}
          width={300}
          height={600}
          className="w-[220px] md:w-[260px] drop-shadow-2xl"
        />
      </motion.div>

      {/* Glass Card Side */}
      <div className="flex-1 w-full max-w-md">
        <div
          className={`
            glass rounded-3xl p-8 md:p-10
            bg-gradient-to-br ${feature.gradient}
            transition-smooth hover:shadow-xl
          `}
        >
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-white/80 flex items-center justify-center mb-6 shadow-sm">
            <feature.icon className={`w-10 h-10 text-burgundy ${feature.iconAnimation}`} />
          </div>

          {/* Content */}
          <h3 className="text-2xl md:text-3xl font-bold text-slate-950 tracking-tight mb-4">
            {feature.title}
          </h3>
          <p className="text-slate-500 text-lg leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative bg-slate-50 overflow-hidden">
      {/* Curved Top */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-white rounded-b-[5rem]" />

      <div className="relative pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          {/* Section Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-burgundy mb-4 block">
              Features
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 tracking-tighter">
              Everything You Need
            </h2>
            <p className="text-lg text-slate-500 mt-4 max-w-xl mx-auto">
              Simple tools designed for league secretaries who value their time
            </p>
          </motion.div>

          {/* Feature Blocks */}
          <div className="space-y-24 lg:space-y-32">
            {features.map((feature, index) => (
              <FeatureBlock
                key={index}
                feature={feature}
                index={index}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white rounded-t-[5rem]" />
    </section>
  );
}
