"use client";

import { useSession } from "next-auth/react";
import { FC } from "react";

import Editor from "@/components/Editor";

const Home: FC = () => {
  const user = useSession().data?.user;

  return <div className="flex w-full  flex-col gap-4  font-google text-xl"></div>;
};

export default Home;
