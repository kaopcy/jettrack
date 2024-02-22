"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { useHistoryDetailStore } from "@/app/(page)/(protected)/dashboard/history/[id]/_store/useHistoryDetailStore";

const CarImage = () => {
  const carImage = useHistoryDetailStore((state) => state.historyDetail).licenseImage;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="flex h-full w-full flex-col items-start justify-start   bg-white px-8 pb-8 pt-4"
    >
      <h1 className="mb-4 text-xl font-bold">Car Image</h1>
      <div className="relative aspect-[18/9] w-full overflow-hidden  bg-[#00000005]">
        <Image alt="car" fill sizes="50vw" className="object-cover" priority src={carImage} />
      </div>
    </motion.section>
  );
};

export default CarImage;
