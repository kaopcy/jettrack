"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { create } from "zustand";

import Card from "@/components/Card";
import TextInput from "@/components/TextInput";
import { settingService } from "@/services/setting.service";
import { useIp } from "@/stores/useIp";

type AccessControlStoreType = {
  accessControl: IAccessControl | null;
  setAccessControl: (newAccess: IAccessControl) => void;
};

const useAccessControlStore = create<AccessControlStoreType>((set) => ({
  accessControl: null,
  setAccessControl: (newAccess) => {
    set({
      accessControl: newAccess,
    });
  },
}));

const userAccessControlSchema = z
  .object({
    id: z.string().optional(),
    username: z.string().optional(),
  })
  .array();

const accessControlSchema = z.object({
  id: z.string(),
  rtspUrl: z.string(),
  createdAt: z.string(),
  users: userAccessControlSchema,
});

type IAccessControl = z.infer<typeof accessControlSchema>;

const AccessControl = () => {
  const ip = useIp((state) => state.ip);

  const [accessControlLog, setAccessControlLog] = useState<IAccessControl>();
  const setAccessControl = useAccessControlStore((state) => state.setAccessControl);

  useEffect(() => {
    if (!ip) return;
    (async () => {
      const accessControlCam = await settingService.getUsersByIP(ip);
      setAccessControl(accessControlCam);
      setAccessControlLog(accessControlCam);
    })();
  }, [ip, setAccessControl]);

  return (
    <Card className="flex h-fit  w-full flex-col items-start p-2 pb-6">
      <h1 className="ml-4 mt-4  text-2xl font-bold">Access Control</h1>
      <div className="my-4 h-[3px] w-full bg-[#D9D9D9]"> </div>
      <div className="flex h-full w-full flex-col gap-y-4 px-4">
        <h2 className="text-xl font-bold">User</h2>
        <div className="flex h-[230px]  w-full flex-col gap-2 bg-[#D9D9D970] p-4 ">
          {accessControlLog?.users.map((user) => <span key={user.username}>{user.username}</span>)}
        </div>
      </div>
      <div className="my-6 h-[3px] w-full bg-[#D9D9D9]"> </div>
      <div className="flex w-full flex-col gap-4 px-4">
        <h2 className="text-xl font-bold">Add User</h2>
        <div className="flex w-full  gap-4 ">
          <div className="flex w-full flex-col justify-between gap-4">
            <div className="flex w-full  gap-4">
              <TextInput labelClassName="font-medium" containerClassName="max-w-[130px]" label="Firstname" />
              <TextInput labelClassName="font-medium" containerClassName="max-w-[130px]" label="Lastname" />
              {/* <TextInput
                // icon="material-symbols:arrow-drop-down-rounded"
                // iconClassName="w-6 h-6"
                labelClassName="font-medium"
                containerClassName="max-w-[130px]"
                label="Role"
              /> */}
              <TextInput labelClassName="font-medium" containerClassName="max-w-[130px]" label="IP Address" />
            </div>
            <div className="flex w-full  gap-4">
              <TextInput labelClassName="font-medium" containerClassName="max-w-[130px]" label="Username" />
              <TextInput labelClassName="font-medium" containerClassName="max-w-[130px]" label="Password" />
            </div>
          </div>
          <button className="self-end rounded-md bg-[#1D3557] px-4 py-1 font-semibold text-white hover:bg-[#111c2c]">
            Add
          </button>
        </div>
      </div>
      <div className="my-6 h-[3px] w-full bg-[#D9D9D9]"> </div>
      <div className="flex w-full flex-col gap-4 px-4">
        <h2 className="text-xl font-bold">Events</h2>
        <div className="flex w-full  gap-4 ">
          <div className="flex w-full flex-col justify-between gap-4">
            <div className="flex w-full  gap-4">
              <TextInput labelClassName="font-medium" containerClassName="max-w-[130px]" label="Username" />
            </div>
          </div>
          <button className="self-end rounded-md bg-[#E63946] px-4 py-1 font-semibold text-white hover:bg-[#111c2c]">
            Delete
          </button>
        </div>
      </div>
    </Card>
  );
};

export default AccessControl;
