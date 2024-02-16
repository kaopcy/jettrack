import axios from "axios";
import { z, ZodErrorMap } from "zod";

const errorMap: ZodErrorMap = (issue, ctx) => {
  return { message: `เกิดข้อผิดพลาด ${ctx.data} ${issue.message}` };
};

const userSchema = z.object(
  {
    id: z.string(),
    name: z.string(),
    email: z.string(),
    picture: z.string(),
  },
  { errorMap },
);

type User = z.infer<typeof userSchema>;

const getUser: () => Promise<User> = async () => {
  const response = await axios.get("http://localhost:3001/user");
  const parsedResponse = userSchema.parse(response.data);

  return parsedResponse;
};

type RegisterInput = {
  id: string;
  name: string;
  email: string;
  picture: string;
};

const registerUser: (input: RegisterInput) => Promise<User> = async (input) => {
  const response = await axios.post("http://localhost:3001/user/register", input);
  const parsedResponse = userSchema.parse(response.data);

  return parsedResponse;
};

export const userService = {
  getUser,
  registerUser,
};
