import { z } from "zod";

export const searchInputStateSchema = z.object({
  licensePlate: z.coerce.string().optional(),
  province: z.coerce.string().optional(),
  type: z.coerce.string().optional(),
  startDateTime: z.coerce.string().optional(),
  endDateTime: z.coerce.string().optional(),
});

export type SearchInputState = z.infer<typeof searchInputStateSchema>;
