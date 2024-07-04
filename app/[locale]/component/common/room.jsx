"use client"
import { MdOutlinePool } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { RiHome3Fill,RiArmchairFill } from "react-icons/ri";
import { PiElevatorFill } from "react-icons/pi";
import { GiHomeGarage } from "react-icons/gi";
import React from 'react';
import RoomImages from "./roomImages"
import { useTranslations } from "next-intl";

const Room = ({roomName, roomDetail, images}) => {
    const t=useTranslations("Icons");

  return (
    <div className="flex mt-40 w-full justify-center items-center">
      <div className="flex flex-col-reverse lg:flex-row font-hurme w-4/5 justify-center items-center xl:gap-4">
        <RoomImages images={images}/>
        <div className="flex flex-col gap-[10px] lg:gap-[20px] items-start justify-start w-full">
        <span className="text-royalBlue text-base md:text-xl lg:text-2xl xl:text-3xl font-semibold"> {roomName}</span>
        <text className="text-darkSeaBlue text-sm md:text-base lg:text-lg xl:text-xl font-light">
          {roomDetail}
        </text>
        <div className="grid grid-cols-2 gap-4 font-hurme font-light mt-2 lg:mt-8">
            <div className="flex gap-2 "><MdOutlinePool size={20}/><text className="text-xs md:text-sm xl:text-base">{t("sea")}</text></div>
                <div className="flex gap-2"><FaSwimmingPool size={20}/><text className="text-xs md:text-sm xl:text-base">{t("pool")}</text></div>
                <div className="flex gap-2"><RiHome3Fill size={20}/><text className="text-xs md:text-sm xl:text-base">{t("smart")}</text></div>
                <div className="flex gap-2"><RiArmchairFill size={20}/><text className="text-xs md:text-sm xl:text-base">{t("furnis")}</text></div>
                <div className="flex gap-2"><PiElevatorFill size={20}/><text className="text-xs md:text-sm xl:text-base">{t("elevator")}</text></div>
                <div className="flex gap-2"><GiHomeGarage size={20}/><text className="text-xs md:text-sm xl:text-base">{t("garage")}</text></div>
            
        </div>
        </div>
      </div>
    </div>
  )
}

export default Room
