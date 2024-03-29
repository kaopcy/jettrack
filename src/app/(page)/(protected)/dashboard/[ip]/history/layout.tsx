"use client";

// import { Metadata } from "next";
import { useParams } from "next/navigation";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { z } from "zod";
import { create } from "zustand";

import { historyService } from "@/services/history.service";

import HistoryLog from "./_section/HistoryLog";
import SearchEventLog from "./_section/SearchEventLog";
import { HistoryLogProvider } from "./_store/useHistoryStore";

// export const metadata: Metadata = {
//   title: "History - Jet Track",
// };

const carHistroySchema = z.object({
  id: z.string(),
  dateTime: z.string(),
  brand: z.string(),
  carImage: z.string(),
  rtspIp: z.string(),
  lpImage: z.string(),
  lpNumber: z.string(),
  province: z.string(),
});

type ICarHistory = z.infer<typeof carHistroySchema>;

type HistroyStoreType = {
  historyList: ICarHistory[] | null;
  setHistroyList: (newList: ICarHistory[]) => void;
};

const useHistoryStore = create<HistroyStoreType>((set) => ({
  historyList: null,
  setHistroyList: (newList) => {
    set({
      historyList: newList,
    });
  },
}));

const HistoryLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { ip } = useParams<{ ip: string }>();
  const [historyListLog, setHistoryListLog] = useState<ICarHistory[]>();
  const setHistoryList = useHistoryStore((state) => state.setHistroyList);
  try {
    useEffect(() => {
      if (!ip) return;
      (async () => {
        const carList = await historyService.getAll({ rtsp_ip: ip });
        setHistoryList(carList);
        setHistoryListLog(carList);
      })();
    }, [ip, setHistoryList]);
    return (
      <HistoryLogProvider overrideState={{ historyList: historyListLog }}>
        <div className="flex h-full w-full gap-x-2 overflow-hidden">
          <div className="flex h-full w-full flex-col gap-y-2">
            <SearchEventLog />
            <HistoryLog />
          </div>
          {children}
        </div>
      </HistoryLogProvider>
    );
  } catch (error) {
    console.log(error);
    return <div className="">error</div>;
  }
};

export default HistoryLayout;
