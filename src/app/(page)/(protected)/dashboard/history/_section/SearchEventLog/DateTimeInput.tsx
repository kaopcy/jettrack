"use client";

import "react-datetime/css/react-datetime.css";
import "./dateTime.css";

import React, { FC } from "react";
import DateTime from "react-datetime";

import Icon from "@/libs/icon";
import cn from "@/utils/cn";

const DateTimeInput: FC<{ label: string; icon: string; indicatorClassName: string }> = ({
  label,
  icon,
  indicatorClassName,
}) => {
  return (
    <div className="flex gap-x-3">
      <span className={cn("mt-1.5 h-3 w-3 rounded-full bg-[#D9D9D9]", indicatorClassName)}></span>
      <div className="flex flex-col gap-y-2">
        <h1 className="text-base font-bold">{label}</h1>
        <div className="relative">
          <DateTime inputProps={{ placeholder: "pick your date" }} />
          <Icon icon={icon} className={cn("absolute right-2 top-1/2 -translate-y-1/2 text-[#00000040]")} />
        </div>
      </div>
    </div>
  );
};

export default DateTimeInput;
