import React from "react";
import Image from "next/image";
import Villa5 from "@/public/images/villalar/villa5.jpeg"
import Villa1 from "@/public/images/villalar/villa1.jpeg"


const Villalar = () => {
  return (
    <div
      className="relative flex items-center justify-center w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/villalar/villa5.jpeg')" }}
    >
      <div className="flex-col absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-white font-semibold font-hurme text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Villalar
        </h1>
        <h2 className="text-white font-semibold font-hurme text-2xl md:text-base lg:text-base xl:text-lg 2xl:text-[19px]">
          Lorem ipsum dolor sit amet.
        </h2>
      </div>
    </div>
  );
};

export default Villalar;
