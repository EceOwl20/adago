import React from 'react';
import { LuPhone } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";

const Contactus = () => {
  return (
    <div  className='flex w-full items-center justify-center mb-[100px]'>
        <div className='flex flex-col gap-[20px] p-4 font-hurme bg-darkSeaBlue items-start justify-center text-white rounded-md py-[10x] lg:py-[40px]  w-4/6 lg:w-1/3 ' >
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
                <span className='text-base font-light'>gfdgddfsdsfsfsrf bhjdyfjgçlehn fşksfklsjfşj fşlsjfşskjd fşksjf ljslkfj skdljg</span>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Contactus
