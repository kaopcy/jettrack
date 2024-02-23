import React, { FC } from "react";

import Card from "@/components/Card";
import dateFormatter from "@/utils/dateFormatter";

const DetailsCard = () => {
  return (
    <Card className="flex h-full w-full flex-col items-start justify-start pb-4">
      <h1 className="mb-4 text-xl font-bold">Details</h1>

      <div className="mb-4 mt-1 h-[3px] w-full bg-[#D9D9D9]"></div>
      <div className="flex w-full flex-col gap-4">
        <DetailsColumn label="ID" value="102" />
        <DetailsColumn label="Date and Time" value={dateFormatter(Date.now().toString())} />
        <DetailsColumn label="License plate" value="ฮร 4515" />
        <DetailsColumn label="Province" value="กรุงเทพมหานคร" />
        <DetailsColumn label="Brand" value="Unknow" />
        <DetailsColumn label="IP" value="102.102.1.1" />
      </div>
    </Card>
  );
};

const DetailsColumn: FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <div className="flex w-full justify-between">
      <span className="w-full font-bold">{label}</span>
      <span className="w-full">{value}</span>
    </div>
  );
};

export default DetailsCard;
