"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Shield, ExternalLink } from "lucide-react";

/* ── Stagger container ──────────────────────────────────────── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { y: 28, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const scaleIn = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ── Meteor component ───────────────────────────────────────── */
function Meteors({ count = 12 }: { count?: number }) {
  const meteors = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${3 + Math.random() * 4}s`,
        size: Math.random() * 1.5 + 0.5,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" suppressHydrationWarning>
      {meteors.map((m) => (
        <div
          key={m.id}
          className="absolute animate-meteor"
          style={{
            left: m.left,
            top: "-5%",
            animationDelay: m.delay,
            animationDuration: m.duration,
          }}
          suppressHydrationWarning
        >
          <div
            className="rounded-full bg-jade/30"
            style={{ width: `${m.size}px`, height: `${m.size * 60}px` }}
            suppressHydrationWarning
          />
        </div>
      ))}
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(26,61,40,0.12)_0%,_transparent_60%)]" />
      <Meteors count={15} />
      <div className="crt-overlay" />

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center gap-5 sm:gap-6 py-20 sm:py-24"
      >
        {/* Badge */}
        <motion.div variants={fadeUp}>
          <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 rounded-full border border-jade/15 bg-jade/5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-jade/70">
            <span className="w-1.5 h-1.5 rounded-full bg-jade animate-pulse-jade" />
            Project operations and community architect
          </span>
        </motion.div>

        {/* Hex avatar */}
        <motion.div variants={scaleIn} className="relative mt-2">
          {/* Outer rotating dashed ring */}
          <div className="absolute inset-[-16px] rounded-full border border-dashed border-jade-glow/40 animate-rotate-slow" />

          {/* Hex frame with jade border */}
          <div className="hex-clip w-32 h-36 sm:w-40 sm:h-44 md:w-48 md:h-52 bg-gradient-to-b from-jade/30 via-jade/10 to-jade/30 p-[2px]">
            <div className="hex-clip w-full h-full bg-surface overflow-hidden">
              <Image
                src="/avatar.jpg"
                alt="IM_SAVVY — armored knight"
                width={192}
                height={208}
                sizes="(max-width:640px) 128px, (max-width:768px) 160px, 192px"
                className="object-cover w-full h-full scale-110"
                priority
              />
            </div>
          </div>

          {/* Glow accent dots */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-jade rounded-full shadow-jade opacity-50" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-jade rounded-full shadow-jade opacity-50" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide leading-none"
        >
          <span className="bg-gradient-to-r from-jade via-emerald-300 to-jade bg-clip-text text-transparent">
            IM_SAVVY
          </span>
        </motion.h1>

        {/* Subheading block */}
        <motion.div
          variants={fadeUp}
          className="mt-8 w-full max-w-2xl"
        >
          {/* Title line */}
          <motion.div
            variants={fadeUp}
            className="font-mono text-xs sm:text-sm italic text-t-muted text-center mb-8"
            style={{ fontVariant: "small-caps", letterSpacing: "0.1em" }}
          >
            I build operations & community architecture.
          </motion.div>

          {/* Transformation stack */}
          <motion.div
            className="space-y-6 mb-6"
          >
            {[
              { left: "chaos", right: "clarity" },
              { left: "vision", right: "reality" },
              { left: "broken comms", right: "systems that scale" },
              { left: "loose teams", right: "engines that run" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (idx + 1), duration: 0.6 }}
                className="flex items-center justify-center gap-4 text-sm sm:text-base"
              >
                <span className="font-mono text-t-muted lowercase text-xs sm:text-sm">[{item.left}]</span>
                <span className="font-mono text-base sm:text-lg font-bold" style={{ color: "#4CAF8C" }}>→</span>
                <span className="font-display text-t-primary text-sm sm:text-lg">{item.right}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Final blockquote line */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="font-mono text-xs text-t-muted pl-3 border-l-2 border-jade text-center md:text-left"
          >
            I don't just manage groups. I build the engine that runs them.
          </motion.div>
        </motion.div>

        {/* Gradient line separator */}
        <motion.div
          variants={fadeUp}
          className="h-px w-2/5 mx-auto"
          style={{
            background: "linear-gradient(to right, transparent, var(--accent-primary), transparent)",
            margin: "32px 0",
          }}
        />

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-3"
        >
          <a
            href="#proof-of-work"
            className="group relative flex items-center justify-center gap-2 px-7 py-3 bg-jade/10 border border-jade/25 text-jade font-mono text-xs uppercase tracking-wider rounded-lg overflow-hidden transition-all duration-300 hover:bg-jade/15 hover:border-jade/40 hover:shadow-jade"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-jade/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <Shield size={14} className="relative" />
            <span className="relative">View Proof of Work</span>
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-7 py-3 border border-border text-t-muted font-mono text-xs uppercase tracking-wider rounded-lg hover:border-jade/20 hover:text-jade transition-all duration-300"
          >
            <ExternalLink size={14} />
            Reach the King
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={fadeUp} className="mt-8 sm:mt-12">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" as const }}
          >
            <ArrowDown size={18} className="text-t-muted/40" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
