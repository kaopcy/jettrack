import React from "react";
import { create } from "zustand";

import DateTimeInput from "./DateTimeInput";
import TextInput from "./TextInput";

interface Input {
  license: string;
  province: string;
  type: string;
  startDate: string;
  endDate: string;
}

type Store = {
  input: Input;
  setInput: (key: keyof Input, value: string) => void;
};

const store = create<Store>((set) => ({
  input: {
    license: "",
    province: "",
    type: "",
    startDate: "",
    endDate: "",
  },
  setInput: (key, value) => {
    set((old) => ({ ...old, input: { [key]: value, ...old.input } }));
  },
}));

const SearchEventLog = () => {
  return (
    <div className="flex w-full flex-col bg-white px-8 pb-4 pt-4">
      <h1 className="mb-4 text-xl font-bold">Search Event Log</h1>
      <div className="flex w-full gap-8">
        <div className="flex w-full justify-between">
          <div className="flex  flex-row flex-wrap gap-4">
            <TextInput icon="material-symbols:directions-car-outline" label="License plate" />
            <TextInput icon="material-symbols:arrow-drop-down-rounded" iconClassName="w-6 h-6" label="Province" />
            <TextInput icon="material-symbols:directions-car-outline" label="Type" />
          </div>
          <div className="flex  flex-col gap-y-4">
            <DateTimeInput
              label="Start date & time"
              icon="material-symbols:date-range-outline"
              indicatorClassName="bg-green-400"
            />
            <DateTimeInput
              label="End date & time"
              icon="material-symbols:date-range-outline"
              indicatorClassName="bg-red-400"
            />
          </div>
        </div>
        <button className="self-end rounded-md bg-[#1D3557] px-4 py-1 font-medium text-white">Search</button>
      </div>
    </div>
  );
};

export default SearchEventLog;
