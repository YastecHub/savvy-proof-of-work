"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

/* ── Animation ──────────────────────────────────────────────── */
const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

/* ── Social links ───────────────────────────────────────────── */
const socials = [
  {
    label: "Twitter / X",
    href: "https://x.com/im_rebirthsavvy",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
      </svg>
    ),
  },
];

/* ── Section ────────────────────────────────────────────────── */
export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xldrpvje", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch {
      // silent fail — form stays open for retry
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(26,61,40,0.06)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14 text-center"
        >
          <p className="font-mono text-[10px] sm:text-xs text-t-muted uppercase tracking-[0.3em] mb-3">
            Let&apos;s Connect
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-[0.15em] text-t-primary uppercase">
            Reach IM_SAVVY
          </h2>
          <div className="mt-4 mx-auto border-t border-dashed border-jade/20 w-24" />
        </motion.div>

        {/* Form container with shimmer border */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="rounded-2xl border border-line bg-surface/40 p-6 sm:p-8"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <CheckCircle2 size={40} className="text-jade/60 mb-4" />
              <h3 className="font-display text-xl tracking-wider text-jade mb-2">
                Message Sent
              </h3>
              <p className="font-mono text-xs text-t-muted">
                The King has received your scroll. Expect a raven.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-7"
            >
              {/* Name */}
              <motion.div variants={fadeUp} className="relative group">
                <label
                  htmlFor="name"
                  className="block font-mono text-[10px] text-t-muted uppercase tracking-[0.2em] mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="ser anon"
                  className="w-full bg-transparent border-b border-line pb-3 font-mono text-sm text-t-primary placeholder:text-t-muted/30 outline-none transition-all duration-300 focus:border-jade focus:shadow-[0_2px_12px_-4px_rgba(74,222,110,0.2)]"
                  suppressHydrationWarning
                />
              </motion.div>

              {/* Handle */}
              <motion.div variants={fadeUp} className="relative group">
                <label
                  htmlFor="handle"
                  className="block font-mono text-[10px] text-t-muted uppercase tracking-[0.2em] mb-2"
                >
                  Telegram / Twitter Handle
                </label>
                <input
                  id="handle"
                  name="handle"
                  type="text"
                  required
                  placeholder="@yourhandle"
                  className="w-full bg-transparent border-b border-line pb-3 font-mono text-sm text-t-primary placeholder:text-t-muted/30 outline-none transition-all duration-300 focus:border-jade focus:shadow-[0_2px_12px_-4px_rgba(74,222,110,0.2)]"
                  suppressHydrationWarning
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeUp} className="relative group">
                <label
                  htmlFor="message"
                  className="block font-mono text-[10px] text-t-muted uppercase tracking-[0.2em] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="What brings you to the court?"
                  className="w-full bg-transparent border-b border-line pb-3 font-mono text-sm text-t-primary placeholder:text-t-muted/30 outline-none resize-none transition-all duration-300 focus:border-jade focus:shadow-[0_2px_12px_-4px_rgba(74,222,110,0.2)]"
                  suppressHydrationWarning
                />
              </motion.div>

              {/* Submit */}
              <motion.div variants={fadeUp}>
                <button
                  type="submit"
                  disabled={sending}
                  className="group w-full flex items-center justify-center gap-2 py-3.5 bg-jade/10 border border-jade/25 text-jade font-mono text-xs uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-jade/15 hover:border-jade/40 hover:shadow-jade disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={14} />
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </motion.div>
            </form>
          )}
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center justify-center gap-3 mt-8"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full border border-line bg-surface/60 flex items-center justify-center text-t-muted hover:text-jade hover:border-jade/30 hover:shadow-jade transition-all duration-300"
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
