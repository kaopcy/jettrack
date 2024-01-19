import { env } from "@/configs/env";

export default function Home() {
  return (
    <main>
      <div className="font-patrick ">{env.googleAuthSecret}</div>
      <div className="font-nura text-xl">ว่าไงไอหน้าฮี</div>
    </main>
  );
}
