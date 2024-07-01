"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/public/images/logoWhite.png"


const Footer = () => {
  return (
    <div className="flex flex-col bg-darkSeaBlue h-[150px] w-full">
      <div className="flex flex-row items-center w-full justify-evenly bg-darkSeaBlue font-hurme  h-5/6">
      

        <div className="lg:flex grid grid-cols-1 lg:gap-20 xl:gap-32 gap-[5px]">
         
          <Link
            href="/"
            className="2xl:text-xl xl:text-lg md:text-base text-xs text-white font-semibold hover:text-flameOrange"
          >
            VİLLALAR
          </Link>
          <Link
            href="/"
            className="2xl:text-xl xl:text-lg md:text-base text-xs text-white font-semibold hover:text-flameOrange"
          >
            İLETİŞİM
          </Link>
        </div>

        <div className="flex w-1/4 lg:w-1/5">
        <Image
          src={logoImage}
          alt="logo"
          layout="responsive"
          />
        </div>

        <div className="lg:flex grid grid-cols-1 lg:gap-20 xl:gap-32 gap-[10px]">
          <Link
            href="/"
            className="2xl:text-xl xl:text-lg md:text-base text-xs text-white font-semibold hover:text-flameOrange"
          >
            KURUMSAL
          </Link>
          <Link
            href="/"
            className="2xl:text-xl xl:text-lg md:text-base text-xs text-white font-semibold hover:text-flameOrange"
          >
            PROJELERİ
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
