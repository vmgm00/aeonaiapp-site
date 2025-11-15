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
        aeon: {
          tint: "var(--aeon-tint)",
          bg: "var(--aeon-bg)",
          card: "var(--aeon-card)",
          text: "var(--aeon-text)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
