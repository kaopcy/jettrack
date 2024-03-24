/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import Card from "@/components/Card";

const RealTimeCarImage = () => {
  const [src, setSrc] = useState("");
  useEffect(() => {
    const socket = io("http://localhost:3001"); // Replace with your server URL
    // Listen for incoming messages
    socket.on("response", (message) => {
      const file = message.message;

      if (file.length == 0) return;

      const base64Image = `data:image/png;base64,${file.replaceAll('"', "")}`;
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
