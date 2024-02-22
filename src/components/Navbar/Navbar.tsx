"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/components/Navbar/config/navItems.config";
import cn from "@/utils/cn";

const Navbar = () => {
  const currentPath = usePathname();

  const isActive = (path: string) => {
    return currentPath.includes(path);
  };

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
