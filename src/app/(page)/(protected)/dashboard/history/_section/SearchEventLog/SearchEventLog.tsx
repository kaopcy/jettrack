"use client";

import React, { FormEventHandler } from "react";

import { useHistoryLog } from "@/app/(page)/(protected)/dashboard/history/_store/useHistoryStore";
import Icon from "@/libs/icon";
import cn from "@/utils/cn";

import useSearchInputStore from "../../_store/useSearchInputStore";
import DateTimeInput from "./DateTimeInput";
import TextInput from "./TextInput";

const SearchEventLog = () => {
  const setLicensePlate = useSearchInputStore((state) => state.setLicensePlate);
  const setProvince = useSearchInputStore((state) => state.setProvince);
  const setType = useSearchInputStore((state) => state.setType);
  const setStartDateTime = useSearchInputStore((state) => state.setStartDateTime);
  const setEndDateTime = useSearchInputStore((state) => state.setEndDateTime);

  const licensePlate = useSearchInputStore((state) => state.licensePlate);
  const province = useSearchInputStore((state) => state.province);
  const type = useSearchInputStore((state) => state.type);
  const startDateTime = useSearchInputStore((state) => state.startDateTime);
  const endDateTime = useSearchInputStore((state) => state.endDateTime);

  const refetch = useHistoryLog((state) => state.refetch);
  const isLoading = useHistoryLog((state) => state.isLoading);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    refetch({
      licensePlate,
      province,
      type,
      startDateTime,
      endDateTime,
    });
  };

  return (
    <div className="flex w-full flex-col bg-white px-8 pb-4 pt-4">
      <h1 className="mb-4 text-xl font-bold">Search Event Log</h1>
      <form onSubmit={onSubmit} className="flex w-full gap-8">
        <div className="flex w-full justify-between gap-6">
          <div className="grid grid-cols-2 gap-4">
            <TextInput
              value={licensePlate}
              onChange={(e) => setLicensePlate(e.target.value)}
              icon="material-symbols:directions-car-outline"
              label="License plate"
            />
            <TextInput
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              icon="material-symbols:arrow-drop-down-rounded"
              iconClassName="w-6 h-6"
              label="Province"
            />
            <TextInput
              value={type}
              onChange={(e) => setType(e.target.value)}
              icon="material-symbols:directions-car-outline"
              label="Type"
            />
          </div>
          <div className="flex  flex-col gap-y-4">
            <DateTimeInput
              value={startDateTime}
              onChange={(e) => setStartDateTime(e.toString())}
              label="Start date & time"
              icon="material-symbols:date-range-outline"
              indicatorClassName="bg-green-400"
            />
            <DateTimeInput
              value={endDateTime}
              onChange={(e) => setEndDateTime(e.toString())}
              label="End date & time"
              icon="material-symbols:date-range-outline"
              indicatorClassName="bg-red-400"
            />
          </div>
        </div>
        <button
          type="submit"
          className={cn(
            "relative self-end  rounded-md bg-[#1D3557] px-4 py-1 text-center font-medium text-white hover:bg-[#111c2c]",
          )}
          disabled={isLoading}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchEventLog;
