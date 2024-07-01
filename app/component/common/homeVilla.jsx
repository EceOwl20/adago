import React from 'react';
import Image from "next/image";
import villa from "@/public/images/villalar/villa2.jpeg";

const homeVilla = () => {
  return (
    <div className="relative h-screen lg:h-screen bg-cover bg-center w-full" 
    style={{ backgroundImage: `url(${villa.src})` }}>
        <div className="bg-black/30 absolute inset-0 z-[1]"></div>
      <div className='flex flex-col w-full h-full justify-center items-center text-white z-50'>
        <div className='flex flex-col justify-center items-center w-1/2 h-1/2 text-center gap-[10px] lg:gap-[25px]'>
        <span className="lg:text-2xl xl:text-4xl font-hurme font-semibold z-50 text-xl">AdaGo</span>
        <text className='flex text-sm lg:text-base xl:text-lg font-light z-50'>Antalya'nın huzur dolu ve doğal güzelliklerle çevrili Ermenek bölgesinde yer alan firmamız, prestijli ve lüks yaşam alanları oluşturma misyonuyla faaliyet göstermektedir. Uzman ekibimiz ve titizlikle seçtiğimiz malzemelerle, her biri benzersiz olan villalarımızı hayata geçiriyoruz.
</text>
        </div>
      </div>
    </div>
  )
}

export default homeVilla
