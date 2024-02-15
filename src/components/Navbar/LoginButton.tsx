"use client";

import { motion } from "framer-motion";
import { FC } from "react";

import useSignUpModal from "@/hooks/useSignupModal";

const LoginButton: FC = () => {
  const onLoginClick = useSignUpModal((state) => state.toggle);

  return (
    <motion.button
      onClick={onLoginClick}
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      className=" rounded-full bg-brand px-5 py-2 font-bold hover:bg-brand-hover"
    >
      Log in
    </motion.button>
  );
};

export default LoginButton;
