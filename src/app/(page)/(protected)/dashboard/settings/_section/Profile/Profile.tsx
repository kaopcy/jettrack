"use client";

import { signOut, useSession } from "next-auth/react";
import React from "react";

import Card from "@/components/Card";

const Profile = () => {
  const onLogoutClick = async () => {
    await signOut();
    window.location.reload();
  };

  const session = useSession();

  return (
    <Card className="flex h-fit w-full flex-col items-start p-2 pb-6">
      <h1 className="ml-4 mt-4  text-2xl font-bold">Profile</h1>
      <div className="my-4 h-[3px] w-full bg-[#D9D9D9]"> </div>
      <div className="flex w-full flex-col gap-y-4 px-4">
        <h2 className="text-xl font-bold">User Information</h2>
        <div className="flex w-full items-center gap-x-4">
          <div className="flex w-full items-center gap-x-4">
            <span className="font-bold">Username</span>
            <span className="w-[150px] rounded-md bg-[#D9D9D970] py-1.5 text-center font-medium text-[#00000040]">
              {session.data?.user?.name}
            </span>
          </div>
          <div className="flex w-full items-center gap-x-4 ">
            <span className="font-bold">Role</span>
            <span className="w-[100px] rounded-md bg-[#D9D9D970] py-1.5 text-center font-medium text-[#00000040]">
              admin
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8 flex w-full justify-between px-4">
        <button className="text-sm font-bold">Reset Password</button>
        <button
          onClick={onLogoutClick}
          className="rounded-md bg-red-600 px-4 py-1.5 font-bold text-white hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </Card>
  );
};

export default Profile;
