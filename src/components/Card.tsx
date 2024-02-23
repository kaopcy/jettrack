"use client";

import { motion, MotionProps } from "framer-motion";
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";

import cn from "@/utils/cn";

type Props = { children: ReactNode } & MotionProps &
  Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, "ref">;

const Card: FC<Props> = ({ children, ...props }) => {
  return (
    <motion.section {...props} className={cn("h-full w-full rounded-lg bg-white px-8 pb-8 pt-4", props.className)}>
      {children}
    </motion.section>
  );
};

export default Card;
