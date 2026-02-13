"use client";

import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-cream sticky top-0 z-50 border-b border-light-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-burgundy rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-burgundy">
            PinPal
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground hover:text-burgundy transition-colors font-medium">
            Features
          </a>
          <a href="#about" className="text-foreground hover:text-burgundy transition-colors font-medium">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-burgundy transition-colors font-medium">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <a
          href="#signup"
          className="hidden md:inline-flex bg-burgundy text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-burgundy/90 transition-colors"
        >
          Get Early Access
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-foreground"
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
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream border-t border-light-gray">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <a href="#features" className="text-foreground hover:text-burgundy transition-colors font-medium">
              Features
            </a>
            <a href="#about" className="text-foreground hover:text-burgundy transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-burgundy transition-colors font-medium">
              Contact
            </a>
            <a
              href="#signup"
              className="bg-burgundy text-white px-6 py-3 rounded-lg font-semibold text-sm text-center hover:bg-burgundy/90 transition-colors"
            >
              Get Early Access
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
