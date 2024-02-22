import Image from "next/image";
import React from "react";

const CarImage = () => {
  return (
    <section className="flex h-full w-full flex-col items-start justify-start bg-white px-8 pb-8 pt-4">
      <h1 className="mb-4 text-xl font-bold">Car Image</h1>
      <div className="relative aspect-[18/9] w-full">
        <Image
          alt="car"
          fill
          sizes="50vw"
          className="object-cover"
          src="https://images.unsplash.com/photo-1459603677915-a62079ffd002?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </section>
  );
};

export default CarImage;
