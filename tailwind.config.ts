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
        nura: ["var(--font-nura)"],
        virgil: ["var(--font-virgil)"],
        patrick: ["var(--font-patrickhand)"],
        notoSansThai: ["var(--font-notoSansThai)"],
        product: ["var(--font-product)"],
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
          "1": "#F2F2F2",
          "2": "#ACACAC",
          "3": "#434343",
          "4": "#303030",
          "5": "#1E1E1E",
          "6": "#131313",
          "7": "#080808",
        },
        brand: {
          DEFAULT: "#D93A00",
          hover: "#962900",
        },
        accent: {
          DEFAULT: "#1B1B1B",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
