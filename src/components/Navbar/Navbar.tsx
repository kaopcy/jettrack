"use client";

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
      <div className="flex h-full items-center space-x-10">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.label}
            className={cn("relative flex h-full items-center items-center text-xl font-semibold")}
          >
            <div className={cn("absolute bottom-0 h-[8px] w-full", isActive(item.href) && "bg-red-500")}></div>
            {item.label}
          </Link>
        ))}
      </div>
      <div className=""></div>
      <div className="ml-auto text-3xl font-black">
        {/* <LoginButton /> */}
        JET TRACK
      </div>
    </div>
  );
};

export default Navbar;
