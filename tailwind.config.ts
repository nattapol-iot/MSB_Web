import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1B3B",
          50: "#EEF3FB",
          100: "#D6E1F2",
          200: "#A9BDDF",
          300: "#7B98CB",
          400: "#4D74B8",
          500: "#2A55A0",
          600: "#1E4080",
          700: "#152F60",
          800: "#0B1B3B",
          900: "#060F22",
        },
        brand: {
          blue: "#1E63E9",
          cyan: "#06B6D4",
          sky: "#38BDF8",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(11, 27, 59, 0.15)",
        card: "0 8px 24px -8px rgba(11, 27, 59, 0.12)",
        glow: "0 0 40px rgba(30, 99, 233, 0.25)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(60% 80% at 80% 20%, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0) 60%), radial-gradient(50% 70% at 20% 80%, rgba(30,99,233,0.18) 0%, rgba(30,99,233,0) 60%)",
        "brand-gradient":
          "linear-gradient(135deg, #0B1B3B 0%, #1E63E9 50%, #06B6D4 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
