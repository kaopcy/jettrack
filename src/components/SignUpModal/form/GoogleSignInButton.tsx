import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { MouseEventHandler } from "react";

import Icon from "@/libs/icon";

const GoogleSignInButton = () => {
  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    signIn("google", { redirect: false });
  };

  // const [popup, setPopup] = useState<Window | null>(null);

  const openPopup = () => {
    const newPopup = window.open("/auth/google-signin", "_blank", "width=400,height=400");
    // setPopup(newPopup);
  };

  // const closePopup = () => {
  //   if (popup) {
  //     popup.close();
  //     setPopup(null);
  //   }
  // };

  return (
    <motion.button
      onClick={openPopup}
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.97 }}
      className="flex w-full items-center justify-center rounded-full bg-white p-3"
    >
      <Icon icon="flat-color-icons:google" className="h-7 w-7" />
      <span className="mx-auto text-text-5">Continue with Google</span>
    </motion.button>
  );
};

export default GoogleSignInButton;
