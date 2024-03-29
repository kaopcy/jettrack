/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import Card from "@/components/Card";
import { env } from "@/configs/env";

const RealTimeCarImage = () => {
  const [src, setSrc] = useState("");
  useEffect(() => {
    const socket = io(env.wsApiUrl, { extraHeaders: { Authorization: `Secret ${env.wsSecret}` } }); // Replace with your server URL
    // Listen for incoming messages
    socket.on("messageData", (message) => {
      const file = "http://" + message.car_img_url;

      if (file.length == 0) return;

      // const base64Image = `data:image/png;base64,${file.replaceAll('"', "")}`;
      const base64Image = `${file.replaceAll('"', "")}`;
      setSrc(base64Image);
    });

    // socket.on("joiner", (message) => {
    //   setSrc(JSON.stringify(message.message));
    // });

    socket.emit("response", "", (message) => {
      console.log(message + "");
    });
  }, []);

  return (
    <Card className="relative h-full w-full p-3">
      <div className="relative h-full w-full">
        {src.length > 0 ? (
          <img src={src} alt="mock car" className="aspect-[16/7]  w-full object-cover" />
        ) : (
          <div className="">No input from producer</div>
        )}
      </div>
    </Card>
  );
};

export default RealTimeCarImage;
