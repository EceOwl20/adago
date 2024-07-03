'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Room = ({images}) => {
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
                <Image src={src} alt={`Image ${index + 1}`} className="w-full h-auto cursor-pointer" layout="responsive" width={700} height={475} />
              </div>
            );
          } else if (index === 1 && images.length > 2) {
            return (
              <div key={index} className="col-span-1 lg:col-span-1" onClick={() => handleImageClick(src, index)}>
                <Image src={src} alt={`Image ${index + 1}`} className="w-full h-auto cursor-pointer" layout="responsive" width={350} height={475} />
              </div>
            );
          } else {
            return (
              <div key={index} className="col-span-1 lg:col-span-1" onClick={() => handleImageClick(src, index)}>
                <Image src={src} alt={`Image ${index + 1}`} className="w-full h-auto cursor-pointer" layout="responsive" width={350} height={475} />
              </div>
            );
          }
        })}
      </div>

      {isFullScreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <button className="absolute top-20 right-0 m-4 p-2 text-white bg-gray-800 rounded-full" onClick={handleCloseFullScreen}>X</button>
          <button className="absolute left-0 ml-4 p-2 text-white bg-gray-800 rounded-full" onClick={handlePrevImage}>&lt;</button>
          <Image src={selectedImage} alt="Full Screen Image" className="cursor-pointer" layout="responsive" width={1200} height={800} />
          <button className="absolute right-0 mr-4 p-2 text-white bg-gray-800 rounded-full" onClick={handleNextImage}>&gt;</button>
        </div>
      )}
    </>
  );
};

export default Room;
