"use client";

import { useParams } from "next/navigation";
import React, { FC } from "react";

import { useRealTimeStore } from "@/app/(page)/(protected)/dashboard/[ip]/real-time/_section/LastestEvent/LatestEvent";
import Card from "@/components/Card";
import dateFormatter from "@/utils/dateFormatter";

const DetailsCard = () => {
  const realtimeEvent = useRealTimeStore((state) => state.realtimeEvent);
  const { ip } = useParams<{ ip: string }>();

  return (
    <Card className="flex h-full w-full flex-col items-start justify-start pb-4">
      <h1 className="mb-4 text-xl font-bold">Details</h1>

      <div className="mb-4 mt-1 h-[3px] w-full bg-[#D9D9D9]"></div>
      <div className="flex w-full flex-col gap-4">
        <DetailsColumn label="ID" value={realtimeEvent && realtimeEvent.id} />
        <DetailsColumn label="Date and Time" value={realtimeEvent && dateFormatter(realtimeEvent.date_time)} />
        <DetailsColumn label="License plate" value={realtimeEvent && realtimeEvent.lp_number} />
        <DetailsColumn label="Province" value={realtimeEvent && realtimeEvent.province} />
        <DetailsColumn label="Brand" value={realtimeEvent && realtimeEvent.brand} />
        <DetailsColumn label="IP" value={ip} />
      </div>
    </Card>
  );
};

const DetailsColumn: FC<{ label: string; value?: string | null }> = ({ label, value }) => {
  return (
    <div className="flex w-full justify-between">
      <span className="w-full font-bold">{label ?? ""}</span>
      <span className="w-full  overflow-hidden text-ellipsis whitespace-nowrap">{value ?? ""}</span>
    </div>
  );
};

export default DetailsCard;
