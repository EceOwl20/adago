"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/public/images/logoWhite.png"
import { useTranslations } from "next-intl";
import LogoSvg from "../common/logoSvg";

const Footer = () => {
  const t=useTranslations("Navbar");

  return (
    <div className="flex flex-col bg-darkSeaBlue h-[150px] w-full">
      <div className="flex flex-row items-center w-full justify-center bg-darkSeaBlue font-hurme z-[9997] h-5/6">
      

        <div className="lg:flex grid grid-cols-1 lg:gap-20 xl:gap-32 gap-[5px] w-1/3 text-start">
         
        
          <Link
            href={t("hrefContact")}
            className="2xl:text-xl xl:text-lg md:text-base text-xs text-white font-semibold hover:text-flameOrange"
          >
            {t("contact")}
          </Link>
        </div>

        <div className="flex w-1/4 lg:w-1/5 justify-center ">
        <Link  href={t("hrefLogo")}> 
        <Image
          src={logoImage}
          alt="logo"
          layout="responsive"
          />
          </Link>
        </div>

        <div className="lg:flex grid grid-cols-1 lg:gap-20 xl:gap-32 gap-[10px] justify-end items-end w-1/3 text-end">
          <Link
             href={t("hrefLogo")}
            className="2xl:text-xl xl:text-lg md:text-base text-xs text-white font-semibold hover:text-flameOrange "
          >
            {t("institutional")}
          </Link>
          <Link
             href={t("hrefProject")}
            className="2xl:text-xl xl:text-lg md:text-base text-xs text-white font-semibold hover:text-flameOrange "
          >
            {t("project")}
          </Link>
          
        </div>
      
      </div>
      <div className="flex h-auto justify-center  items-center bg-black py-3 gap-1">
      <span className="text-[13px] text-white font-normal leading-normal tracking-[0.8px] font-hurme pt-[4px]">Powered by </span>
      <Link href="https://dgtlface.com/tr"  rel="norefferer nofollower" target="_blank" className="flex items-center justify-center">
      <LogoSvg className="flex items-center justify-center" width={80} height={20}/>
        </Link>
        </div>
        
    </div>
  );
};

export default Footer;
