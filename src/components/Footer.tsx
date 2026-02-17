"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="relative bg-slate-950 pt-20 pb-10 overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-burgundy/20 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-7xl mx-auto px-6 lg:px-20"
      >
        {/* Main Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#" className="flex items-center gap-3">
              <Image
                src="/images/pinpal_logo.png"
                alt="PinPal logo"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <span className="font-[family-name:var(--font-leckerli)] text-2xl text-white">
                PinPal
              </span>
            </a>
            <p className="text-slate-400 text-sm max-w-xs text-center md:text-left">
              Bowling league management made simple for secretaries everywhere.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            <a
              href="#features"
              className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
            >
              Features
            </a>
            <a
              href="#stats"
              className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
            >
              Stats
            </a>
            <a
              href="#signup"
              className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
            >
              Terms
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} PinPal. All rights reserved.
          </p>
          <p className="text-slate-500">
            Built with care for bowling communities
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
