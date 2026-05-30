"use client";

import { motion } from "framer-motion";
import {
  Zap,
  ShieldAlert,
  Megaphone,
  Lightbulb,
  TrendingUp,
  Bot,
  type LucideIcon,
} from "lucide-react";

/* ── Mastery items ──────────────────────────────────────────── */
interface Mastery {
  icon: LucideIcon;
  title: string;
  description: string;
}

const masteries: Mastery[] = [
  {
    icon: Zap,
    title: "Engagement Strategy",
    description:
      "Engineering high retention systems that convert casual observers into committed, long term community members.",
  },
  {
    icon: ShieldAlert,
    title: "Chaos Management",
    description:
      "Maintaining operational stability during high volatility events, rapid launches, and unexpected crisis scenarios.",
  },
  {
    icon: Megaphone,
    title: "Brand Voice",
    description:
      "Defining a sharp, authentic narrative that resonates across social layers, from professional tech specs to viral culture.",
  },
  {
    icon: Lightbulb,
    title: "Project Advisor",
    description:
      "Providing strategic guidance on roadmaps and market positioning to bridge the gap between concept and launch.",
  },
  {
    icon: TrendingUp,
    title: "Growth Hacker",
    description:
      "Deploying aggressive, data backed tactics to scale visibility and user acquisition at maximum velocity.",
  },
  {
    icon: Bot,
    title: "Bot Setup",
    description:
      "Deploying custom automated infrastructure for 24/7 security, community moderation, and real time on chain alerts.",
  },
];

/* ── Animation ──────────────────────────────────────────────── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { y: 24 },
  visible: { y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ── Section ────────────────────────────────────────────────── */
export default function MasterySection() {
  return (
    <section id="mastery" className="relative py-16 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ── Section header (tobzyy-style) ────────────── */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-[0.15em] text-t-primary uppercase mb-3">
            What I Bring to the Table
          </h2>
          <p className="font-mono text-[10px] sm:text-xs text-t-muted uppercase tracking-[0.3em]">
            My Mastery Level
          </p>
          {/* Dashed underline separator (tobzyy-style) */}
          <div className="mt-4 border-t border-dashed border-jade/20 w-full max-w-xs" />
        </motion.div>

        {/* ── Mastery grid ────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {masteries.map((m) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.title}
                variants={fadeUp}
                className="group relative p-5 sm:p-6 rounded-xl border border-line bg-surface/40 hover:border-jade/15 hover:bg-elevated/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Jade left ledger line */}
                <div className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full bg-jade/15 group-hover:bg-jade/40 transition-colors duration-300" />

                {/* Icon */}
                <div className="w-9 h-9 rounded-lg border border-line bg-elevated/60 flex items-center justify-center mb-4 group-hover:border-jade/25 transition-colors">
                  <Icon size={16} className="text-jade/60 group-hover:text-jade transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-display text-sm sm:text-base tracking-wider text-t-primary mb-2 group-hover:text-jade transition-colors duration-300">
                  {m.title}
                </h3>

                {/* Description */}
                <p className="font-mono text-[11px] sm:text-xs text-t-muted leading-relaxed">
                  {m.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
