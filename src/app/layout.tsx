import "./globals.css";

import { getServerSession } from "next-auth";

import AuthProvider from "@/components/AuthProvider";
import FontProvider from "@/components/FontProvider";
import SignUpModal from "@/components/SignUpModal";
import authOptions from "@/libs/nextAuth/authOption";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className="flex h-screen w-full flex-col bg-[#D9D9D9]   font-google">
        <>
          <AuthProvider session={session}>
            <FontProvider>{children}</FontProvider>
          </AuthProvider>
        </>
      </body>
    </html>
  );
}
