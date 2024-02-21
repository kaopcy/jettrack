import React, { FC, ReactNode } from "react";

const DashBoardLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <main className="text-text flex h-[calc(100%-70px)] w-full overflow-y-auto px-2 py-2 font-google">{children}</main>
  );
};

export default DashBoardLayout;
