import React from 'react';
import { LuPhone } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";

const Contactus = () => {
  return (
    <div className='flex  w-full items-center justify-center'>
        <div className='flex flex-col gap-[20px] p-4 font-hurme w-1/2 bg-royalBlue items-center justify-center'>
            <div className='flex gap-[20px] items-center justify-center'>
                <LuPhone size={24}/>
                <div className='flex flex-col gap-[5px]'>
                <text className='text-lg font-semibold'>Phone</text>
                <span className='text-base font-light'>+90 123 456 78 90</span>
                </div>
            </div>
            <div className='flex gap-[20px] items-center justify-center'>
                <LuMail size={24}/>
                <div className='flex flex-col gap-[5px]'>
                <text className='text-lg font-semibold'>Mail</text>
                <span className='text-base font-light'>info@adago.com</span>
                </div>
            </div>
            <div className='flex gap-[20px] items-center justify-center '>
                <LuMapPin size={24}/>
                <div className='flex flex-col gap-[5px]'>
                <text className='text-lg font-semibold'>Location</text>
                <span className='text-base font-light'>gfdgddfsdsfsfsrfg</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contactus
