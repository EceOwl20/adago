"use client";
import React, { useState } from "react";
import photo from "@/public/images/villalar/zemin.png";
import photo2 from "@/public/images/villalar/kat1.png";
import photo3 from "@/public/images/villalar/roof.png";
import Image from "next/image";
//import { useTranslations } from "next-intl";

const FloorPlan = ({data}) => {
  const { header, subHeader, image, button, image2, button2, image3, button3} = data;

  //const t = useTranslations("Floor");
  const [currentImage, setCurrentImage] = useState(photo);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleButtonClick = (imagePath) => {
    setCurrentImage(imagePath);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="flex h-screen w-screen bg-white my-10 lg:my-20 justify-center">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col gap-[10px] text-center pb-8 lg:pb-20 px-7 lg:px-20 text-royalBlue font-hurme ">
          <div className="flex gap-2 justify-center items-center">
            <div className="flex h-[4px] w-[4px] lg:h-[8px] lg:w-[8px] rounded-full bg-darkSeaBlue"></div>
            <span className="font-semibold text-lg lg:text-3xl">{header}</span>
            <div className="flex h-[4px] w-[4px] lg:h-[8px] lg:w-[8px] rounded-full bg-darkSeaBlue"></div>
          </div>
          <div className="flex bg-darkSeaBlue h-[1px]"></div>
          <text className="font-light text-sm lg:text-xl">
            {subHeader}
          </text>
        </div>

        <div className="flex flex-col w-11/12 lg:flex-row-reverse items-center gap-10">
          <div className="flex-3 h-full w-full lg:w-2/3 cursor-pointer" onClick={() => openModal(currentImage)}>
            <Image src={currentImage} alt="Selected" layout="responsive" />
          </div>
          <div className="flex-1 flex lg:flex-col gap-4 items-center justify-center">
            <button
              onClick={() => handleButtonClick(photo)}
              className="lg:px-4 lg:py-2 py-1 px-2 bg-royalBlue text-white rounded-md hover:bg-darkSeaBlue"
            >
              {button.text}
            </button>
            <button
              onClick={() => handleButtonClick(photo2)}
              className="lg:px-4 lg:py-2 py-1 px-2 bg-royalBlue text-white rounded-md hover:bg-darkSeaBlue"
            >
              {button2.text}
            </button>
            <button
              onClick={() => handleButtonClick(photo3)}
              className="lg:px-4 lg:py-2 py-1 px-2 bg-royalBlue text-white rounded-md hover:bg-darkSeaBlue"
            >
              {button3.text}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 top-40">
          <div className="relative">
            <Image src={selectedImage} alt="Selected" layout="responsive" className="max-w-full max-h-full" />
            <button
              onClick={closeModal}
              className="absolute top-56 right-5 my-2 mx-2 text-white bg-flameOrange rounded-full p-2 z-[99]"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloorPlan;
