"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useEffectOnce } from "react-use";
import { io } from "socket.io-client";
import { z } from "zod";
import { create } from "zustand";

import Card from "@/components/Card";
import { Column, Header, Row } from "@/components/Table/Table";
import { env } from "@/configs/env";
import dateFormatter from "@/utils/dateFormatter";

type RealTimeStoreType = {
  realtimeEvent: IRealtimeEvent | null;
  setRealTimeEvent: (newEvent: IRealtimeEvent) => void;
};

export const useRealTimeStore = create<RealTimeStoreType>((set) => ({
  realtimeEvent: null,
  setRealTimeEvent: (newEvent) => {
    set({
      realtimeEvent: newEvent,
    });
  },
}));

const realtimeEventSchema = z.object({
  id: z.string(),
  rtsp_ip: z.string(),
  brand: z.string(),
  car_img_url: z.string(),
  date_time: z.string(),
  lp_number: z.string(),
  lp_img_url: z.string(),
  province: z.string(),
});

type IRealtimeEvent = z.infer<typeof realtimeEventSchema>;

const LatestEvent = () => {
  const [realtimeLog, setRealtimeLog] = useState<IRealtimeEvent[]>([]);
  const isCalled = useRef(false);

  const setRealTimeEvent = useRealTimeStore((state) => state.setRealTimeEvent);

  useEffectOnce(() => {
    if (isCalled.current) return;
    isCalled.current = true;
    const socket = io(env.wsApiUrl, { extraHeaders: { Authorization: `Secret ${env.wsSecret}` } }); // Replace with your server URL
    // Listen for incoming messages
    console.log("realtime: ");
    socket.on("messageData", (message) => {
      console.log(message);
      const realtimeLog = realtimeEventSchema.parse(message);
      setRealTimeEvent(realtimeLog);
      setRealtimeLog((s) => [realtimeLog, ...s]);
    });

    socket.emit("realtime", "dwd", (message) => {
      console.log(message + "dwdwd");
    });
  });

  return (
    <Card className="flex  h-full w-full flex-col bg-white px-2">
      <h2 className="py-4 pl-6 text-xl font-bold">Latest event</h2>
      <table className="w-full table-auto border-collapse text-sm">
        <thead>
          <tr>
            <Header>Date and time</Header>
            <Header>License plate</Header>
            <Header>Province</Header>
            <Header>Brand</Header>
            <Header>License Image</Header>
          </tr>
        </thead>
        <tbody>
          {realtimeLog.map((event, index) => (
            <Row key={index}>
              <Column>{dateFormatter(event.date_time)}</Column>
              <Column>{event.lp_number}</Column>
              <Column>{event.province}</Column>
              <Column>{event.brand}</Column>
              <Column className="py-2">
                <div className="relative mx-auto h-[55px] w-[140px]">
                  <Image alt="" fill src={"http://" + event.lp_img_url} className="object-cover" />
                </div>
              </Column>
            </Row>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default LatestEvent;
