"use client";
import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import villa1 from "@/public/images/villalar/villa1.jpeg";
import villa2 from "@/public/images/villalar/villa2.jpeg";
import villa3 from "@/public/images/villalar/villa3.jpeg";
import villa4 from "@/public/images/villalar/villa4.jpeg";
import villa5 from "@/public/images/villalar/villa5.jpeg";
import villa6 from "@/public/images/villalar/villa6.jpeg";
import yatakodasi1 from '@/public/images/villalar/yatakodası1.jpeg'
import yatakodasi2 from '@/public/images/villalar/yatakodası2.jpeg'
import yatakodasi3 from '@/public/images/villalar/yatakodası3.jpeg'
import yatakodasi4 from '@/public/images/villalar/yatakodası4.jpeg'
import yatakodasi5 from '@/public/images/villalar/yatakodası5.jpeg'
import salon1 from '@/public/images/villalar/salon1.jpeg'
import salon2 from '@/public/images/villalar/salon2.jpeg'
import salon3 from '@/public/images/villalar/salon3.jpeg'
import salon4 from '@/public/images/villalar/salon4.jpeg'
import salon5 from '@/public/images/villalar/salon5.jpeg'


import { useTranslations } from "next-intl";

const HomeVilla = () => {
  const t = useTranslations("Home");
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, draggable: false });
  const [intervalId, setIntervalId] = useState(null);

  const images = [villa1, villa2, villa3, villa5, villa6, yatakodasi1, yatakodasi2, yatakodasi3, yatakodasi4, yatakodasi5, salon1, salon2, salon3, salon4, salon5];

  useEffect(() => {
    if (embla) {
      const autoPlay = () => {
        if (embla.canScrollNext()) {
          embla.scrollNext();
        } else {
          embla.scrollTo(0);
        }
      };

      const id = setInterval(autoPlay, 3000);
      setIntervalId(id);

      return () => clearInterval(id);
    }
  }, [embla]);

  return (
    <div className="relative h-screen lg:h-screen w-full">
      <div className="absolute inset-0 z-0 overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="flex-[0_0_100%]">
              <div
                className="h-screen lg:h-screen bg-cover bg-center w-full"
                style={{ backgroundImage: `url(${image.src})` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black/30 absolute inset-0 z-[1]"></div>
      <div className='flex flex-col w-full h-full justify-center items-center text-white z-50'>
        <div className='flex flex-col justify-center items-center w-1/2 h-1/2 text-center gap-[10px] lg:gap-[25px]'>
          <span className="lg:text-2xl xl:text-4xl font-hurme font-semibold z-50 text-xl">{t("title")}</span>
          <p className='flex text-sm lg:text-base xl:text-lg font-light z-50'>{t("description")}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeVilla;

