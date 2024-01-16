import { env } from "@/configs/env";

export default function Home() {
  return (
    <main>
      <div className="">{env.googleAuthSecret}</div>
    </main>
  );
}
