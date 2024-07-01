import React from "react";
import Image from "next/image";
import business from "@/public/images/business.jpeg";

const values = () => {
  return (
    <div className="flex w-full bg-white justify-center items-center h-screen">
      <div className="flex flex-col lg:flex-row w-full xl:w-3/5 justify-center items-center gap-[30px] xl:gap-[70px] mx-[25px] md:mx-[45px]">
        <div className="flex w-full md:w-3/5 xl:w-1/3"   >
          <Image src={business} alt="business" layout="responsive" />
        </div>
        <div className="flex flex-col xl:w-2/3 font-hurme items-start justify-center gap-[5px] lg:gap-[15px] ">
          <span className="text-base md:text-lg lg:text-xl font-semibold uppercase">
            Who we are?
          </span>
          <span className="text-base md:text-lg lg:text-2xl font-bold text-royalBlue">
            AdaGo Company Story
          </span>
          <text className="text-sm lg:text-base break-keep">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            dolor, dolorem eveniet amet ipsa consequuntur numquam reiciendis,
            vel laboriosam nihil ea. Laborum laboriosam eos sunt libero
            reiciendis animi inventore eum!
          </text>
        </div>
      </div>
    </div>
  );
};

export default values;