"use client";

import { historyService } from "@/services/history.service";
import { HistoryLog } from "@/types/historyLog.type";
import { SearchInputState } from "@/types/searchInput.type";
import buildStoreContext from "@/utils/buildStoreContext";

type HistoryStore = {
  historyList: HistoryLog[];
  selectedHistoryLog: HistoryLog | null;
  setSelectedHistoryLog: (historyList: HistoryLog[]) => void;

  isLoading: boolean;

  error: null | string;
  refetch: (input: Partial<SearchInputState>) => Promise<void>;
};

const { Provider, buildStateHook } = buildStoreContext<HistoryStore>((set) => ({
  historyList: [],
  selectedHistoryLog: null,
  isLoading: false,
  error: null,
  refetch: async (input: Partial<SearchInputState>) => {
    try {
      set({ isLoading: true });
      const historyList = await historyService.getAllBySearch(input);
      set({ historyList, error: null });
      console.log(historyList);
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message });
      }
    } finally {
      set({ isLoading: false });
    }
  },
  setSelectedHistoryLog: (historyList: HistoryLog[]) => set({ historyList }),
}));

export const HistoryLogProvider = Provider;
export const useHistoryLog = buildStateHook();
