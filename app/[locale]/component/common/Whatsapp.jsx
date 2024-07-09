import React from 'react';
import { SiWhatsapp } from "react-icons/si";

const Whatsapp = () => {
  return (
    <div className='fixed lg:bottom-20 bottom-10 left-10 lg:left-20 lg:right-20 z-[9999] flex h-[85px] items-center md:bottom-4 bg-transparent justify-between'>
      <div className='flex bottom-0 h-[60px] w-[60px] inset-0 items-center justify-center shadow rounded-md z-[9999] bg-slate-200 '>
      <a className='flex' href="tel:+90 123 456 78 90">
      <SiWhatsapp size={40} className='text-royalBlue'/>
      </a>
    </div>
    </div>
  )
}

export default Whatsapp
