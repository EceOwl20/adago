import React from "react";
import Image from "next/image";
import Villa6 from "@/public/images/villalar/villa6.jpeg";
//import { useTranslations } from "next-intl";

const Concept = ({data}) => {
  //const t=useTranslations("Concept");
  const { block, block2, image} = data;

  return (
    <div className="flex w-full h-screen">
      <div
        className="flex flex-col w-full h-screen bg-black items-center justify-evenly gap-1 text-white"
        style={{
          backgroundImage: `url(${"http://localhost:1337" + image.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col w-10/12 xl:w-3/4 items-center justify-center gap-3 lg:gap-10 bg-black bg-opacity-50 backdrop-blur-xl p-6 rounded-lg text-center">
          <h1 className="text-white font-semibold font-hurme text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-[30px]">
          {block.header}
          </h1>
          <p className=" font-light text-xs lg:text-xl font-hurme md:text-sm xl:text-base 2xl:text-[18px] text-center">
          {block.text}
          </p>
        </div>
        <div className="flex-col  w-11/12 md:w-9/12 md:flex xl:w-6/12 xl:gap-10 justify-center items-center bg-black bg-opacity-50 backdrop-blur-xl p-6 rounded-lg">
          <div className="w-6/7 xl:w-5/12">
          </div>
          <div className="flex flex-col  md:flex-col items-center gap-3 justify-center text-center"> 
            <h1 className="font-semibold text-lg lg:text-3xl font-hurme  md:text-sm  xl:text-lg 2xl:text-[30px]">
            {block2.header}
            </h1>
            <p className="  font-light text-xs lg:text-xl font-hurme md:text-sm xl:text-base 2xl:text-[18px] text-center">
            {block2.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concept;
