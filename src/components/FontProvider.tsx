import { Noto_Sans_Thai, Patrick_Hand } from "next/font/google";
import localFont from "next/font/local";
import { FC, ReactNode } from "react";

import cn from "@/app/utils/cn";

const nuraFont = localFont({
  src: [
    {
      path: "../../public/fonts/nura/nura.ttf",
    },
  ],
  variable: "--font-nura",
});

const virgilFont = localFont({
  src: [
    {
      path: "../../public/fonts/virgil/virgil.woff2",
    },
  ],
  variable: "--font-virgil",
});

const productFont = localFont({
  src: [
    {
      path: "../../public/fonts/product/Product-Sans-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/product/Product-Sans-Bold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/product/thai/product-sans-thai.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/product/thai/product-sans-thai-bold.woff2",
      weight: "600",
    },
  ],
  variable: "--font-product",
});

const patrickFont = Patrick_Hand({ weight: ["400"], subsets: ["latin"], variable: "--font-patrickhand" });
const notoSansThai = Noto_Sans_Thai({ weight: ["400"], subsets: ["latin"], variable: "--font-notoSansThai" });

const FontProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={cn(patrickFont.variable, notoSansThai.variable, productFont.variable)}>{children}</div>;
};

export default FontProvider;
