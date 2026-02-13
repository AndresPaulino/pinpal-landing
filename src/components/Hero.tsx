"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FloatingScores from "./FloatingScores";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Floating Scores Background */}
      <FloatingScores />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 pt-32 pb-20 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-2xl"
          >
            {/* Badge */}
            <Badge
              variant="outline"
              className="flex items-center gap-2 px-4 py-2 rounded-full border-burgundy/20 bg-white/50"
            >
              <span className="w-2 h-2 rounded-full bg-burgundy animate-pulse-dot" />
              <span className="text-sm font-medium text-slate-950">MVP Coming Soon</span>
            </Badge>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-slate-950 tracking-tighter leading-none text-shadow-white">
              League
              <br />
              Management
              <br />
              <span className="text-burgundy">Made Simple</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-lg">
              The bowling league app built for secretaries who want to spend less time on paperwork and more time enjoying the game.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button
                asChild
                size="lg"
                className="bg-burgundy hover:bg-burgundy/90 text-white rounded-full px-8 py-6 text-base font-semibold shadow-[0_4px_14px_rgba(139,21,56,0.3)] transition-smooth"
              >
                <a href="#signup">Get Early Access</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-slate-200 text-slate-950 rounded-full px-8 py-6 text-base font-semibold hover:bg-slate-50 transition-smooth"
              >
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </motion.div>

          {/* iPhone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateY: -15 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex justify-center lg:justify-end w-full max-w-sm lg:max-w-md"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-[280px] md:w-[320px] aspect-[9/19] bg-slate-950 rounded-[3rem] p-3 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-gradient-to-b from-burgundy/10 to-gold/10 rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                  {/* Placeholder Content */}
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-burgundy/20 rounded-2xl flex items-center justify-center">
                      <span className="text-burgundy text-2xl font-bold">P</span>
                    </div>
                    <p className="text-slate-500 text-sm font-medium">
                      App Screenshot
                      <br />
                      Coming Soon
                    </p>
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-950 rounded-full" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gold/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-burgundy/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>

        {/* Bouncing Chevron */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex justify-center mt-8"
        >
          <a href="#stats" className="animate-bounce-slow">
            <ChevronDown className="w-8 h-8 text-slate-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
