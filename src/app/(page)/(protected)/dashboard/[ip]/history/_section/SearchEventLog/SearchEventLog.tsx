"use client";

import { useParams } from "next/navigation";
import React, { FormEventHandler } from "react";

import Card from "@/components/Card";
import TextInput from "@/components/TextInput";
import cn from "@/utils/cn";

import { useHistoryLog } from "../../_store/useHistoryStore";
import useSearchInputStore from "../../_store/useSearchInputStore";
import DateTimeInput from "./DateTimeInput";

const SearchEventLog = () => {
  const { ip } = useParams<{ ip: string }>();
  const setLicensePlate = useSearchInputStore((state) => state.setLicensePlate);
  const setProvince = useSearchInputStore((state) => state.setProvince);
  const setType = useSearchInputStore((state) => state.setBrand);
  const setStartDateTime = useSearchInputStore((state) => state.setStartDateTime);
  const setEndDateTime = useSearchInputStore((state) => state.setEndDateTime);

  const lpNumber = useSearchInputStore((state) => state.lpNumber);
  const province = useSearchInputStore((state) => state.province);
  const brand = useSearchInputStore((state) => state.brand);
  const startDateTime = useSearchInputStore((state) => state.startDateTime);
  const endDateTime = useSearchInputStore((state) => state.endDateTime);

  const refetch = useHistoryLog((state) => state.refetch);
  const isLoading = useHistoryLog((state) => state.isLoading);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    refetch({
      rtsp_ip: ip,
      lpNumber,
      province,
      brand,
      startDateTime,
      endDateTime,
    });
  };

  return (
    <Card className="flex h-fit w-full flex-col bg-white px-8 pb-6 pt-4">
      <h1 className="mb-4 text-xl font-bold">Search Event Log</h1>
      <form onSubmit={onSubmit} className="flex w-full gap-8">
        <div className="flex w-full justify-between gap-6">
          <div className="grid grid-cols-2 gap-4">
            <TextInput
              value={lpNumber}
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
              value={brand}
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
    </Card>
  );
};

export default SearchEventLog;
