import axios from "axios";
import { z } from "zod";

import { apiRoutes } from "@/configs/apiRoutes.config";
import { HistoryLog, historyLogSchema } from "@/types/historyLog.type";
import { SearchInputState } from "@/types/searchInput.type";

const multipleHistoryLogsSchema = z.array(historyLogSchema);

type HistoryDB = {
  id: string;
  timestamp: string;
  license_plate: string;
  province: string;
  brand: string;
  car_image: string;
  license_image: string;
};

const getAll = async (): Promise<HistoryLog[]> => {
  const response = await axios.get<HistoryDB[]>(apiRoutes.historyLog.getAll);

  const before: HistoryLog[] = response.data.map((e) => ({
    brand: e.brand,
    dateAndTime: e.timestamp,
    id: e.id,
    ipAddress: e.brand,
    licenseImage: e.license_image,
    carImage: e.car_image,
    licensePlate: e.license_plate,
    province: e.province,
    type: e.brand,
  }));

  const data = multipleHistoryLogsSchema.parse(before);

  return data;
};

const getById = async (id: string): Promise<HistoryLog> => {
  const response = await axios.get<HistoryDB>(apiRoutes.historyLog.getById(id));

  const before: HistoryLog = {
    brand: response.data.brand,
    dateAndTime: response.data.timestamp,
    id: response.data.id,
    ipAddress: response.data.brand,
    licenseImage: response.data.license_image,
    licensePlate: response.data.license_plate,
    province: response.data.province,
    type: response.data.brand,
    carImage: response.data.car_image,
  };

  const data = historyLogSchema.parse(before);

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
