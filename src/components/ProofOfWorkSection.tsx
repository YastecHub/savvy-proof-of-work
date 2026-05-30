"use client";

import { motion } from "framer-motion";
import { Crown, Briefcase, type LucideIcon, Shield, Megaphone, Bot, Users, Rocket, TrendingUp, Target, Zap } from "lucide-react";

/* ── Experience data ───────────────────────────────────────── */
interface Experience {
  company: string;
  ticker?: string;
  role: string;
  icon: LucideIcon;
  description: string;
  roleColor: string;
}

const experiences: Experience[] = [
  {
    company: "Aegis Layer AI",
    role: "Project Manager",
    icon: Briefcase,
    description:
      "Orchestrated technical roadmaps and internal workflows to ensure the seamless delivery of AI utility milestones.",
    roleColor: "text-jade",
  },
  {
    company: "Cooperanth Consulting LLC",
    ticker: "$CATH",
    role: "Community Manager",
    icon: Users,
    description:
      "Directed community architecture and engagement strategies to align consulting services with token holder interests.",
    roleColor: "text-sky-400",
  },
  {
    company: "Whale Tea Coin & PUMPRAID",
    role: "Project Advisor",
    icon: Rocket,
    description:
      "Provided strategic oversight on market positioning and viral growth mechanics to maximize project visibility.",
    roleColor: "text-gold",
  },
  {
    company: "Enzo Coin",
    role: "Moderator",
    icon: Shield,
    description:
      "Secured the community ecosystem via rapid response moderation to mitigate bot attacks and misinformation.",
    roleColor: "text-red-400",
  },
  {
    company: "Trump Coin",
    role: "Community Moderator",
    icon: Megaphone,
    description:
      "Optimized communication channels to handle rapid scaling and massive influxes of new members.",
    roleColor: "text-purple-400",
  },
  {
    company: "Project PUMPRAID",
    role: "Project Advisor & Lead Moderator",
    icon: Bot,
    description:
      "Designed strategic engagement frameworks to coordinate community raids and maximize social media reach.",
    roleColor: "text-gold",
  },
];

/* ── Animation ──────────────────────────────────────────────── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const slideIn = {
  hidden: { x: -24 },
  visible: { x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ── Section ────────────────────────────────────────────────── */
export default function ProofOfWorkSection() {
  return (
    <section id="proof-of-work" className="relative py-16 sm:py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* ── Header ─────────────────────────────────── */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 sm:mb-20"
        >
          <div className="flex items-center gap-3 mb-3">
            <Crown size={18} className="text-gold/60" />
            <p className="font-mono text-[10px] sm:text-xs text-t-muted uppercase tracking-[0.3em]">
              IM_SAVVY Track Record
            </p>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-[0.15em] text-t-primary uppercase">
            Proof of Work
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="mt-4 h-[1px] w-full max-w-xs bg-gradient-to-r from-jade/50 to-transparent origin-left"
          />
        </motion.div>

        {/* ── Currently Working On ─────────────────── */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14 sm:mb-20"
        >
          <div className="relative rounded-xl border border-jade/25 bg-jade/[0.03] p-5 sm:p-7 overflow-hidden">
            {/* Glow accent */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-jade/5 rounded-full blur-3xl pointer-events-none" />

            {/* Label */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-jade opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-jade" />
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-jade">
                Currently Working On
              </span>
            </div>

            {/* Project title */}
            <h3 className="font-display text-lg sm:text-xl md:text-2xl tracking-wider text-t-primary mb-1">
              WTF
              <span className="ml-2 font-mono text-xs sm:text-sm text-t-muted/60">$WTF</span>
            </h3>
            <span className="inline-block font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-gold mb-4">
              Project Advisor — Digital Marketing Asset
            </span>

            {/* Key points */}
            <div className="space-y-3 mt-2">
              <div className="flex items-start gap-2.5">
                <Target size={13} className="text-jade/60 shrink-0 mt-[3px]" />
                <p className="font-mono text-[11px] sm:text-xs text-t-muted leading-relaxed">
                  <span className="text-t-primary/80 font-medium">Community Coordination:</span>{" "}
                  Implementing strategic engagement frameworks to unify holder activity and maximize organic social reach.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <TrendingUp size={13} className="text-jade/60 shrink-0 mt-[3px]" />
                <p className="font-mono text-[11px] sm:text-xs text-t-muted leading-relaxed">
                  <span className="text-t-primary/80 font-medium">Market Impact:</span>{" "}
                  Successfully orchestrated community alignment, driving the project to a $300k+ ATH Market Cap within the first 5 days.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <Zap size={13} className="text-jade/60 shrink-0 mt-[3px]" />
                <p className="font-mono text-[11px] sm:text-xs text-t-muted leading-relaxed">
                  <span className="text-t-primary/80 font-medium">Current Focus:</span>{" "}
                  Scaling outreach and sustaining high-velocity growth through tactical social positioning.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Past Experience label ──────────────────── */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-line/50" />
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-t-muted/50">
            Past Experience
          </span>
          <div className="h-px flex-1 bg-line/50" />
        </div>

        {/* ── Timeline ────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative"
        >
          {/* Vertical timeline line */}
          <div className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-jade/30 via-line to-transparent" />

          <div className="space-y-0">
            {experiences.map((exp) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.company}
                  variants={slideIn}
                  className="group relative flex gap-5 sm:gap-7 pb-10 sm:pb-12 last:pb-0"
                >
                  {/* Timeline node */}
                  <div className="relative z-10 shrink-0 mt-1">
                    <div className="w-[31px] h-[31px] sm:w-[39px] sm:h-[39px] rounded-full border border-line bg-surface flex items-center justify-center group-hover:border-jade/30 group-hover:bg-elevated/60 transition-all duration-300">
                      <Icon size={14} className="text-t-muted group-hover:text-jade transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pt-0.5">
                    {/* Role badge */}
                    <span className={`inline-block font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] ${exp.roleColor} mb-2`}>
                      {exp.role}
                    </span>

                    {/* Company name */}
                    <h3 className="font-display text-base sm:text-lg md:text-xl tracking-wider text-t-primary group-hover:text-jade transition-colors duration-300 mb-1">
                      {exp.company}
                      {exp.ticker && (
                        <span className="ml-2 font-mono text-xs text-t-muted/60">
                          {exp.ticker}
                        </span>
                      )}
                    </h3>

                    {/* Description */}
                    <div className="flex items-start gap-2 mt-2.5">
                      <span className="shrink-0 mt-[7px] w-1 h-1 rounded-full bg-jade/40" />
                      <p className="font-mono text-[11px] sm:text-xs text-t-muted leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Bottom accent line on hover */}
                    <div className="mt-4 h-px w-0 group-hover:w-full bg-gradient-to-r from-jade/20 to-transparent transition-all duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
