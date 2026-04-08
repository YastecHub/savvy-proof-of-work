"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

/* ── Data ───────────────────────────────────────────────────── */
interface Testimonial {
  alias: string;
  initials: string;
  platform: "Twitter" | "Telegram" | "Farcaster" | "Discord";
  quote: string;
  stars: number;
}

const row1: Testimonial[] = [
  {
    alias: "@degenape.eth",
    initials: "DA",
    platform: "Twitter",
    quote: "Savvy called $PEPE at literal zeroes while CT slept. I 40x'd my bag from one message in the alpha chat.",
    stars: 5,
  },
  {
    alias: "@0xPhantom",
    initials: "0P",
    platform: "Telegram",
    quote: "Joined the group skeptical. Two weeks later I caught a 12x on SOL plays. Savvy teaches you to fish on-chain.",
    stars: 5,
  },
  {
    alias: "@chain_monk",
    initials: "CM",
    platform: "Discord",
    quote: "In crypto since 2017. Savvy's track record is unmatched. The $XVAULT rug alert saved our group six figures.",
    stars: 5,
  },
  {
    alias: "@sigmagrindoor",
    initials: "SG",
    platform: "Twitter",
    quote: "Most alpha callers recycle CT takes. Savvy reads contracts, checks deployer wallets. Built different.",
    stars: 5,
  },
];

const row2: Testimonial[] = [
  {
    alias: "@liquidity_queen",
    initials: "LQ",
    platform: "Telegram",
    quote: "The Base chain thread alone was worth the price of admission. Farmed three airdrops I never would've found.",
    stars: 5,
  },
  {
    alias: "@ser_ngmi",
    initials: "SN",
    platform: "Farcaster",
    quote: "SOL under $10 is free money — Savvy said that when everyone wrote obituaries for Solana. King energy.",
    stars: 5,
  },
  {
    alias: "@anon_builder",
    initials: "AB",
    platform: "Twitter",
    quote: "Brought Savvy as launch advisor. His tokenomics feedback and community strategy were S-tier. $12M TVL day one.",
    stars: 4,
  },
  {
    alias: "@degen_sensei",
    initials: "DS",
    platform: "Telegram",
    quote: "78% win rate across two quarters is not luck. Savvy has a system and receipts are all on-chain.",
    stars: 5,
  },
];

/* ── Platform badge color ───────────────────────────────────── */
const platformColor: Record<string, string> = {
  Twitter: "text-sky-400",
  Telegram: "text-blue-400",
  Farcaster: "text-purple-400",
  Discord: "text-indigo-400",
};

/* ── Card component ─────────────────────────────────────────── */
function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="group relative w-[280px] sm:w-[320px] shrink-0 mx-2 sm:mx-3 rounded-xl border border-line bg-surface/60 p-5 transition-all duration-300 hover:border-jade/15 hover:bg-elevated/40 select-none">
      {/* Quote */}
      <div className="mb-4">
        <span className="absolute -top-1 left-4 font-display text-3xl text-jade/10 leading-none select-none">
          &ldquo;
        </span>
        <p className="font-mono text-[11px] sm:text-xs text-t-muted leading-relaxed pt-2">
          {t.quote}
        </p>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            size={11}
            className={i < t.stars ? "text-jade fill-jade/30" : "text-border"}
          />
        ))}
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-line mb-3" />

      {/* Author */}
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-full border border-jade/20 bg-jade/5 flex items-center justify-center shrink-0">
          <span className="font-mono text-[9px] font-bold text-jade/70">{t.initials}</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-mono text-xs text-t-primary truncate group-hover:text-jade transition-colors">
            {t.alias}
          </div>
          <div className={`font-mono text-[9px] uppercase tracking-wider ${platformColor[t.platform] ?? "text-t-muted"}`}>
            {t.platform}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────── */
export default function TestimonialsSection() {
  const doubled1 = [...row1, ...row1];
  const doubled2 = [...row2, ...row2];

  return (
    <section id="testimonials" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <p className="font-mono text-[10px] sm:text-xs text-t-muted uppercase tracking-[0.3em] mb-3">
            Voices from the Community
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-[0.15em] text-t-primary uppercase">
            The Council Speaks
          </h2>
          <div className="mt-4 mx-auto border-t border-dashed border-jade/20 w-24" />
        </motion.div>
      </div>

      {/* Marquee row 1 — left scroll */}
      <motion.div
        initial={{}}
        whileInView={{}}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="marquee-wrapper mb-4"
      >
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-base to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-base to-transparent" />
          <div className="flex w-max animate-marquee py-1">
            {doubled1.map((t, i) => (
              <TestimonialCard key={`r1-${t.alias}-${i}`} t={t} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Marquee row 2 — right scroll */}
      <motion.div
        initial={{}}
        whileInView={{}}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="marquee-wrapper"
      >
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-base to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-base to-transparent" />
          <div className="flex w-max animate-marquee-reverse py-1">
            {doubled2.map((t, i) => (
              <TestimonialCard key={`r2-${t.alias}-${i}`} t={t} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
