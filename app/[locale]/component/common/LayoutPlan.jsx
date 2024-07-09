import React from "react";
import photo from "@/public/images/villalar/villa4.jpeg";

const LayoutPlan = () => {
  return (
    <div className="flex lg:h-screen h-screen w-screen bg-white my-10 lg:my-20 justify-center">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col gap-[10px] text-center pb-8 lg:pb-20 px-8 lg:px-20 text-royalBlue font-hurme ">
          <div className="flex gap-2 justify-center items-center">
            <div className="flex h-[4px] w-[4px] lg:h-[8px] lg:w-[8px] rounded-full bg-darkSeaBlue"></div>
            <span className="font-semibold text-lg lg:text-3xl">
              Vaziyet Planı
            </span>
            <div className="flex h-[4px] w-[4px] lg:h-[8px] lg:w-[8px] rounded-full bg-darkSeaBlue"></div>
          </div>
          <div className="flex bg-darkSeaBlue h-[1px]"></div>
          <text className="font-light text-sm lg:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            tenetur iure asperiores beatae explicabo nostrum dignissimos ipsam
            deleniti magnam est.
          </text>
        </div>
        <div
          className="flex h-full w-1/2 bg-cover justify-center items-center"
          style={{ backgroundImage: `url(${photo.src})` }}
        ></div>
      </div>
    </div>
  );
};

export default LayoutPlan;