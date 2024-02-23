"use client";

import Image from "next/image";

import Card from "@/components/Card";

const RealTimeLicenseImage = () => {
  return (
    <Card className="flex h-full w-full flex-col items-start justify-start">
      <h1 className="mb-4 text-xl font-bold">License Image</h1>
      <div className="relative  aspect-[18/9] h-full max-w-full">
        <Image
          alt="car"
          fill
          className="object-cover"
          sizes="50vw"
          src="https://media.istockphoto.com/id/486847706/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%9B%E0%B9%89%E0%B8%B2%E0%B8%A2%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%9A%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%84%E0%B8%A7%E0%B8%B4%E0%B9%80%E0%B8%9A%E0%B8%81%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%A5%E0%B8%82%E0%B8%9B%E0%B8%A5%E0%B8%AD%E0%B8%A1.jpg?s=2048x2048&w=is&k=20&c=O1sL79uSx_Cw1b7-jKNtpfz1TiJE2p9OYF21wMv7iJ4="
          priority
        />
      </div>
    </Card>
  );
};

export default RealTimeLicenseImage;