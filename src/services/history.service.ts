import axios from "axios";
import { z } from "zod";

import { apiRoutes } from "@/configs/apiRoutes.config";
import { HistoryLog, historyLogSchema } from "@/types/historyLog.type";
import { SearchInputState } from "@/types/searchInput.type";

const multipleHistoryLogsSchema = z.array(historyLogSchema);

const getAll = async (): Promise<HistoryLog[]> => {
  const response = await axios.get(apiRoutes.historyLog.getAll);
  const data = multipleHistoryLogsSchema.parse(response.data);

  return data;
};

const getById = async (id: string): Promise<HistoryLog> => {
  const response = await axios.get(apiRoutes.historyLog.getById(id));
  const data = historyLogSchema.parse(response.data);

  return data;
};

const refetch = async (input: Partial<SearchInputState>): Promise<HistoryLog[]> => {
  const response = await axios.post(apiRoutes.historyLog.refetch, input);
  const data = multipleHistoryLogsSchema.parse(response.data);

  return data;
};

export const historyService = {
  getAll,
  getById,
  refetch,
};
