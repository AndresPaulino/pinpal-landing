"use client";

import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setStatus("loading");

    // Simulate API call - replace with actual newsletter service integration
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("success");
    setEmail("");
  };

  return (
    <section id="signup" className="bg-burgundy py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-20 text-center">
        {/* Headline */}
        <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Be the First to Try PinPal
        </h2>

        {/* Subheadline */}
        <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
          Join league secretaries getting early access to the MVP. Sign up for updates and be first in line.
        </p>

        {/* Form */}
        {status === "success" ? (
          <div className="bg-white/10 rounded-xl p-6 max-w-md mx-auto">
            <div className="text-white text-lg font-semibold mb-2">
              You&apos;re on the list!
            </div>
            <p className="text-white/80">
              We&apos;ll let you know when PinPal is ready.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-foreground placeholder:text-gray focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-gold text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors disabled:opacity-70"
            >
              {status === "loading" ? "Joining..." : "Get Early Access"}
            </button>
          </form>
        )}

        {/* Trust Line */}
        <p className="text-white/70 text-sm mt-6">
          Join 100+ league secretaries on the waitlist
        </p>
      </div>
    </section>
  );
}
