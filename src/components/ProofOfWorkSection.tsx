"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, ChevronDown } from "lucide-react";

/* ── Card data ──────────────────────────────────────────────── */
interface PowCard {
  category: string;
  title: string;
  description: string;
  result: string;
  chain?: string;
  date: string;
}

const categoryStyle: Record<string, { border: string; text: string }> = {
  "Alpha Call": { border: "border-l-jade/40", text: "text-jade" },
  Trade: { border: "border-l-gold/40", text: "text-gold" },
  Thread: { border: "border-l-purple-500/40", text: "text-purple-400" },
  Community: { border: "border-l-sky-500/40", text: "text-sky-400" },
  Security: { border: "border-l-red-500/40", text: "text-red-400" },
  Project: { border: "border-l-gold/40", text: "text-gold" },
};

const allCards: PowCard[] = [
  {
    category: "Alpha Call",
    title: "Early $PEPE Accumulation",
    description: "Called $PEPE at $0.0000002 in the alpha group 48hrs before CT caught on. Members locked in life-changing gains.",
    result: "+4,200% ROI",
    chain: "ETH",
    date: "Apr 2023",
  },
  {
    category: "Trade",
    title: "SOL Swing $9.80 → $68",
    description: "Published on-chain thesis on Solana recovery at maximum fear. Entered $9.80, scaled out $58–68.",
    result: "+594% Gain",
    chain: "SOL",
    date: "Oct 2023",
  },
  {
    category: "Project",
    title: "Launch Advisor — SynapseDAO",
    description: "Advised tokenomics, vesting, and community bootstrapping. Fully subscribed raise, top-10 TVL on launch.",
    result: "$12M TVL Day 1",
    chain: "ARB",
    date: "Jan 2024",
  },
  {
    category: "Thread",
    title: "Base Chain Ecosystem Breakdown",
    description: "22-tweet deep dive on emerging Base ecosystem — key protocols, airdrop routes, hidden gems before mainstream coverage.",
    result: "28k Impressions",
    chain: "BASE",
    date: "Aug 2023",
  },
  {
    category: "Security",
    title: "Rug Detection — $XVAULT",
    description: "Identified malicious contract code 6hrs before rug. Alerted group and saved members ~$340k in exposure.",
    result: "Rug Caught Early",
    chain: "ETH",
    date: "Mar 2024",
  },
  {
    category: "Community",
    title: "Alpha Group → 500+ Members",
    description: "Grew invite-only community from 40 to 500+ verified members. Maintained 78% win-rate across two quarters.",
    result: "78% Win Rate",
    date: "Dec 2023",
  },
];

const INITIAL = 6;

/* ── Animation ──────────────────────────────────────────────── */
const cardVariant = {
  hidden: { y: 32 },
  visible: (i: number) => ({
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" as const },
  }),
  exit: { y: -16, transition: { duration: 0.2 } },
};

/* ── Section ────────────────────────────────────────────────── */
export default function ProofOfWorkSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? allCards : allCards.slice(0, INITIAL);

  return (
    <section id="proof-of-work" className="relative py-16 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ── Header (tobzyy-style) ───────────────────── */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <Crown size={18} className="text-gold/60" />
            <p className="font-mono text-[10px] sm:text-xs text-t-muted uppercase tracking-[0.3em]">
              Track Record
            </p>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-[0.15em] text-t-primary uppercase">
            Proof of Work
          </h2>
          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="mt-4 h-[1px] w-full max-w-xs bg-gradient-to-r from-jade/50 to-transparent origin-left"
          />
        </motion.div>

        {/* ── Cards grid ──────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((card, i) => {
              const style = categoryStyle[card.category] ?? { border: "border-l-jade/20", text: "text-jade" };
              return (
                <motion.div
                  layout
                  key={card.title}
                  custom={i}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  viewport={{ once: true, margin: "-40px" }}
                  className={`group relative flex flex-col justify-between p-5 rounded-xl border border-line bg-surface/60 border-l-[3px] ${style.border} hover:bg-elevated/50 hover:border-jade/15 transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_left,_rgba(26,61,40,0.08)_0%,_transparent_70%)]" />

                  <div className="relative z-10">
                    {/* Top: badge + date */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`font-mono text-[10px] uppercase tracking-wider ${style.text}`}>
                        {card.category}
                      </span>
                      <span className="font-mono text-[10px] text-t-muted">
                        {card.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-sm sm:text-base tracking-wide text-t-primary mb-2 group-hover:text-jade transition-colors duration-300">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="font-mono text-[11px] text-t-muted leading-relaxed mb-4">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom: result + chain */}
                  <div className="relative z-10 flex items-end justify-between gap-3 pt-3 border-t border-line">
                    <span className="font-mono text-lg sm:text-xl font-bold text-jade">
                      {card.result}
                    </span>
                    {card.chain && (
                      <span className="font-mono text-[9px] uppercase tracking-wider text-t-muted px-2 py-0.5 rounded border border-line bg-elevated/40">
                        {card.chain}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Load more */}
        {!showAll && allCards.length > INITIAL && (
          <motion.div
            initial={{}}
            whileInView={{}}
            viewport={{ once: true }}
            className="flex justify-center mt-10"
          >
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="group flex items-center gap-2 px-8 py-3 font-mono text-xs uppercase tracking-wider text-t-muted border border-line rounded-lg hover:border-jade/25 hover:text-jade transition-all duration-300"
            >
              Load More
              <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
