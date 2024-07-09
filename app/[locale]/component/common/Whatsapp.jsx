'use client'
import React from 'react';
import { SiWhatsapp } from "react-icons/si";
import { FaPhone } from "react-icons/fa";


const Whatsapp = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+90 532 562 77 77"; // Telefon numaranızı buraya ekleyin
    window.location.href=`whatsapp://send?phone=${phoneNumber}`;
  };

  return (
    <div className='fixed bottom-2 left-5 lg:left-5 right-5 z-[9999] flex h-[85px] items-center md:bottom-4 bg-transparent justify-between'>
      <div className='flex bottom-0 h-[60px] w-[60px] inset-0 items-center justify-center shadow rounded-md z-[90] bg-slate-200 '>
      <button className='flex' onClick={openWhatsApp}>
      <SiWhatsapp size={40} className='text-royalBlue'/>
      </button>
    </div>
    <div className='flex lg:hidden bottom-2 right-5 h-[60px] w-[60px] inset-0 items-center justify-center shadow rounded-md z-[90] bg-slate-200 '>
      <a className='flex' href="tel:+90 532 562 77 77">
      <FaPhone size={40} className='text-royalBlue'/>
      </a>
    </div>
    </div>
  )
}

export default Whatsapp
