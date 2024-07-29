"use client"
import { MdOutlinePool } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { RiHome3Fill,RiArmchairFill } from "react-icons/ri";
import { GiHomeGarage } from "react-icons/gi";
import React from 'react';
import RoomImages from "./RoomImages"
//import { useTranslations } from "next-intl";
import { SiApacheparquet } from "react-icons/si";
import { TbAirConditioning } from "react-icons/tb";
import { IoFunnelSharp } from "react-icons/io5";
import { PiTreeStructureBold } from "react-icons/pi";
import { GiDoor } from "react-icons/gi";


const Room = ({data}) => {
    //const t=useTranslations("Icons");
    const { header, text, slider, icon} = data;

  return (
    <div className="flex mt-6 lg:mt-24 w-full justify-center items-center">
      <div className="flex flex-col-reverse lg:flex-row font-hurme w-10/12 lg:w-11/12 xl:w-10/12 justify-center lg:items-start items-center xl:gap-4">
        <RoomImages images={slider}/>
        <div className="flex flex-col gap-[10px] lg:gap-[15px] xl:gap-[20px] items-center justify-center text-center w-full lg:w-1/2 ">
        <span className="text-royalBlue text-base md:text-xl lg:text-2xl xl:text-3xl font-semibold"> {header}</span>
        <text className="text-darkSeaBlue text-xs md:text-sm lg:text-base xl:text-[18px] font-light">
          {text}
        </text>
        <div className="grid grid-cols-2 gap-4 font-hurme font-light mt-2 lg:mt-8 items-center justify-center">
            <div className="flex justify-center items-center gap-2 "><MdOutlinePool size={20}/><text className="text-xs md:text-sm xl:text-base">{icon[0].iconText}</text></div>
                <div className="flex gap-2 justify-center items-center"><FaSwimmingPool size={20}/><text className="text-xs md:text-sm xl:text-base">{icon[1].iconText}</text></div>
                <div className="flex gap-2 justify-center items-center"><RiHome3Fill size={20}/><text className="text-xs md:text-sm xl:text-base">{icon[2].iconText}</text></div>
                <div className="flex gap-2 justify-center items-center"><GiHomeGarage size={20}/><text className="text-xs md:text-sm xl:text-base">{icon[3].iconText}</text></div>
                <div className="flex gap-2 justify-center items-center"><SiApacheparquet size={25}/><text className="text-xs md:text-sm xl:text-base">{icon[4].iconText}</text></div>
                <div className="flex gap-2 justify-center items-center"><IoFunnelSharp size={22}/><text className="text-xs md:text-sm xl:text-base">{icon[5].iconText}</text></div>
                <div className="flex gap-2 justify-center items-center"><TbAirConditioning size={30}/><text className="text-xs md:text-sm xl:text-base">{icon[6].iconText}</text></div>
                <div className="flex gap-2 justify-center items-center"><GiDoor size={25}/><text className="text-xs md:text-sm xl:text-base">{icon[7].iconText}</text></div>
            
        </div>
        </div>
      </div>
    </div>
  )
}

export default Room
