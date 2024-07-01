import React from 'react';
import aynaoda from "@/public/images/villalar/aynaoda1.jpeg";
import aynaoda2 from "@/public/images/villalar/aynaoda2.jpeg";
import aynaoda3 from "@/public/images/villalar/aynaoda3.jpeg";
import aynaoda4 from "@/public/images/villalar/aynaoda4.jpeg";
import aynaoda5 from "@/public/images/villalar/aynaoda5.jpeg";

const room = () => {
  return (
    <div className='flex w-full h-screen'>
      <div className='grid grid-cols-3 gap-[20px] mx-[30px]'>
        <div className='col-span-2 bg-cover bg-center' style={{ backgroundImage: `url(${aynaoda.src})` }}></div>
        <div className='bg-cover bg-center h-1/2 w-full' style={{ backgroundImage: `url(${aynaoda.src})` }}>kjlvdflkghdflkbhdklfgb</div>
        <div className='bg-cover bg-center h-1/2 w-full' style={{ backgroundImage: `url(${aynaoda2.src})` }}></div>
        <div className='bg-cover bg-center h-1/2 w-full' style={{ backgroundImage: `url(${aynaoda2.src})` }}></div>
        <div className='bg-cover bg-center h-1/2 w-full' style={{ backgroundImage: `url(${aynaoda2.src})` }}></div>
        <div className='bg-cover bg-center h-1/2 w-full' style={{ backgroundImage: `url(${aynaoda2.src})` }}></div>
        <div className='bg-cover bg-center h-1/2 w-full' style={{ backgroundImage: `url(${aynaoda2.src})` }}></div>
      </div>
    </div>
  )
}

export default room
