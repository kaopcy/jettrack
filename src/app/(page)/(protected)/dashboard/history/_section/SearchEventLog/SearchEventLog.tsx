import React from "react";

import Icon from "@/libs/icon";

import DateTimeInput from "./DateTimeInput";

const SearchEventLog = () => {
  return (
    <div className="flex w-full flex-col bg-white px-8 pb-4 pt-4">
      <h1 className="mb-4 text-xl font-bold">Search Event Log</h1>
      <div className="flex w-full gap-4">
        <div className="w-full"></div>
        <div className="flex w-full flex-col gap-y-4  ">
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
        <button className="self-end rounded-md bg-[#1D3557] px-4 py-1 font-medium text-white">Search</button>
      </div>
    </div>
  );
};

export default SearchEventLog;
