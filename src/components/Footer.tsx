"use client";

import { motion } from "framer-motion";
import { Crown } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      {/* Top gradient glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-jade/15 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Left: animated crown + logo */}
          <div className="flex items-center gap-2.5">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" as const }}
            >
              <Crown size={16} className="text-jade/50" />
            </motion.div>
            <span className="font-display text-sm tracking-wider text-jade/60">
              IM_SAVVY
            </span>
          </div>

          {/* Center: copyright */}
          <p className="font-mono text-[10px] text-t-muted order-3 md:order-2">
            &copy; 2025 IM_SAVVY &mdash; All Rights Reserved
          </p>

          {/* Right: tagline */}
          <p className="font-mono text-[10px] text-t-muted/60 order-2 md:order-3">
            Built on the chain. Powered by conviction.
          </p>
        </div>
      </div>
    </footer>
  );
}
