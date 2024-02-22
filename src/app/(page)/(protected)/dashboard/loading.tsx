import React from "react";

import { Skeleton } from "@/components/Skeleton";

const HistoryLoading = () => {
  return (
    <div className="flex h-full w-full gap-2">
      <div className="flex h-full w-full flex-col gap-2">
        <div className="flex w-full flex-col gap-10 bg-[#ffffff70] p-10">
          <Skeleton className="h-[38px] w-[100%] self-end" />
          <Skeleton className="h-[38px] w-[80%] self-end" />
          <Skeleton className="h-[38px] w-[80%] self-end" />
        </div>
        <div className="flex w-full flex-col gap-10 bg-[#ffffff70] p-10">
          <Skeleton className="h-[38px] w-[100%] self-end" />
          <Skeleton className="h-[38px] w-[80%] self-end" />
          <Skeleton className="mb-10 h-[38px] w-[80%] self-end" />

          <Skeleton className="h-[38px] w-[100%] self-end" />
          <Skeleton className="h-[38px] w-[80%] self-end" />
          <Skeleton className="h-[38px] w-[80%] self-end" />
        </div>
      </div>
      <div className="flex h-full w-full flex-col">
        <div className="flex w-full flex-col gap-10 bg-[#ffffff70] p-10">
          <Skeleton className="h-[38px] w-[60%] self-start" />
          <Skeleton className="h-[270px] w-[100%] self-end" />
        </div>
        <div className="flex w-full flex-col gap-10 bg-[#ffffff70] p-10">
          <Skeleton className="mt-auto h-[38px] w-[80%] self-start" />
          <Skeleton className="mt-auto h-[270px] w-[100%] self-start" />
        </div>
      </div>
      {/* <div className="flex w-full items-center justify-between">
        <Skeleton className="h-[38px] w-[90px]" />
        <Skeleton className="h-[38px] w-[80px]" />
      </div>
      <div className="mx-auto w-[800px] space-y-6">
        <Skeleton className="h-[50px] w-full" />
        <Skeleton className="h-[20px] w-2/3" />
        <Skeleton className="h-[20px] w-full" />
        <Skeleton className="h-[20px] w-full" />
      </div> */}
    </div>
  );
};

export default HistoryLoading;
