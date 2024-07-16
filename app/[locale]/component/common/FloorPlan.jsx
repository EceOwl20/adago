"use client";
import React, { useState } from "react";
import photo from "@/public/images/villalar/villa6.jpeg";
import photo2 from "@/public/images/villalar/villa5.jpeg";
import photo3 from "@/public/images/villalar/villa3.jpeg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const FloorPlan = () => {
  const t=useTranslations("Floor");
  const [currentImage, setCurrentImage] = useState(photo);

  const handleButtonClick = (imagePath) => {
    setCurrentImage(imagePath);
  };

  return (
    <div className="flex h-screen w-screen bg-white my-10 justify-center">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col gap-[10px] text-center pb-8 lg:pb-20 px-7 lg:px-20 text-royalBlue font-hurme ">
          <div className="flex gap-2 justify-center items-center">
            <div className="flex h-[4px] w-[4px] lg:h-[8px] lg:w-[8px] rounded-full bg-darkSeaBlue"></div>
            <span className="font-semibold text-lg lg:text-3xl">{t("header")}</span>
            <div className="flex h-[4px] w-[4px] lg:h-[8px] lg:w-[8px] rounded-full bg-darkSeaBlue"></div>
          </div>
          <div className="flex bg-darkSeaBlue h-[1px]"></div>
          <text className="font-light text-sm lg:text-xl">
          {t("text")}
          </text>
        </div>

        <div className="flex flex-col w-11/12 lg:flex-row-reverse items-center gap-10">
          <div className="flex-3 h-full w-full lg:w-2/3 ">
            <Image src={currentImage} alt="Selected" layout="responsive" />
          </div>
          <div className="flex-1 flex lg:flex-col gap-4 items-center justify-center">
            <button
              onClick={() => handleButtonClick(photo)}
              className="lg:px-4 lg:py-2 py-1 px-2  bg-royalBlue text-white rounded-md hover:bg-darkSeaBlue"
            >
              {t("floor1")}
            </button>
            <button
              onClick={() => handleButtonClick(photo2)}
              className="lg:px-4 lg:py-2 py-1 px-2 bg-royalBlue text-white rounded-md hover:bg-darkSeaBlue"
            >
              {t("floor2")}
            </button>
            <button
              onClick={() => handleButtonClick(photo3)}
              className="lg:px-4 lg:py-2 py-1 px-2 bg-royalBlue text-white rounded-md hover:bg-darkSeaBlue"
            >
              {t("floor3")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
