import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { env } from "@/configs/env";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: env.googleAuthId,
      clientSecret: env.googleAuthSecret,
      authorization: {
        params: {
          prompt: "consent",
          response_type: "code",
        },
      },
    }),
  ],
  secret: env.authSecret,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
