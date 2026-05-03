/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        /** Semantic UI tokens — edit RGB values in app/globals.css :root only */
        theme: {
          fg: "rgb(var(--theme-fg) / <alpha-value>)",
          "fg-soft": "rgb(var(--theme-fg-soft) / <alpha-value>)",
          muted: "rgb(var(--theme-muted) / <alpha-value>)",
          subtle: "rgb(var(--theme-subtle) / <alpha-value>)",
          faint: "rgb(var(--theme-faint) / <alpha-value>)",
          surface: "rgb(var(--theme-surface) / <alpha-value>)",
          "surface-muted": "rgb(var(--theme-surface-muted) / <alpha-value>)",
          "surface-soft": "rgb(var(--theme-surface-soft) / <alpha-value>)",
          border: "rgb(var(--theme-border) / <alpha-value>)",
          "border-light": "rgb(var(--theme-border-light) / <alpha-value>)",
          "border-strong": "rgb(var(--theme-border-strong) / <alpha-value>)",
          "icon-strong": "rgb(var(--theme-icon-strong) / <alpha-value>)",
          inverse: "rgb(var(--theme-inverse) / <alpha-value>)",
          "inverse-deep": "rgb(var(--theme-inverse-deep) / <alpha-value>)",
          "inverse-border": "rgb(var(--theme-inverse-border) / <alpha-value>)",
          "inverse-hover": "rgb(var(--theme-inverse-hover) / <alpha-value>)",
          "inverse-outline": "rgb(var(--theme-inverse-outline) / <alpha-value>)",
          "on-inverse-muted": "rgb(var(--theme-on-inverse-muted) / <alpha-value>)",
          "on-inverse-subtle": "rgb(var(--theme-on-inverse-subtle) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
