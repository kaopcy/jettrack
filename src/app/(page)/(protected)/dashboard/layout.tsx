import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import React, { FC, ReactNode } from "react";

import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";
import { routes } from "@/configs/routes.config";
import authOptions from "@/libs/nextAuth/authOption";

const DashBoardLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect(routes.signIn);
  }

  return (
    <AuthProvider session={session}>
      <Navbar />
      <main className="flex h-[calc(100%-70px)] w-full overflow-y-auto px-2 py-2 font-google text-text">
        {children}
      </main>
    </AuthProvider>
  );
};

export default DashBoardLayout;
