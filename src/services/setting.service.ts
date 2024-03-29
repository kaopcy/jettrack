import axios from "axios";
import { z, ZodErrorMap } from "zod";

import { apiRoutes } from "@/configs/apiRoutes.config";

const errorMap: ZodErrorMap = (issue, ctx) => {
  return { message: `Exception Error: ${ctx.data} ${issue.message}` };
};

const userSchema = z
  .object({
    id: z.string().optional(),
    username: z.string().optional(),
  })
  .array();

const cameraSchema = z.object(
  {
    id: z.string(),
    rtspUrl: z.string(),
    createdAt: z.string(),
    users: userSchema,
  },
  { errorMap },
);

type Camera = z.infer<typeof cameraSchema>;

const getUsersByIP: (ip: string) => Promise<Camera> = async (ip) => {
  const response = await axios.get(apiRoutes.settingLog.getAllUsers(ip));
  const parsedResponse = cameraSchema.parse(response.data);

  return parsedResponse;
};

export const settingService = {
  getUsersByIP,
};
