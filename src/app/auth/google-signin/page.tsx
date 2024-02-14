"use client";

import { signIn, useSession } from "next-auth/react";
import { FC, useEffect } from "react";

const SignInPage: FC = () => {
  const { status } = useSession();
  useEffect(() => {
    switch (status) {
      case "loading":
        return;
      case "unauthenticated":
        void signIn("google", { redirect: true });
        break;
      case "authenticated":
        window.close();
    }
  }, [status]);

  return <div className="fixed inset-0 bg-white"></div>;
};

export default SignInPage;
