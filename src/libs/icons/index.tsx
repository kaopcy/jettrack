"use client";

import { Icon as ClientSideIcon, IconProps } from "@iconify/react";
import { IconifyJSON, Icon as ServerSideIcon } from "@iconify/react/dist/offline";

import { FC } from "react";
import { serversideIcon } from "./iconList";

import { addCollection } from "@iconify/react/dist/offline";
import _iconsbundle from "@/libs/icons/iconsBundle.json";

_iconsbundle.forEach((element) => {
  addCollection(element as unknown as IconifyJSON);
});

const Icons: FC<IconProps & { isServer?: boolean }> = ({ icon, ...other }) => {
  return serversideIcon.includes(icon as string) ? (
    <ServerSideIcon icon={icon} {...other} />
  ) : (
    <ClientSideIcon icon={icon} {...other} />
  );
};

export default Icons;
