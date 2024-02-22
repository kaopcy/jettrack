import { z } from "zod";

export const historyLogSchema = z.object({
  id: z.coerce.string(),
  dateAndTime: z.coerce.string(),
  licensePlate: z.coerce.string(),
  province: z.coerce.string(),
  brand: z.coerce.string(),
  type: z.coerce.string(),
  ipAddress: z.coerce.string(),
  licenseImage: z.coerce.string(),
});

export type HistoryLog = z.infer<typeof historyLogSchema>;
