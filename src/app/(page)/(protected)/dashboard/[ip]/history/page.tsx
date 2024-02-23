"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffectOnce } from "react-use";

import { useHistoryLog } from "@/app/(page)/(protected)/dashboard/[ip]/history/_store/useHistoryStore";
import { routes } from "@/configs/routes.config";

const HistoryDashboardPage = () => {
  const historyLogList = useHistoryLog((state) => state.historyList);
  const { ip } = useParams<{ ip: string }>();
  const router = useRouter();

  useEffectOnce(() => {
    if (historyLogList.length > 0) {
      router.push(routes.dashBoard.ip(ip).history.id(historyLogList[0].id));
    }
  });

  return <div className="flex w-full flex-col gap-y-2 "></div>;
};

export default HistoryDashboardPage;
