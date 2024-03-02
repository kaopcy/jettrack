"use client";

import Image from "next/image";

import { useHistoryDetailStore } from "@/app/(page)/(protected)/dashboard/[ip]/history/[id]/_store/useHistoryDetailStore";
import Card from "@/components/Card";

const LicenseImage = () => {
  const licenseImage = useHistoryDetailStore((state) => state.historyDetail).licenseImage;

  return (
    <Card
      initial={{ opacity: 0, y: 10, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.1 }}
      className="flex h-full w-full flex-col items-start justify-start"
    >
      <h1 className="mb-4 text-xl font-bold">License Image</h1>
      <div className="relative  aspect-[18/9] h-full max-w-full">
        <Image alt="car" fill className="object-cover" sizes="50vw" src={licenseImage} priority />
      </div>
    </Card>
  );
};

export default LicenseImage;
