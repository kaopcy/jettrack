import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        google: ["var(--font-google)"],
      },

      colors: {
        background: {
          DEFAULT: "#131215",
          selected: "#1A282D",
          weak: "#04090A",
          medium: "#131313",
          strong: "#0F1A1C",
          hover: "#131F23",
        },
        text: {
          "5": "#1E1E1E",
        },
        primary: {
          DEFAULT: "#284a62",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
