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
        background: {
          DEFAULT: "#ffffff",
          200: "#E0E0E0",
          400: "#BFBFBF",
          500: "#A1A1A1",
          600: "#808080",
          700: "#616161",
          800: "#404040",
          900: "#212121",
        },
        primary: {},
        secondary: {},
        text: {
          100: "#DBDBDB",
          200: "#B5B5B5",
          300: "#919191",
          400: "#6E6E6E",
          light: "#4A4A4A",
          DEFAULT: "#242424",
          dark: "#000000",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        border: {},
        error: {
          100: "#FFDFDB",
          200: "#FFC0B8",
          300: "#FFA094",
          400: "#FF7C6B",
          light: "#FF5D47",
          DEFAULT: "#FF3D24",
          700: "#FF1C00",
          dark: "#A81400",
          900: "#570A00",
          950: "#290500",
        },
        success: {
          200: "#B8FFC9",
          300: "#94FFAF",
          light: "#6BFF90",
          DEFAULT: "#47FF75",
          600: "#24FF5B",
          700: "#00FF3E",
          dark: "#00A82A",
          900: "#005716",
          950: "#00290A",
        },
      },
    },
  },
  plugins: [],
};
export default config;
