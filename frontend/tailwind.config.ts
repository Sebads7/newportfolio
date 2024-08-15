import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        "stroke-dashoffset": "stroke-dashoffset",
      },
      transitionDuration: {
        "350": "350ms",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-down": {
          "0%, 20%": {
            opacity: "0",
            transform: "translateY(-100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-400px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "zoom-in": {
          "0%": {
            opacity: "0",
            transform: "scale(.5)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "fade-in-up": "fade-in-up 1s  ease-out forwards",
        "fade-in-down": "fade-in-down 1s  ease-out forwards",
        "fade-in-left": "fade-in-left 1s  ease-out forwards",
        "fade-in-right": "fade-in-right 1s  ease-out forwards",
        "zoom-in": "zoom-in 1s  ease-out forwards",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }: PluginAPI) {
      matchUtilities(
        {
          "animate-delay": (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme("transitionDelay") },
      );
    }),
  ],
};

export default config;
