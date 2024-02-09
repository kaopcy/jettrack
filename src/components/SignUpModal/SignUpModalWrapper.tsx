"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FC, ReactNode } from "react";

import useSignUpModal from "@/hooks/useSignupModal";

const SignUpModalWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const isOpen = useSignUpModal((state) => state.isOpen);
  const close = useSignUpModal((state) => state.close);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <motion.div
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#00000080]"
          ></motion.div>
          <motion.div
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="relative z-10 m-auto h-full w-full max-w-[650px] sm:h-fit"
          >
            <div className="absolute right-0 top-0"></div>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SignUpModalWrapper;
