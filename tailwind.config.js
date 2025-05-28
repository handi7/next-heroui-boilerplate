import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(alert|autocomplete|badge|button|card|checkbox|chip|code|date-picker|divider|drawer|dropdown|image|input|kbd|link|listbox|modal|navbar|number-input|pagination|radio|select|snippet|spinner|toggle|table|toast|ripple|form|popover|scroll-shadow|calendar|date-input|menu|spacer).js",
  ],

  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
        foreground: "rgb(var(--color-foreground) / <alpha-value>)",
        divider: "rgb(var(--color-divider) / <alpha-value>)",
        overlay: "rgb(var(--color-overlay) / <alpha-value>)",
        focus: "rgb(var(--color-focus) / <alpha-value>)",
        content1: "rgb(var(--color-content1) / <alpha-value>)",
        content2: "rgb(var(--color-content2) / <alpha-value>)",
        content3: "rgb(var(--color-content3) / <alpha-value>)",
        content4: "rgb(var(--color-content4) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        danger: "rgb(var(--color-danger) / <alpha-value>)",
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },

  darkMode: "class",
  plugins: [heroui()],
};

module.exports = config;
