"use client"
import React, {useState} from "react";
import photo from "@/public/images/villalar/villa6.jpeg";
import photo2 from "@/public/images/villalar/villa5.jpeg";
import photo3 from "@/public/images/villalar/villa4.jpeg";
import Image from 'next/image'

const floorPlan = () => {
  const [currentImage, setCurrentImage] = useState(photo);

  const handleButtonClick = (imagePath) => {
    setCurrentImage(imagePath);
  };

  return (
    <div className="flex h-screen w-screen bg-white my-10 lg:my-20 justify-center">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col gap-[10px] text-center pb-8 lg:pb-20 px-8 lg:px-20 text-royalBlue font-hurme ">
          <div className="flex gap-2 justify-center items-center">
            <div className="flex h-[4px] w-[4px] lg:h-[8px] lg:w-[8px] rounded-full bg-darkSeaBlue"></div>
            <span className="font-semibold text-lg lg:text-3xl">Kat Planı</span>
            <div className="flex h-[4px] w-[4px] lg:h-[8px] lg:w-[8px] rounded-full bg-darkSeaBlue"></div>
          </div>
          <div className="flex bg-darkSeaBlue h-[1px]"></div>
          <text className="font-light text-sm lg:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            tenetur iure asperiores beatae explicabo nostrum dignissimos ipsam
            deleniti magnam est.
          </text>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
        <div className="flex-3 mr-5 h-full w-2/3">
          <Image src={currentImage} alt="Selected"  layout="responsive" />
        </div>
        <div className="flex-1 flex flex-col gap-4 items-center justify-center">
          <button
            onClick={() => handleButtonClick(photo)}
            className="px-4 py-2  bg-royalBlue text-white rounded-md hover:bg-darkSeaBlue"
          >
            1. Resim
          </button>
          <button
            onClick={() => handleButtonClick(photo2)}
            className="px-4 py-2 bg-royalBlue text-white rounded-md hover:bg-darkSeaBlue"
          >
            2. Resim
          </button>
          <button
            onClick={() => handleButtonClick(photo3)}
            className="px-4 py-2 bg-royalBlue text-white rounded-md hover:bg-darkSeaBlue"
          >
            3. Resim
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default floorPlan;
