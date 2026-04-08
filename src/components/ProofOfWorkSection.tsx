"use client";

import { motion } from "framer-motion";
import { Crown, Briefcase, type LucideIcon, Shield, Megaphone, Bot, Users, Rocket } from "lucide-react";

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
    role: "Community Operations",
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
