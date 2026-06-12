import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0A0A0F",
        charcoal: "#141418",
        "dark-surface": "#1A1A22",
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8D48B",
          dim: "#8B7632",
        },
        ivory: "#FAF7F0",
        cream: "#F5F0E8",
        "warm-gray": "#9A968E",
        "text-light": "#E8E4DD",
        "text-muted": "#7A766F",
        blush: "#D4637A",
        sage: "#8FA88A",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        body: ['"Outfit"', "sans-serif"],
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "slide-left": "slideLeft 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "slide-right": "slideRight 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "counter": "counter 2s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
          "50%": { transform: "translateX(-50%) translateY(8px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
