import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { env } from "@/configs/env";
import { routes } from "@/configs/routes.config";

const authOptions: NextAuthOptions = {
  // pages: {
  //   signIn: routes.signIn,
  // },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const payload = {
          email: credentials?.username,
          password: credentials?.password,
        };

        console.log(`payload: ${payload}`);

        const user: {
          id: string;
          role: string;
          username: string;
          name?: string | null;
          email?: string | null;
          image?: string | null;
        } = {
          id: "ddd12321312",
          email: "awdawd@adawd.com",
          name: credentials?.username,
          username: credentials?.username || "awdawd",
          role: "admin",
          image: "awdawdwa",
        };

        // const user = await res.json();
        // if (!res.ok) {
        //   throw new Error(user.message);
        // }
        // if (res.ok && user) {
        //   return user;
        // }

        return user;
      },
    }),
  ],
  secret: env.authSecret,

  //   async signIn({ user, account, credentials }) {
  //     if (account?.provider === "google") {
  //       try {
  //         const registeredUser = await userService.registerUser({
  //           email: user.email ?? "",
  //           id: user.id,
  //           name: user.name ?? "",
  //           picture: user.image ?? "",
  //         });

  //         console.log(registeredUser);
  //         return true;
  //       } catch (e) {
  //         console.log("error + ", e);

  //         return "/auth/google-signin?error=this+is+error";
  //       }
  //     }
  //     return true;
  //   },
  // },
};

export default authOptions;
