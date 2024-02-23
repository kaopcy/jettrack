import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { FC, ReactNode } from "react";

import { routes } from "@/configs/routes.config";
import authOptions from "@/libs/nextAuth/authOption";

const AuthLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  const session = await getServerSession(authOptions);

  console.log(session?.user);

  if (session?.user) {
    redirect(routes.dashBoard.history.index);
  }

  return <>{children}</>;
};

export default AuthLayout;
