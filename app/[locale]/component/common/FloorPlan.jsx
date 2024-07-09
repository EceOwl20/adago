"use client";
import React, { useState } from "react";
import photo from "@/public/images/villalar/villa6.jpeg";
import photo2 from "@/public/images/villalar/villa5.jpeg";
import photo3 from "@/public/images/villalar/villa3.jpeg";
import Image from "next/image";

const FloorPlan = () => {
  const [currentImage, setCurrentImage] = useState(photo);

  const handleButtonClick = (imagePath) => {
    setCurrentImage(imagePath);
  };

  return (
    <div className="flex h-screen w-screen bg-white my-10 lg:my-20 justify-center">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col gap-[10px] text-center pb-8 lg:pb-20 px-7 lg:px-20 text-royalBlue font-hurme ">
          <div className="flex gap-2 justify-center items-center">
            <div className="flex h-[4px] w-[4px] lg:h-[8px] lg:w-[8px] rounded-full bg-darkSeaBlue"></div>
            <span className="font-semibold text-lg lg:text-3xl">Kat Planı</span>
            <div className="flex h-[4px] w-[4px] lg:h-[8px] lg:w-[8px] rounded-full bg-darkSeaBlue"></div>
          </div>
          <div className="flex bg-darkSeaBlue h-[1px]"></div>
          <text className="font-light text-sm lg:text-xl">
            Bu lüks villa, üç katlı yapısıyla geniş ve ferah alanlar sunar.
            Zemin katta salon, Amerikan mutfak, misafir WC ve teras bulunur.
            Birinci katta en-suite banyolu üç yatak odası ve balkon, ikinci
            katta ise iki en-suite yatak odası ve çatı terası yer alır. Villa,
            özel havuz, kapalı otopark, akıllı ev sistemi, yerden ısıtma ve
            merkezi klima gibi özelliklerle donatılmıştır. Ses ve ısı yalıtımı
            sağlar. Denize 4 km, havalimanına 4 km, şehir merkezine 3 km
            mesafededir.
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
              1. Kat
            </button>
            <button
              onClick={() => handleButtonClick(photo2)}
              className="lg:px-4 lg:py-2 py-1 px-2 bg-royalBlue text-white rounded-md hover:bg-darkSeaBlue"
            >
              2. Kat
            </button>
            <button
              onClick={() => handleButtonClick(photo3)}
              className="lg:px-4 lg:py-2 py-1 px-2 bg-royalBlue text-white rounded-md hover:bg-darkSeaBlue"
            >
              3. Kat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
