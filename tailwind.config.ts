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
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        "primary-light": "var(--foreground-primary-light)",
        light: "var(--light-color)",
        dark: "var(--dark-color)",
        muted: {
          DEFAULT: "hsla(var(--muted))",
          foreground: "hsla(var(--muted-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        code: "var(--font-code)",
        sans: "var(--font-sans)",
      },
      transformOrigin: {
        "0": "0%",
        "50": "50%",
        "100": "100%",
        custom: "10% 0%",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};
export default config;
