"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/public/images/logoWhite.png"
import { useTranslations } from "next-intl";


const Footer = () => {
  const t=useTranslations("Navbar");

  return (
    <div className="flex flex-col bg-darkSeaBlue h-[150px] w-full">
      <div className="flex flex-row items-center w-full justify-center bg-darkSeaBlue font-hurme z-[9997] h-5/6">
      

        <div className="lg:flex grid grid-cols-1 lg:gap-20 xl:gap-32 gap-[5px] w-1/3 text-start">
         
        
          <Link
            href="/contactpage"
            className="2xl:text-xl xl:text-lg md:text-base text-xs text-white font-semibold hover:text-flameOrange"
          >
            {t("contact")}
          </Link>
        </div>

        <div className="flex w-1/4 lg:w-1/5 justify-center ">
        <Link href="/"> 
        <Image
          src={logoImage}
          alt="logo"
          layout="responsive"
          />
          </Link>
        </div>

        <div className="lg:flex grid grid-cols-1 lg:gap-20 xl:gap-32 gap-[10px] justify-end items-end w-1/3 text-end">
          <Link
            href="/"
            className="2xl:text-xl xl:text-lg md:text-base text-xs text-white font-semibold hover:text-flameOrange "
          >
            {t("institutional")}
          </Link>
          <Link
            href="/"
            className="2xl:text-xl xl:text-lg md:text-base text-xs text-white font-semibold hover:text-flameOrange "
          >
            {t("project")}
          </Link>
          
        </div>
      
      </div>
      <div className="flex h-1/6 justify-center lg:justify-end items-end bg-black">
          <text className="text-white font-hurme font-semibold text-xs md:text-sm"> All rights reserved</text>
        </div>
    </div>
  );
};

export default Footer;
