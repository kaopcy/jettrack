"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { FC } from "react";

import { useAuthStore } from "@/contexts/AuthProvider";
import useSignUpModal from "@/hooks/useSignupModal";

const LoginButton: FC = () => {
  const onLoginClick = useSignUpModal((state) => state.toggle);
  const onLogoutClick = () => {
    signOut();
  };

  const user = useSession().data?.user;

  return !user ? (
    <motion.button
      onClick={onLoginClick}
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      className=" rounded-full bg-brand px-5 py-2 font-bold hover:bg-brand-hover"
    >
      Log in
    </motion.button>
  ) : (
    <motion.button
      onClick={onLogoutClick}
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      className=" relative h-10 w-10 overflow-hidden rounded-full"
    >
      {user.image ? <Image alt="profile" fill={true} src={user.image} sizes="40px" /> : <div className=""></div>}
    </motion.button>
  );
};

export default LoginButton;
