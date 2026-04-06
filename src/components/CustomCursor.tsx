"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (dot.current) {
        dot.current.style.left = `${e.clientX}px`;
        dot.current.style.top = `${e.clientY}px`;
      }
      if (ring.current) {
        ring.current.style.left = `${e.clientX}px`;
        ring.current.style.top = `${e.clientY}px`;
      }
    };

    const grow = () => {
      if (dot.current) { dot.current.style.width = "14px"; dot.current.style.height = "14px"; }
      if (ring.current) { ring.current.style.width = "44px"; ring.current.style.height = "44px"; ring.current.style.borderColor = "rgba(74,222,110,0.4)"; }
    };
    const shrink = () => {
      if (dot.current) { dot.current.style.width = "8px"; dot.current.style.height = "8px"; }
      if (ring.current) { ring.current.style.width = "32px"; ring.current.style.height = "32px"; ring.current.style.borderColor = "rgba(74,222,110,0.2)"; }
    };

    window.addEventListener("mousemove", onMove);
    const els = document.querySelectorAll("a, button");
    els.forEach((el) => { el.addEventListener("mouseenter", grow); el.addEventListener("mouseleave", shrink); });

    return () => {
      window.removeEventListener("mousemove", onMove);
      els.forEach((el) => { el.removeEventListener("mouseenter", grow); el.removeEventListener("mouseleave", shrink); });
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot hidden md:block" />
      <div ref={ring} className="cursor-ring hidden md:block" />
    </>
  );
}
