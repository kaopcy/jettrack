import React from "react";

import AccessControl from "./_section/AccessControl";
import HistoryConfiguration from "./_section/HistoryConfiguration";
import Profile from "./_section/Profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings - Jet Track",
};

const SettingsDashBoardPage = () => {
  return (
    <main className="flex min-h-screen w-full">
      <div className="grid h-full w-full grid-cols-3 gap-2">
        <AccessControl />
        <HistoryConfiguration />
        <Profile />
      </div>
    </main>
  );
};

export default SettingsDashBoardPage;
