import axios from "axios";
import { z, ZodErrorMap } from "zod";

import { apiRoutes } from "@/configs/apiRoutes.config";

const errorMap: ZodErrorMap = (issue, ctx) => {
  return { message: `Exception Error: ${ctx.data} ${issue.message}` };
};

const userSchema = z.object(
  {
    id: z.string(),
    username: z.string(),
    password: z.string(),
    firstname: z.string(),
    lastname: z.string(),
    cameraId: z.string(),
    createdBy: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    role: z.string(),
  },
  { errorMap },
);

const credentialSchema = z.object({
  id: z.coerce.string(),
  sub: z.string(),
  username: z.string(),
  role: z.string(),
});

type User = z.infer<typeof userSchema>;
type Credential = z.infer<typeof credentialSchema>;

type LogInInput = {
  username: string;
  password: string;
};

const userLogIn: (input: LogInInput) => Promise<Credential> = async (input) => {
  const response = await axios.get(apiRoutes.userLog.logIn(input));
  const parsedResponse = credentialSchema.parse(response.data);
  return parsedResponse;
};

type SignUpInput = {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
};

const addUser: (input: SignUpInput) => Promise<User> = async (input) => {
  const response = await axios.post(apiRoutes.settingLog.addUser, input);
  const parsedResponse = userSchema.parse(response.data);

  console.log(`this is parsed response: ${parsedResponse}`);

  return parsedResponse;
};

export const userService = {
  addUser,
  userLogIn,
};
