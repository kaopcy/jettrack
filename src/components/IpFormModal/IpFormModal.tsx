"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FC, FormEventHandler, ReactNode, useState } from "react";

import { routes } from "@/configs/routes.config";
import { useIp } from "@/stores/useIp";

const IpFormModal = () => {
  const router = useRouter();
  const [ip, setIp] = useState("");

  const setGlobalIp = useIp((state) => state.setIp);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setGlobalIp(ip);

    router.push(routes.dashBoard.ip(ip).history.index);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-10 flex items-center justify-center text-white">
        <motion.div
          onClick={() => router.push(routes.dashBoard.settings)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-[#00000080]"
        ></motion.div>
        <motion.div
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className="relative z-10 m-auto h-full w-full max-w-[650px] sm:h-fit"
        >
          <div className="absolute right-0 top-0"></div>
          <div className="rounded-xl bg-primary p-8   md:px-14 md:py-14">
            <div className="flex flex-col font-google text-base">
              <h2 className="mb-3 text-2xl font-semibold">Providing RTSP IP</h2>
              <div>
                <span className="font-normal">You need to provide the rtsp ip address to continue using </span>{" "}
                <span className="text-blue-500 hover:underline">Jet Track - Web App</span>{" "}
                <span className="">and acknowledge that you understand the</span>{" "}
                <a href="" className="text-blue-500 hover:underline">
                  Privacy Policy
                </a>
              </div>
              <div className="flex w-full flex-col gap-3 py-6"></div>
              <form onSubmit={onSubmit} className=" flex w-full gap-3">
                <input
                  className="w-full rounded-2xl bg-white px-4 py-4 text-zinc-600 placeholder:text-zinc-400 focus:outline"
                  required
                  placeholder="Enter RTSP IP..."
                  onChange={(e) => setIp(e.target.value)}
                />

                <button className="rounded-full bg-[#e66049] p-4 font-semibold disabled:text-[#828d9060]">Enter</button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default IpFormModal;
