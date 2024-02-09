"use client";

import { Icon as ClientSideIcon, IconProps } from "@iconify/react";
import { Icon as ServerSideIcon, IconifyJSON } from "@iconify/react/dist/offline";
import { addCollection } from "@iconify/react/dist/offline";
import { FC } from "react";

import _iconsbundle from "@/libs/icon/iconsBundle.json";

import { serversideIcon } from "./iconList";

_iconsbundle.forEach((element) => {
  addCollection(element as unknown as IconifyJSON);
});

const Icon: FC<IconProps & { isServer?: boolean }> = ({ icon, ...other }) => {
  return serversideIcon.includes(icon as string) ? (
    <ServerSideIcon icon={icon} {...other} />
  ) : (
    <ClientSideIcon icon={icon} {...other} />
  );
};

export default Icon;
