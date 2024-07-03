import React from 'react';
import Link from "next/link"

const menubar = () => {
  return (
    <div className='flex flex-row w-full text-white z-[999] mt-[90px] fixed'>
      <div className='flex w-full shrink-0 bg-darkSeaBlue overflow-y-auto shadow shadow-royalBlue items-center justify-around p-2'>
        <div className='flex text-[15px] lg:text-[18px] xl:text-[20px] font-montserrat font-semibold items-center gap-20'>
            <Link className="hover:bg-white hover:text-darkSeaBlue p-1 rounded-md" href="/">Konsept</Link>
            <Link className="hover:bg-white hover:text-darkSeaBlue p-1 rounded-md" href="/">Odalar</Link>
            <Link className="hover:bg-white hover:text-darkSeaBlue p-1 rounded-md" href="/" >Kat Planı</Link>
            <Link className="hover:bg-white hover:text-darkSeaBlue p-1 rounded-md" href="/" >Vaziyet Planı</Link>
        </div>
      </div>
    </div>
  )
}

export default menubar
