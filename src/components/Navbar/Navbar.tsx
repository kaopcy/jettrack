"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { routes } from "@/configs/routes.config";
import { useIp } from "@/stores/useIp";
import cn from "@/utils/cn";

const Navbar = () => {
  const currentPath = usePathname();

  const globalIp = useIp((state) => state.ip);

  const isActive = (path: string) => {
    console.log(currentPath, path);
    return currentPath.includes(path);
  };

  const navItems = [
    {
      label: "Real Time",
      href: globalIp ? routes.dashBoard.ip(globalIp).realTime : routes.dashBoard.noIp("realtime"),
    },
    {
      label: "History",
      href: globalIp ? routes.dashBoard.ip(globalIp).history.index : routes.dashBoard.noIp("history"),
    },
    {
      label: "Settings",
      href: routes.dashBoard.settings,
    },
  ];

  return (
    <div className="flex h-[70px] items-center bg-primary px-8 font-google text-white">
      <div className="flex h-full items-center space-x-6">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className={cn(
              "relative flex h-full items-center px-4 text-xl font-medium",
              isActive(item.href) && "bg-[#ffffff08]",
            )}
          >
            <div className={cn("absolute bottom-0 left-0 h-[5px] w-full", isActive(item.href) && "bg-red-500")}></div>
            {item.label}
          </Link>
        ))}
      </div>
      <div className=""></div>
      <div className="ml-auto px-4 text-3xl font-black">
        <Image width={160} height={50} alt="icon" className="h-auto" src="/images/icon.svg" />
      </div>
    </div>
  );
};

export default Navbar;
