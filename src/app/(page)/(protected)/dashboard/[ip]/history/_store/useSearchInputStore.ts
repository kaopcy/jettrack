import { create } from "zustand";

import { SearchInputState } from "@/types/searchInput.type";

// create seperated input/setter for prevent rerendering

type SearchInputStore = {
  setLicensePlate: (input: string) => void;
  setProvince: (input: string) => void;
  setType: (input: string) => void;
  setStartDateTime: (input: string) => void;
  setEndDateTime: (input: string) => void;
} & SearchInputState;

const useSearchInputStore = create<SearchInputStore>((set) => ({
  licensePlate: "",
  province: "",
  type: "",
  startDateTime: "",
  endDateTime: "",
  setLicensePlate: (input: string) => {
    set({ licensePlate: input });
  },
  setProvince: (input: string) => {
    set({ province: input });
  },
  setType: (input: string) => {
    set({ type: input });
  },
  setStartDateTime: (input: string) => {
    set({ startDateTime: input });
  },
  setEndDateTime: (input: string) => {
    set({ endDateTime: input });
  },
}));

export default useSearchInputStore;
