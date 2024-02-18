import NextAuth from "next-auth";

import authOptions from "@/libs/nextAuth/authOption";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
