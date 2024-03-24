import { Metadata } from "next";
import React, { FC, ReactNode } from "react";

import { historyService } from "@/services/history.service";

import HistoryLog from "./_section/HistoryLog";
import SearchEventLog from "./_section/SearchEventLog";
import { HistoryLogProvider } from "./_store/useHistoryStore";

export const metadata: Metadata = {
  title: "History - Jet Track",
};

const HistoryLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  try {
    console.log("call");
    const historyList = await historyService.getAll();
    return (
      <HistoryLogProvider overrideState={{ historyList }}>
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
