import React from 'react';
import aynaoda from "@/public/images/villalar/aynaoda1.jpeg";
import aynaoda2 from "@/public/images/villalar/aynaoda2.jpeg";
import aynaoda3 from "@/public/images/villalar/aynaoda3.jpeg";
import aynaoda4 from "@/public/images/villalar/aynaoda4.jpeg";
import aynaoda5 from "@/public/images/villalar/aynaoda5.jpeg";
import Image from 'next/image';

const room = ({images}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {images.map((src, index) => {
        if (index === 0) {
          // İlk resim büyük olacak şekilde ayarlanır
          return (
            <div key={index} className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2">
              <Image src={src} alt={`Image ${index + 1}`} className="w-full h-auto" />
            </div>
          );
        } else if (index === 1 && images.length > 2) {
          // İkinci resim sağ üst köşeyi doldurur
          return (
            <div key={index} className="col-span-1 lg:col-span-1">
              <Image src={src} alt={`Image ${index + 1}`} className="w-full h-auto" />
            </div>
          );
        } else {
          // Diğer resimler alt kısma yerleştirilir
          return (
            <div key={index} className="col-span-1 lg:col-span-1">
              <Image src={src} alt={`Image ${index + 1}`} className="w-full h-auto" />
            </div>
          );
        }
      })}
    </div>
    
  )
}

export default room
