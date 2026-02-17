"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="signup" className="relative bg-burgundy py-24 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          {/* Glass Card */}
          <div className="glass-dark rounded-3xl p-10 md:p-16">
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-4">
              Be the First to
              <br />
              <span className="text-gold">Try <span className="font-[family-name:var(--font-leckerli)]">PinPal</span></span>
            </h2>

            {/* Subheadline */}
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">
              Join league secretaries getting early access to the MVP. Sign up for updates and be first in line.
            </p>

            {/* Form */}
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-gold" />
                </div>
                <div className="text-white text-xl font-bold">
                  You&apos;re on the list!
                </div>
                <p className="text-white/70">
                  We&apos;ll let you know when PinPal is ready.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto"
              >
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 h-14 px-6 rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-gold transition-all"
                  required
                />
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  size="lg"
                  className="h-14 px-8 bg-gold hover:bg-gold/90 text-slate-950 rounded-full font-semibold transition-smooth disabled:opacity-70 group"
                >
                  {status === "loading" ? (
                    "Joining..."
                  ) : (
                    <>
                      Get Early Access
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            )}

            {/* Error Message */}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-300 text-sm mt-4"
              >
                {errorMsg}
              </motion.p>
            )}

            {/* Trust Line */}
            {status !== "success" && (
              <p className="text-white/50 text-sm mt-6">
                Join 100+ league secretaries on the waitlist
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
