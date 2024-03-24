import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { FC, ReactNode } from "react";

import { routes } from "@/configs/routes.config";
import authOptions from "@/libs/nextAuth/authOption";

export const metadata: Metadata = {
  title: "Log in - Jet Track",
};

const AuthLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect(routes.dashBoard.noIp("history"));
  }

  return <>{children}</>;
};

export default AuthLayout;
