"use client";

import Image from "next/image";

import { useRealTimeStore } from "@/app/(page)/(protected)/dashboard/[ip]/real-time/_section/LastestEvent/LatestEvent";
import Card from "@/components/Card";

const RealTimeLicenseImage = () => {
  const realtimeEvent = useRealTimeStore((state) => state.realtimeEvent);

  return (
    <Card className="flex h-full w-full flex-col items-start justify-start">
      <h1 className="mb-4 text-xl font-bold">License Image</h1>
      <div className="relative  aspect-[18/9] h-full max-w-full">
        {realtimeEvent && (
          <Image alt="car" fill className="object-cover" sizes="50vw" src={realtimeEvent?.license_image} priority />
        )}
      </div>
    </Card>
  );
};

export default RealTimeLicenseImage;
