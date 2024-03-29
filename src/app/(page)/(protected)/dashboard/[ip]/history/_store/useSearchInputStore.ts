import { create } from "zustand";

import { SearchInputState } from "@/types/searchInput.type";

// create seperated input/setter for prevent rerendering

type SearchInputStore = {
  setLicensePlate: (input: string) => void;
  setProvince: (input: string) => void;
  setBrand: (input: string) => void;
  setStartDateTime: (input: string) => void;
  setEndDateTime: (input: string) => void;
} & SearchInputState;

const useSearchInputStore = create<SearchInputStore>((set) => ({
  rtsp_ip: "",
  lpNumber: "",
  province: "",
  brand: "",
  startDateTime: "",
  endDateTime: "",
  setLicensePlate: (input: string) => {
    set({ lpNumber: input });
  },
  setProvince: (input: string) => {
    set({ province: input });
  },
  setBrand: (input: string) => {
    set({ brand: input });
  },
  setStartDateTime: (input: string) => {
    set({ startDateTime: input });
  },
  setEndDateTime: (input: string) => {
    set({ endDateTime: input });
  },
}));

export default useSearchInputStore;
