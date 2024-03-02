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
      const base64Image = `data:image/png;base64,${file.replaceAll('"', "")}`;

      setSrc(base64Image);
    });

    socket.on("joiner", (message) => {
      setSrc(JSON.stringify(message.message));
      console.log(JSON.stringify(message.message));
    });

    socket.emit("response", "dwd", (message) => {
      console.log(message + "dwdwd");
    });
  }, []);

  return (
    <Card className="relative h-full w-full p-3">
      <div className="relative h-full w-full">
        <img
          src={"http://localhost:9000/car/15f514c5-47a2-42d6-8d0a-5b600f351217.jpg"}
          alt="mock car"
          className="h-full w-full object-cover"
        />
      </div>
    </Card>
  );
};

export default RealTimeCarImage;
