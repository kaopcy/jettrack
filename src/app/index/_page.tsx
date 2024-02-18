"use client";

import { useSession } from "next-auth/react";
import { FC } from "react";

import Editor from "@/components/Editor";

const Home: FC = () => {
  const user = useSession().data?.user;

  return (
    <div className="flex w-full  flex-col gap-4  font-google text-xl">
      <div className="flex flex-col items-start gap-2">
        <div className="bg-gradient-to-r from-[#4a82ee]  via-[#b06cab] to-[#d46477] bg-clip-text py-4">
          <span className=" text-[56px] font-medium text-transparent">สวัสดี คุณ {user?.email ?? ""}</span>
        </div>
        <div className="text-[56px] font-medium text-[#444746]">วันนี้มีอะไรให้ช่วยบ้าง</div>
      </div>
      <Editor />
    </div>
  );
};

export default Home;
