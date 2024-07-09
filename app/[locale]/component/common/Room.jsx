"use client"
import { MdOutlinePool } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { RiHome3Fill,RiArmchairFill } from "react-icons/ri";
import { PiElevatorFill } from "react-icons/pi";
import { GiHomeGarage } from "react-icons/gi";
import React from 'react';
import RoomImages from "./RoomImages"
import { useTranslations } from "next-intl";
import { SiApacheparquet } from "react-icons/si";
import { TbAirConditioning } from "react-icons/tb";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { IoFunnelSharp } from "react-icons/io5";
import { PiTreeStructureBold } from "react-icons/pi";
import { GiDoor } from "react-icons/gi";


const Room = ({roomName, roomDetail, images}) => {
    const t=useTranslations("Icons");

  return (
    <div className="flex mt-6 lg:mt-24 w-full justify-center items-center">
      <div className="flex flex-col-reverse lg:flex-row font-hurme w-10/12 justify-center items-center xl:gap-4">
        <RoomImages images={images}/>
        <div className="flex flex-col gap-[10px] lg:gap-[20px] items-center justify-center text-center w-full">
        <span className="text-royalBlue text-base md:text-xl lg:text-2xl xl:text-3xl font-semibold"> {roomName}</span>
        <text className="text-darkSeaBlue text-sm md:text-base lg:text-lg xl:text-xl font-light">
          {roomDetail}
        </text>
        <div className="grid grid-cols-2 gap-4 font-hurme font-light mt-2 lg:mt-8 items-center justify-center">
            <div className="flex justify-center items-center gap-2 "><MdOutlinePool size={20}/><text className="text-xs md:text-sm xl:text-base">{t("sea")}</text></div>
                <div className="flex gap-2 justify-center items-center"><FaSwimmingPool size={20}/><text className="text-xs md:text-sm xl:text-base">{t("pool")}</text></div>
                <div className="flex gap-2 justify-center items-center"><RiHome3Fill size={20}/><text className="text-xs md:text-sm xl:text-base">{t("smart")}</text></div>
                <div className="flex gap-2 justify-center items-center"><RiArmchairFill size={20}/><text className="text-xs md:text-sm xl:text-base">{t("furnis")}</text></div>
                <div className="flex gap-2 justify-center items-center"><PiElevatorFill size={20}/><text className="text-xs md:text-sm xl:text-base">{t("elevator")}</text></div>
                <div className="flex gap-2 justify-center items-center"><GiHomeGarage size={20}/><text className="text-xs md:text-sm xl:text-base">{t("garage")}</text></div>
                <div className="flex gap-2 justify-center items-center"><SiApacheparquet size={30}/><text className="text-xs md:text-sm xl:text-base">Şerifoğlu Lamine Parke (meşe)</text></div>
                <div className="flex gap-2 justify-center items-center"><IoFunnelSharp size={25}/><text className="text-xs md:text-sm xl:text-base">Franke Ankastraler</text></div>
                <div className="flex gap-2 justify-center items-center"><TbAirConditioning size={35}/><text className="text-xs md:text-sm xl:text-base">MITSUBISHI multi sistem klima</text></div>
                <div className="flex gap-2 justify-center items-center"><GiDoor size={35}/><text className="text-xs md:text-sm xl:text-base">Lamine Kapılar (GREEN DOOR)</text></div>
            
        </div>
        </div>
      </div>
    </div>
  )
}

export default Room
