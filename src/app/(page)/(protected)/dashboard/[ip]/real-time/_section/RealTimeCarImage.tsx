import Image from "next/image";
import React from "react";

import Card from "@/components/Card";

const RealTimeCarImage = () => {
  return (
    <Card className="relative h-full w-full p-3">
      <div className="relative h-full w-full">
        <Image src="/images/mock-car.jfif" alt="mock car" className="object-cover" fill />
      </div>
    </Card>
  );
};

export default RealTimeCarImage;
