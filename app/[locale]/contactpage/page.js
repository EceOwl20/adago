import React from 'react'
import ContactEmail from '../component/common/ContactEmail'
import Villa3 from "@/public/images/villalar/villa3.jpeg"
import Image from 'next/image'


export default function page (){
  return (
    <div className='flex flex-col'>
        <div className='flex w-full h-96 2xl:h-[900px]'>
        <Image className="w-full object-cover"src={Villa3} alt="villa3"/>
        </div>
        <ContactEmail/>
    </div>
  )
}


