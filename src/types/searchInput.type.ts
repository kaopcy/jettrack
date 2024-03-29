import { z } from "zod";

export const searchInputStateSchema = z.object({
  rtsp_ip: z.string(),
  lpNumber: z.coerce.string().optional(),
  province: z.coerce.string().optional(),
  brand: z.coerce.string().optional(),
  startDateTime: z.coerce.string().optional(),
  endDateTime: z.coerce.string().optional(),
});

export type SearchInputState = z.infer<typeof searchInputStateSchema>;
