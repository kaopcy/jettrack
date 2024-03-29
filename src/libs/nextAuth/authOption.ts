import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { env } from "@/configs/env";
import { userService } from "@/services/user.service";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const payload = {
          username: credentials!.username,
          password: credentials!.password,
        };
        const user = await userService.userLogIn(payload);
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.sub = user.sub;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.username = token.username;
      session.user.sub = token.sub;
      session.user.role = token.role;
      return session;
    },
  },
  secret: env.authSecret,
  session: {
    maxAge: 5 * 60 * 60,
    strategy: "jwt",
  },
};

export default authOptions;
