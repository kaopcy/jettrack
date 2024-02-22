import axios from "axios";
import { z } from "zod";

import { apiRoutes } from "@/configs/apiRoutes.config";
import { historyLogSchema } from "@/types/historyLog.type";

const multipleHistoryLogsSchema = z.array(historyLogSchema);

const getAll = async () => {
  const response = await axios.get(apiRoutes.historyLog.getAll);
  const data = multipleHistoryLogsSchema.parse(response.data);

  return data;
};

const getById = async (id: string) => {
  const response = await axios.get(apiRoutes.historyLog.getById(id));
  const data = historyLogSchema.parse(response.data);

  return data;
};

export const historyService = {
  getAll,
  getById,
};
