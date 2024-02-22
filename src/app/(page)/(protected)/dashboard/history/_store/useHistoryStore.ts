"use client";

import { HistoryLog } from "@/types/historyLog.type";
import buildStoreContext from "@/utils/buildStoreContext";

type HistoryStore = {
  historyList: HistoryLog[];
  selectedHistoryLog: HistoryLog | null;
  setSelectedHistoryLog: () => void;
};

const { Provider, buildStateHook } = buildStoreContext<HistoryStore>(() => ({
  historyList: [],
  selectedHistoryLog: null,
  setSelectedHistoryLog: () => {},
}));

export const HistoryLogProvider = Provider;
export const useHistoryLog = buildStateHook();
