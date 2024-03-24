"use client";

import { useParams } from "next/navigation";
import { FC, ReactNode } from "react";
import { useEffectOnce } from "react-use";

import { useIp } from "@/stores/useIp";

const WithIpLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const setIp = useIp((state) => state.setIp);
  const { ip } = useParams<{ ip: string }>();

  useEffectOnce(() => {
    setIp(ip);
  });
  return children;
};

export default WithIpLayout;
