"use client";

import { useSearchParams } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { FC, useEffect } from "react";

import { useAuthStore } from "@/contexts/AuthProvider";

const SignInPage: FC = () => {
  const params = useSearchParams();
  const user = useSession().data?.user;

  useEffect(() => {
    const error = params.get("error");
    if (error) return;

    if (!user) {
      void signIn("google", { redirect: true });
    } else {
      window.close();
    }
  }, [params, user]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="text-lg font-medium text-text-4">Loading</div>
    </div>
  );
};

export default SignInPage;
