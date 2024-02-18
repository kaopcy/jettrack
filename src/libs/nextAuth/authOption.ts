import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { env } from "@/configs/env";
import { userService } from "@/services/user.service";

const authOptions: NextAuthOptions = {
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
  callbacks: {
    async signIn({ user, account, credentials }) {
      if (account?.provider === "google") {
        try {
          const registeredUser = await userService.registerUser({
            email: user.email ?? "",
            id: user.id,
            name: user.name ?? "",
            picture: user.image ?? "",
          });

          console.log(registeredUser);
          return true;
        } catch (e) {
          console.log("error + ", e);

          return "/auth/google-signin?error=this+is+error";
        }
      }
      return true;
    },
  },

  secret: env.authSecret,
};

export default authOptions;
