import React from 'react';
import { SiWhatsapp } from "react-icons/si";

const whatsapp = () => {
  return (
    <div className='flex px-8 bottom-0 md:hidden inset-0 z-[1000]  '>
      <a className='flex h-[45px] w-[45px] items-center justify-center rounded-full shadow'>
      <SiWhatsapp size={24}/>
      </a>
    </div>
  )
}

export default whatsapp
