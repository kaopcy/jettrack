import localFont from "next/font/local";
import { FC, ReactNode } from "react";

import cn from "@/utils/cn";

const googleFont = localFont({
  src: [
    {
      path: "../../public/fonts/google/google-sans-latin.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/google/google-sans-latin.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/google/google-sans-latin.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/google/google-sans-thai.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/google/google-sans-thai.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/google/google-sans-thai.woff2",
      weight: "700",
    },
  ],
  variable: "--font-google",
  preload: true,
});

const FontProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={cn(googleFont.variable)}>{children}</div>;
};

export default FontProvider;
