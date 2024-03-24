"use client";

import { useRouter } from "next/navigation";
import React from "react";

import IpFormModal from "@/components/IpFormModal";
import { routes } from "@/configs/routes.config";
import { useIp } from "@/stores/useIp";

const Page = () => {
  const router = useRouter();
  const ip = useIp((state) => state.ip);

  if (ip) {
    router.push(routes.dashBoard.ip(ip).history.index);
  }

  return <IpFormModal />;
};

export default Page;
