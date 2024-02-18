"use client";

import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useState } from "react";
import NewWindow from "react-new-window";

import { useAuthStore } from "@/contexts/AuthProvider";
import Icon from "@/libs/icon";

const GoogleSignInButton = () => {
  // const { openGooglePopup } = useGoogleSigninPopup();
  const user = useSession().data?.user;

  const [popup, setPopup] = useState<boolean>(false);

  return (
    <motion.button
      onClick={() => setPopup(true)}
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.97 }}
      className="flex w-full items-center justify-center rounded-full bg-white p-3"
    >
      <Icon icon="flat-color-icons:google" className="h-7 w-7" />

      <span className="mx-auto text-text-5">Continue with Google</span>
      {!user && popup && (
        <NewWindow
          url="/auth/google-signin"
          onUnload={() => {
            // setPopup(false);
            console.log("unloaded");
          }}
        />
      )}
    </motion.button>
  );
};

export default GoogleSignInButton;
