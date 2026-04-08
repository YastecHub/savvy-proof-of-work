"use client";

import { useRef, useCallback, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* ── Screenshot data ──────────────────────────────────────── */
interface Screenshot {
  image: string;
  caption: string;
  source: string;
}

const row1: Screenshot[] = [
  {
    image: "/images/savvy1.jpg",
    caption:
      "Live BuyBot tracking a $WTF Coin transaction automated on-chain alerts powering the current project",
    source: "Telegram",
  },
  {
    image: "/images/savvy8.jpg",
    caption:
      "$WTF inner circle 535 members strong, building digital assets and scaling generational wealth",
    source: "Telegram",
  },
  {
    image: "/images/savvy3.jpg",
    caption:
      "\"If anyone can deliver, it's you\" client endorsing consistent delivery standards",
    source: "Telegram",
  },
  {
    image: "/images/savvy5.jpg",
    caption:
      "\"Might just hire u for my other project\" satisfaction leading to repeat business",
    source: "X (Twitter)",
  },
];

const row2: Screenshot[] = [
  {
    image: "/images/savvy2.jpg",
    caption:
      "Real-time $WTF transaction monitoring community buybot deployment driving $300k+ ATH",
    source: "Telegram",
  },
  {
    image: "/images/savvy4.jpg",
    caption:
      "Client consulting on X Spaces strategy and community engagement campaigns",
    source: "Telegram",
  },
  {
    image: "/images/savvy6.jpg",
    caption:
      "\"You give good advice\" advisory skills recognized by industry peer",
    source: "X (Twitter)",
  },
  {
    image: "/images/savvy7.jpg",
    caption:
      "\"Let's stay in touch\" building long-term partnerships with satisfied clients",
    source: "Telegram",
  },
];

/* ── Draggable marquee wrapper ────────────────────────────── */
const SWIPE_THRESHOLD = 50;

function DraggableMarquee({
  children,
  animationClass,
  className,
}: {
  children: React.ReactNode;
  animationClass: string;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0, dragging: false });

  const getClientX = (e: React.TouchEvent | React.MouseEvent) =>
    "touches" in e ? e.touches[0].clientX : e.clientX;

  const handleStart = useCallback(
    (e: React.TouchEvent | React.MouseEvent) => {
      const el = trackRef.current;
      if (!el) return;
      dragState.current = {
        startX: getClientX(e),
        scrollLeft: el.parentElement!.scrollLeft,
        dragging: true,
      };
      setIsDragging(true);
    },
    [],
  );

  const handleMove = useCallback(
    (e: React.TouchEvent | React.MouseEvent) => {
      if (!dragState.current.dragging) return;
      const parent = trackRef.current?.parentElement;
      if (!parent) return;
      const dx = getClientX(e) - dragState.current.startX;
      if (Math.abs(dx) > 10) {
        e.preventDefault();
      }
      parent.scrollLeft = dragState.current.scrollLeft - dx;
    },
    [],
  );

  const handleEnd = useCallback(() => {
    dragState.current.dragging = false;
    setIsDragging(false);
  }, []);

  return (
    <div className={`marquee-wrapper ${className ?? ""}`}>
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-base to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-base to-transparent" />
        <div
          className="overflow-x-auto scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            ref={trackRef}
            className={`flex w-max py-1 cursor-grab active:cursor-grabbing ${
              isDragging ? "" : animationClass
            }`}
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Card component ───────────────────────────────────────── */
function ScreenshotCard({ s, eager }: { s: Screenshot; eager?: boolean }) {
  return (
    <div className="group relative w-[240px] sm:w-[270px] shrink-0 mx-2 sm:mx-3 rounded-xl border border-line bg-surface/60 overflow-hidden transition-all duration-300 hover:border-jade/20 hover:shadow-jade select-none">
      {/* Image */}
      <div className="relative h-[300px] sm:h-[340px] overflow-hidden bg-elevated">
        {/* Shimmer skeleton — visible until image loads over it */}
        <div className="absolute inset-0 bg-gradient-to-r from-elevated via-surface to-elevated animate-shimmer bg-[length:200%_100%]" />
        <Image
          src={s.image}
          alt={s.caption}
          fill
          className="object-cover relative z-[1] transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 240px, 270px"
          loading={eager ? "eager" : "lazy"}
          priority={eager}
          draggable={false}
        />
        {/* Subtle vignette */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-base/60 via-transparent to-base/20 pointer-events-none" />
      </div>

      {/* Caption */}
      <div className="p-3.5 sm:p-4 border-t border-line/50 bg-surface/80">
        <p className="font-mono text-[10px] sm:text-[11px] text-t-muted leading-relaxed line-clamp-2">
          {s.caption}
        </p>
        <div className="mt-2 flex items-center gap-1.5">
          <div className="w-1 h-1 rounded-full bg-jade/40" />
          <span className="font-mono text-[9px] uppercase tracking-wider text-jade/50">
            via {s.source}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Section ──────────────────────────────────────────────── */
export default function TestimonialsSection() {
  const doubled1 = [...row1, ...row1];
  const doubled2 = [...row2, ...row2];

  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-[0.15em] text-t-primary uppercase font-bold mb-3">
            Voices From The Community
          </h2>
          <p className="font-mono text-[10px] sm:text-xs text-t-muted uppercase tracking-[0.3em]">
            Satisfactory Outcomes
          </p>
          <div className="mt-4 mx-auto border-t border-dashed border-jade/20 w-24" />
        </motion.div>
      </div>

      {/* Marquee row 1 — left scroll, draggable */}
      <DraggableMarquee animationClass="animate-marquee" className="mb-4 sm:mb-5">
        {doubled1.map((s, i) => (
          <ScreenshotCard key={`r1-${i}`} s={s} eager={i < 4} />
        ))}
      </DraggableMarquee>

      {/* Marquee row 2 — right scroll, draggable */}
      <DraggableMarquee animationClass="animate-marquee-reverse">
        {doubled2.map((s, i) => (
          <ScreenshotCard key={`r2-${i}`} s={s} eager={i < 4} />
        ))}
      </DraggableMarquee>
    </section>
  );
}
