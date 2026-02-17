"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`
          glass rounded-full px-6 py-3 flex items-center justify-between gap-8
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${scrolled ? "shadow-lg" : "shadow-sm"}
        `}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image
              src="/images/pinpal_logo.png"
              alt="PinPal logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
          <span className="font-[family-name:var(--font-leckerli)] text-xl text-slate-950">
            PinPal
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="nav-link text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-slate-950 transition-colors"
          >
            Features
          </a>
          <a
            href="#stats"
            className="nav-link text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-slate-950 transition-colors"
          >
            Stats
          </a>
          <a
            href="#signup"
            className="nav-link text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-slate-950 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <Button
          asChild
          className="hidden md:inline-flex bg-burgundy hover:bg-burgundy/90 text-white rounded-full px-6 py-2 text-sm font-semibold shadow-[0_4px_14px_rgba(139,21,56,0.25)] transition-smooth"
        >
          <a href="#signup">Get Early Access</a>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5 text-slate-950"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-20 left-4 right-4 glass rounded-2xl p-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-slate-950 transition-colors"
              >
                Features
              </a>
              <a
                href="#stats"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-slate-950 transition-colors"
              >
                Stats
              </a>
              <a
                href="#signup"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-slate-950 transition-colors"
              >
                Contact
              </a>
              <Button
                asChild
                className="bg-burgundy hover:bg-burgundy/90 text-white rounded-full px-6 py-3 text-sm font-semibold mt-2"
              >
                <a href="#signup" onClick={() => setMobileMenuOpen(false)}>
                  Get Early Access
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
