import axios from "axios";
import fs from "fs";

import { serversideIcon } from "./iconList";

const preferredIconName: Record<string, string[]> = {};

serversideIcon.forEach((icon) => {
  const [prefix, iconName] = icon.split(":");

  if (preferredIconName[prefix]) {
    preferredIconName[prefix] = [...preferredIconName[prefix], iconName];
  } else {
    preferredIconName[prefix] = [iconName];
  }
});

const iconLinks = Object.entries(preferredIconName).map(
  ([key, value]) => `https://api.iconify.design/${key}.json?icons=${value.join(",")}&pretty=1`,
);

(async () => {
  try {
    const res = await axios.all(iconLinks.map((endpoint) => axios.get(endpoint)));
    const data = res.map((r) => r.data);
    console.log(data);
    fs.writeFileSync("src/libs/icon/iconsBundle.json", JSON.stringify(data));
  } catch (error) {
    console.log("Cannot download icon files from server:  " + error);
  }
})();
