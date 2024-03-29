import axios from "axios";
import { z } from "zod";

import { apiRoutes } from "@/configs/apiRoutes.config";
import { HistoryLog, historyLogSchema } from "@/types/historyLog.type";
import { SearchInputState } from "@/types/searchInput.type";

const multipleHistoryLogsSchema = z.array(historyLogSchema);

type LicensePlateDB = {
  lpNumber: string;
  province: string;
  lpImgUrl: string;
};

type HistoryDB = {
  id: string;
  dateTime: string;
  license_plates: LicensePlateDB;
  brand: string;
  carImgUrl: string;
  rtspIp: string;
};

const getAll = async (input: SearchInputState): Promise<HistoryLog[]> => {
  const response = await axios.post<HistoryDB[]>(apiRoutes.historyLog.getAllCars, input);
  const before: HistoryLog[] = response.data.map((e) => ({
    id: e.id,
    brand: e.brand,
    dateTime: e.dateTime,
    rtspIp: e.rtspIp,
    lpNumber: e.license_plates.lpNumber,
    province: e.license_plates.province,
    lpImage: e.license_plates.lpImgUrl,
    carImage: e.carImgUrl,
  }));

  const data = multipleHistoryLogsSchema.parse(before);

  return data;
};

const getAllBySearch = async (input: Partial<SearchInputState>): Promise<HistoryLog[]> => {
  const response = await axios.post<HistoryDB[]>(apiRoutes.historyLog.getAllCars, input);
  const before: HistoryLog[] = response.data.map((e) => ({
    brand: e.brand,
    dateTime: e.dateTime,
    id: e.id,
    rtspIp: e.rtspIp,
    lpImage: e.license_plates.lpImgUrl,
    carImage: e.carImgUrl,
    lpNumber: e.license_plates.lpNumber,
    province: e.license_plates.province,
  }));

  const data = multipleHistoryLogsSchema.parse(before);

  return data;
};

const getById = async (id: string): Promise<HistoryLog> => {
  const response = await axios.get<HistoryDB>(apiRoutes.historyLog.getCarById(id));
  const before: HistoryLog = {
    brand: response.data.brand,
    dateTime: response.data.dateTime,
    id: response.data.id,
    rtspIp: response.data.rtspIp,
    lpImage: response.data.license_plates.lpImgUrl,
    lpNumber: response.data.license_plates.lpNumber,
    province: response.data.license_plates.province,
    carImage: response.data.carImgUrl,
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
  getAllBySearch,
};
