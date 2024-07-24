'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward, IoIosCloseCircleOutline } from "react-icons/io";

const RoomImages = ({images}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (src, index) => {
    setSelectedImage(src);
    setCurrentIndex(index);
    setIsFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
    setSelectedImage(null);
  };

  const handlePrevImage = () => {
    const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handleNextImage = () => {
    const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
        {images.map((src, index) => {
          if (index === 0) {
            return (
              <div key={index} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2" onClick={() => handleImageClick(src, index)}>
                <Image src={src} alt={`Image ${index + 1}`} className="w-full h-auto cursor-pointer" layout="contain" width={700} height={475} />
              </div>
            );
          } else if (index === 1 && images.length > 2) {
            return (
              <div key={index} className="col-span-1 lg:col-span-1" onClick={() => handleImageClick(src, index)}>
                <Image src={src} alt={`Image ${index + 1}`} className="w-full h-auto cursor-pointer" layout="contain" width={350} height={475} />
              </div>
            );
          } else {
            return (
              <div key={index} className="col-span-1 lg:col-span-1" onClick={() => handleImageClick(src, index)}>
                <Image src={src} alt={`Image ${index + 1}`} className="w-full h-auto cursor-pointer" layout="contain" width={350} height={475} />
              </div>
            );
          }
        })}
      </div>

      {isFullScreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 top-36">
          <button className="absolute top-0 right-2 px-3 py-1 rounded-full text-lg font-extrabold text-white" onClick={handleCloseFullScreen}><IoIosCloseCircleOutline size={40}/></button>
          <button className="absolute left-2 px-3 py-1 text-white rounded-full text-lg font-bold" onClick={handlePrevImage}><IoIosArrowBack size={40}/></button>
          <Image src={selectedImage} alt="Full Screen Image" className="cursor-pointer" layout="responsive" width={1200} height={800} />
          <button className="absolute right-2 px-3 py-1 text-white  rounded-full text-lg font-bold" onClick={handleNextImage}><IoIosArrowForward size={40}/></button>
        </div>
      )}
    </>
  );
};

export default RoomImages;
