import { z } from "zod";

export const historyLogSchema = z.object({
  id: z.coerce.string(),
  dateTime: z.coerce.string(),
  lpNumber: z.coerce.string(),
  province: z.coerce.string(),
  brand: z.coerce.string(),
  rtspIp: z.coerce.string(),
  lpImage: z.coerce.string(),
  carImage: z.coerce.string(),
});

export type HistoryLog = z.infer<typeof historyLogSchema>;
