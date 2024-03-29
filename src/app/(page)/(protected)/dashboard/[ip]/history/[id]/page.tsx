import { FC } from "react";
import { z } from "zod";

import { historyService } from "@/services/history.service";

import CarImage from "../_section/CarImage";
import LicenseImage from "../_section/LicenseImage";
import { HistoryDetailProvider } from "./_store/useHistoryDetailStore";

const paramsSchema = z.object({
  id: z.coerce.string(),
});

type Props = {
  params: z.infer<typeof paramsSchema>;
};

const HistoryDashboardPerIdPage: FC<Props> = async ({ params }) => {
  const { id } = paramsSchema.parse(params);
  const historyDetail = await historyService.getById(id);

  return (
    <HistoryDetailProvider overrideState={{ historyDetail }}>
      <div className="flex w-full flex-col gap-y-2 ">
        <CarImage />
        <LicenseImage />
      </div>
    </HistoryDetailProvider>
  );
};

export default HistoryDashboardPerIdPage;
