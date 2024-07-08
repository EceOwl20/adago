import React from 'react';
import Link from "next/link"

const Menubar = () => {
  return (
    <div className='flex flex-row w-full text-white '>
      <div className='flex w-full shrink-0 bg-royalBlue overflow-y-auto shadow shadow-darkSeaBlue items-center justify-around p-2 sticky top-0'>
        <div className='flex text-[12px] lg:text-[16px] xl:text-[18px] font-montserrat font-semibold items-center gap-8 lg:gap-12 xl:gap-36'>
            <Link className="hover:bg-white hover:text-darkSeaBlue p-1 rounded-md" href="/">Konsept</Link>
            <Link className="hover:bg-white hover:text-darkSeaBlue p-1 rounded-md" href="/project/rooms">Odalar</Link>
            <Link className="hover:bg-white hover:text-darkSeaBlue p-1 rounded-md whitespace-nowrap" href="/project/floorPlan" >Kat Planı</Link>
            <Link className="hover:bg-white hover:text-darkSeaBlue p-1 rounded-md whitespace-nowrap" href="/project/layoutPlan" >Vaziyet Planı</Link>
        </div>
      </div>
    </div>
  )
}

export default Menubar
