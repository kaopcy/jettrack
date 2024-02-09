"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

const SignInPage = () => {
  const { status } = useSession();
  document.write("<h1>Hello, Popup!</h1>");

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") void signIn("google");
    // else window.close();
  }, [status]);

  return <div className="fixed inset-0 bg-white"></div>;
};

export default SignInPage;
