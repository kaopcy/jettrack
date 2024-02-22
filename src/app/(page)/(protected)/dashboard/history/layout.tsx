import React, { FC, ReactNode } from "react";

import { HistoryLogProvider } from "@/app/(page)/(protected)/dashboard/history/_store/useHistoryStore";
import { historyService } from "@/services/history.service";

const HistoryLayout: FC<{ children: ReactNode }> = async ({ children }) => {
  try {
    console.log("call");
    const historyList = await historyService.getAll();
    return <HistoryLogProvider overrideState={{ historyList }}>{children}</HistoryLogProvider>;
  } catch (error) {
    console.log(error);
    return <div className="">error</div>;
  }
};

export default HistoryLayout;
