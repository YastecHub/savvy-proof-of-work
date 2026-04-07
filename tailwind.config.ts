import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "var(--bg-base)",
        surface: "var(--bg-surface)",
        elevated: "var(--bg-elevated)",
        jade: "var(--accent-primary)",
        "jade-glow": "var(--accent-glow)",
        gold: "var(--accent-gold)",
        "t-primary": "var(--text-primary)",
        "t-muted": "var(--text-muted)",
        line: "var(--border)",
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      boxShadow: {
        jade: "0 0 8px #4ade6e44, 0 0 24px #1a3d2866",
        "jade-lg": "0 0 12px #4ade6e55, 0 0 40px #1a3d2844, 0 0 80px #1a3d2822",
        gold: "0 0 8px #a07d3a44, 0 0 20px #a07d3a22",
      },
      keyframes: {
        "meteor": {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": { transform: "rotate(215deg) translateX(-600px)", opacity: "0" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-jade": {
          "0%, 100%": { opacity: "0.6", filter: "brightness(1)" },
          "50%": { opacity: "1", filter: "brightness(1.2)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "underline-grow": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "meteor": "meteor 5s linear infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "marquee": "marquee 45s linear infinite",
        "marquee-reverse": "marquee-reverse 45s linear infinite",
        "pulse-jade": "pulse-jade 3s ease-in-out infinite",
        "rotate-slow": "rotate-slow 30s linear infinite",
        "blink": "blink 1s step-end infinite",
        "underline-grow": "underline-grow 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
