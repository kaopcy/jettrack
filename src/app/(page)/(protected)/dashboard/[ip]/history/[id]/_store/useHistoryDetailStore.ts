"use client";

import { _mockHistoryLogs } from "@/mocks/historyLog.mock";
import { HistoryLog } from "@/types/historyLog.type";
import buildStoreContext from "@/utils/buildStoreContext";

type HistoryStore = {
  historyDetail: HistoryLog;
  // selectedHistoryLog: HistoryLog | null;
  // setSelectedHistoryLog: () => void;
};

const dump = _mockHistoryLogs[0];

const { Provider, buildStateHook } = buildStoreContext<HistoryStore>(() => ({
  historyDetail: dump,
  // selectedHistoryLog: null,
  // setSelectedHistoryLog: () => {},
}));

export const HistoryDetailProvider = Provider;
export const useHistoryDetailStore = buildStateHook();
