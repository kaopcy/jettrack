"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { useHistoryDetailStore } from "@/app/(page)/(protected)/dashboard/history/[id]/_store/useHistoryDetailStore";
import Card from "@/components/Card";

const CarImage = () => {
  const carImage = useHistoryDetailStore((state) => state.historyDetail).licenseImage;

  return (
    <Card
      initial={{ opacity: 0, y: 20, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="flex flex-col items-start justify-start"
    >
      <h1 className="mb-4 text-xl font-bold">Car Image</h1>
      <div className="relative aspect-[18/9] w-full overflow-hidden  bg-[#00000005]">
        <Image alt="car" fill sizes="50vw" className="object-cover" priority src={carImage} />
      </div>
    </Card>
  );
};

export default CarImage;
