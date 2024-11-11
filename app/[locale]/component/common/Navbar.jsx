"use client"; // Bu satırı ekleyin

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoWhite from "@/public/images/logoWhite.png";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import LangSwitcher from "../../../../LangSwitcher";
import Logo1 from "@/public/images/logo1.png"

const Navbar = () => {
  const t=useTranslations("Navbar");

  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    // Sidebar dışına tıklama ve scroll algılama
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      const handleScroll = () => {
        setIsOpen(false);
      };
  
      // Tıklama ve scroll eventlerini dinle
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup function
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className="flex w-full justify-between items-center bg-darkSeaBlue sticky top-0 p-4 z-[9999]">
      <div className="w-3/12 md:w-2/12 lg:w-1/12 ">
        <Link href={t("hrefLogo")}><Image src={Logo1} alt="logo" /></Link>
      </div>
      <div className="hidden md:flex w-4/5 md:justify-end justify-end items-center gap-10">
        <Link
          href={t("hrefInstitutional")}
          className=" text-white font-semibold font-hurme text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-[19px]  hover:text-flameOrange"
        >
          {t("institutional")}
        </Link>
        <Link
          href={t("hrefProject")}
          className=" text-white font-semibold font-hurme text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-[19px]  hover:text-flameOrange"
        >
          {t("project")}
        </Link>
        
        <Link
          href={t("hrefContact")}
          className=" text-white font-semibold font-hurme text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-[19px]  hover:text-flameOrange"
        >
          {t("contact")}
        </Link>
        <Link href='tel:+90 532 562 77 77'>
        <span className=" text-white font-light font-hurme text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-lg">+90 532 562 77 77</span>
        </Link>
        <div className=" justify-center items-center md:text-white md:bg-darkSeaBlue text-base lg:text-lg xl:text-xl text-center cursor-pointer ">
            <LangSwitcher />
          </div>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div ref={sidebarRef} className="absolute top-[60px] left-0 w-full bg-white/30 backdrop-blur-md flex flex-col items-center md:hidden ">
          <Link
             href={t("hrefLogo")}
            className="py-2 w-1/5 text-black font-semibold font-hurme text-base"
          >
            {t("institutional")}
          </Link>
          <Link
            href={t("hrefProject")}
            className="py-2 w-1/5 text-black font-semibold font-hurme text-base"
          >
            {t("project")}
          </Link>
          
          <Link
           href={t("hrefContact")}
            className="py-2 w-1/5 text-black font-semibold font-hurme text-base"
          >
            {t("contact")}
          </Link>
          <div className="py-2 w-1/5 font-semibold font-hurme text-base justify-center items-center text-center cursor-pointer">
          <LangSwitcher />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
