"use client";

import React from "react";

import { useHistoryLog } from "@/app/(page)/(protected)/dashboard/history/_store/useHistoryStore";
import { Column, Header, Row } from "@/components/Table/Table";
import Icon from "@/libs/icon";

const HistoryLog = () => {
  const historyLogs = useHistoryLog((state) => state.historyList);
  const isLogEmpty = historyLogs.length === 0;
  return (
    <div className="flex h-full min-h-0 w-full flex-col gap-4  bg-white px-3 pb-4 pt-4">
      <div className="relative flex h-full w-full  flex-col items-center justify-start overflow-y-auto">
        {isLogEmpty && (
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4">
            <div className="h-14 w-14">
              <Icon icon="material-symbols:car-tag-outline" className="h-full w-full text-[#00000040]" />
            </div>
            ไม่มีข้อมูลรถในขณะนี้
          </div>
        )}
        <table className="w-full table-auto border-collapse ">
          <thead className="sticky top-0 bg-white">
            <tr>
              <Header className="pt-2">ID</Header>
              <Header className="pt-2">Date and time</Header>
              <Header className="pt-2">License</Header>
              <Header className="pt-2">Province</Header>
              <Header className="pt-2">Type</Header>
              <Header className="pt-2">Ip</Header>
            </tr>
          </thead>
          <tbody>
            {!isLogEmpty &&
              historyLogs.map((event, index) => (
                <Row className="cursor-pointer text-sm even:bg-[#F4F4F4] hover:bg-[#e7e7e7]" key={index}>
                  <Column>{event.id}</Column>
                  <Column>{event.dateAndTime}</Column>
                  <Column>{event.licensePlate}</Column>
                  <Column>{event.province}</Column>
                  <Column>{event.type}</Column>
                  <Column>{event.ipAddress}</Column>
                </Row>
              ))}
          </tbody>
        </table>
      </div>
      <button className="self-end rounded-md bg-[#1D3557] px-4 py-1 font-medium text-white">Export</button>
    </div>
  );
};

export default HistoryLog;
