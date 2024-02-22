"use client";

import { AnimatePresence, motion } from "framer-motion";
import moment from "moment";
import { useParams, useRouter } from "next/navigation";
import React, { FC, ReactNode, useCallback } from "react";

import { Column, Header, Row } from "@/components/Table/Table";
import { routes } from "@/configs/routes.config";
import Icon from "@/libs/icon";
import cn from "@/utils/cn";

import { useHistoryLog } from "../../_store/useHistoryStore";
import useSearchInputStore from "../../_store/useSearchInputStore";

const HistoryLog = () => {
  const historyLogs = useHistoryLog((state) => state.historyList);
  const isLoading = useHistoryLog((state) => state.isLoading);
  const isLogEmpty = historyLogs.length === 0;

  const router = useRouter();

  const { id: currentHistoryId } = useParams<{ id: string }>();

  const isActive = useCallback((id: string) => currentHistoryId == id, [currentHistoryId]);

  const onRowClick = (id: string) => {
    router.push(routes.dashBoard.history.id(id));
  };

  const setLicensePlate = useSearchInputStore((state) => state.setLicensePlate);
  const setProvince = useSearchInputStore((state) => state.setProvince);
  const setType = useSearchInputStore((state) => state.setType);
  const setStartDateTime = useSearchInputStore((state) => state.setStartDateTime);
  const setEndDateTime = useSearchInputStore((state) => state.setEndDateTime);

  return (
    <div className="relative flex h-full min-h-0 w-full flex-col gap-4  bg-white px-3 pb-4 pt-4">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-[#00000030]"
          >
            <Icon icon="line-md:loading-loop" className="h-16 w-16 animate-spin text-white" />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative flex h-full w-full  flex-col items-center justify-start overflow-y-auto">
        {isLogEmpty && (
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4">
            <div className="h-14 w-14">
              <Icon icon="material-symbols:car-tag-outline" className="h-full w-full text-[#00000040]" />
            </div>
            ไม่มีข้อมูลรถในขณะนี้
          </div>
        )}
        <table className="w-full table-auto  ">
          <thead className="sticky top-0  bg-white">
            <tr className="">
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
                <Row
                  onClick={() => onRowClick(event.id)}
                  className={cn(
                    "cursor-pointer text-sm even:bg-[#F4F4F4] hover:bg-[#e7e7e7]",
                    isActive(event.id) && "border-2 border-blue-500",
                  )}
                  key={index}
                >
                  <Column>{event.id}</Column>
                  <Column>
                    <ColumnLink
                      onClick={() => {
                        setStartDateTime(event.dateAndTime);
                        setEndDateTime(event.dateAndTime);
                      }}
                    >
                      {moment(event.dateAndTime).format("DD MMM YYYY, HH:MM:SS")}
                    </ColumnLink>
                  </Column>
                  <Column>
                    <ColumnLink
                      onClick={() => {
                        setLicensePlate(event.licensePlate);
                      }}
                    >
                      {event.licensePlate}
                    </ColumnLink>
                  </Column>
                  <Column>
                    <ColumnLink
                      onClick={() => {
                        setProvince(event.province);
                      }}
                    >
                      {event.province}
                    </ColumnLink>
                  </Column>
                  <Column>
                    <ColumnLink
                      onClick={() => {
                        setType(event.type);
                      }}
                    >
                      {event.type}
                    </ColumnLink>
                  </Column>
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

const ColumnLink: FC<
  { children: ReactNode } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
> = ({ children, onClick }) => (
  <span
    className="hover:text-blue-500 hover:underline"
    onClick={(e) => {
      e.stopPropagation();
      onClick?.(e);
    }}
  >
    {children}
  </span>
);

export default HistoryLog;
