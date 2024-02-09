import { motion } from "framer-motion";

import Icon from "@/libs/icon";

const GoogleSignInButton = () => {
  return (
    <motion.button
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
