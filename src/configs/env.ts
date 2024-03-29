import { z } from "zod";

const environmentSchema = z.object({
  backendBaseUrl: z.string(),
  authSecret: z.string(),
  wsSecret: z.string(),
  wsApiUrl: z.string(),
});

const loadedEnv: Record<keyof z.infer<typeof environmentSchema>, unknown> = {
  backendBaseUrl: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  authSecret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  wsSecret: process.env.NEXT_PUBLIC_WS_SECRET_KEY,
  wsApiUrl: process.env.NEXT_PUBLIC_WS_API_URL,
};

export const env = environmentSchema.parse(loadedEnv);
