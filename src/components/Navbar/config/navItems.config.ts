import { routes } from "@/configs/routes.config";

export const navItems = [
  {
    label: "Real Time",
    href: routes.dashBoard.noIp("realtime"),
  },
  {
    label: "History",
    href: routes.dashBoard.noIp("history"),
  },
  {
    label: "Settings",
    href: routes.dashBoard.settings,
  },
];
