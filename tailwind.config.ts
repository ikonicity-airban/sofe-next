import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: ["class"],
  theme: {
    screens: {
      smallScreens: "320px",
      mobile: "420px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      monitor: "1800px",
      ...defaultTheme.screens,
    },
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        primary: "var(--foreground-primary)",
        "primary-light": "var(--foreground-primary-light)",
        light: "var(--light-color)",
        dark: "var(--dark-color)",
        muted: "var(--muted-text-light)",
        background: "var(--background-color)",
      },
      fontFamily: {
        code: "var(--font-code)",
        sans: "var(--font-sans)",
      },
      transformOrigin: {
        "0": "0%",
        "50": "50%",
        "100": "100%",
        custom: "10% 0%", // your custom coordinates
      },
    },
    animation: {
      "testimonials-scroll": "scroll-left 2s infinite",
      "shake-card": "shake-card 2000ms forwards",
      "fade-in": "fade-in 3s ease-in-out forwards",
      title: "title 3s ease-out forwards",
      "fade-left": "fade-left 3s ease-in-out forwards",
      "fade-right": "fade-right 3s ease-in-out forwards",
    },

    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
      "scroll-left": {
        "0%, 100%": {},
      },
      "fade-in": {
        "0%": {
          opacity: "0%",
        },
        "75%": {
          opacity: "0%",
        },
        "100%": {
          opacity: "100%",
        },
      },

      "fade-in-left": {
        "0%": {
          transform: "translateX(100%)",
          opacity: "0%",
        },

        "30%": {
          transform: "translateX(0%)",
          opacity: "100%",
        },
      },

      "fade-in-right": {
        "0%": {
          transform: "translateX(-100%)",
          opacity: "0%",
        },

        "30%": {
          transform: "translateX(0%)",
          opacity: "100%",
        },
      },
      "fade-left": {
        "0%": {
          transform: "translateX(100%)",
          opacity: "0%",
        },

        "30%": {
          transform: "translateX(0%)",
          opacity: "100%",
        },
        "100%": {
          opacity: "0%",
        },
      },
      "fade-right": {
        "0%": {
          transform: "translateX(-100%)",
          opacity: "0%",
        },

        "30%": {
          transform: "translateX(0%)",
          opacity: "100%",
        },
        "100%": {
          opacity: "0%",
        },
      },
      title: {
        "0%": {
          "line-height": "0%",
          "letter-spacing": "0.25em",
          opacity: "0",
        },
        "25%": {
          "line-height": "0%",
          opacity: "0%",
        },
        "80%": {
          opacity: "100%",
        },

        "100%": {
          "line-height": "100%",
          opacity: "100%",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
export default config;
