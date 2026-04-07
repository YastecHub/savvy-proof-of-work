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
      "Architecting community engagement funnels that convert lurkers into active participants and holders into evangelists.",
  },
  {
    icon: ShieldAlert,
    title: "Chaos Management",
    description:
      "FUD storms, exploit panics, migration dramas — keeping communities stable when everything is on fire.",
  },
  {
    icon: Megaphone,
    title: "Brand Voice",
    description:
      "Crafting the tone, language, and narrative identity that makes a project instantly recognizable on the timeline.",
  },
  {
    icon: Lightbulb,
    title: "Project Advisor",
    description:
      "Tokenomics review, launch sequencing, partnership strategy, and governance design from pre-seed to mainnet.",
  },
  {
    icon: TrendingUp,
    title: "Growth Hacker",
    description:
      "Airdrop campaigns, quest platforms, KOL coordination, and viral loops engineered to move metrics, not just impressions.",
  },
  {
    icon: Bot,
    title: "Bot Setup",
    description:
      "Custom Discord/Telegram bots — verification flows, raid tooling, analytics dashboards, and automated moderation.",
  },
];

/* ── Animation ──────────────────────────────────────────────── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ── Section ────────────────────────────────────────────────── */
export default function MasterySection() {
  return (
    <section id="mastery" className="relative py-16 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ── Section header (tobzyy-style) ────────────── */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <p className="font-mono text-[10px] sm:text-xs text-t-muted uppercase tracking-[0.3em] mb-3">
            What I Bring to the Table
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-[0.15em] text-t-primary uppercase">
            The Mastery Level
          </h2>
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
