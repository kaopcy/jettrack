import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { env } from "@/configs/env";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: env.googleAuthId,
      clientSecret: env.googleAuthSecret,
      authorization: {
        params: {
          // code_challenge_method: "S256",
          // code_challenge: "gvXy37oladY2wJTvGylTtgqZu-1On3LTvHkWBBIyynM",
          // redirect_uri: "http://localhost:3000/api/auth/test",
          prompt: "consent",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, credentials }) {
      if (account?.provider === "google") {
        console.log(user.);
        return true;
      }
      return true;
    },
    jwt: async ({ account, token, user }) => {
      return {
        id: "awdawdaw",
      };
    },
  },

  secret: env.authSecret,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
