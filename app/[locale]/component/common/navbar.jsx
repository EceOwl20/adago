"use client"; // Bu satırı ekleyin

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoWhite from "@/public/images/logoWhite.png";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import LangSwitcher from "../../../../LangSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const t=useTranslations("Navbar");

  return (
    <div className="flex w-full justify-between items-center bg-darkSeaBlue fixed p-4 z-50">
      <div className="w-1/2 md:w-1/3 lg:w-1/4 ">
        <Image src={LogoWhite} alt="logo" />
      </div>
      <div className="hidden md:flex w-4/5 md:justify-end justify-end gap-10">
        <Link
          href="/"
          className=" text-white font-semibold font-hurme text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-[19px]  hover:text-flameOrange"
        >
          {t("institutional")}
        </Link>
        <Link
          href="/"
          className=" text-white font-semibold font-hurme text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-[19px]  hover:text-flameOrange"
        >
          {t("project")}
        </Link>
        <Link
          href="/"
          className=" text-white font-semibold font-hurme text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-[19px]  hover:text-flameOrange"
        >
          {t("vilas")}
        </Link>
        <Link
          href="/#contact"
          className=" text-white font-semibold font-hurme text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-[19px]  hover:text-flameOrange"
        >
          {t("contact")}
        </Link>
        <div className=" justify-center items-center text-black text-base  lg:text-lg xl:text-xl text-center cursor-pointer ">
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
        <div className="absolute top-16 left-0 w-full bg-white/30 backdrop-blur-md flex flex-col items-center md:hidden">
          <Link
            href="/"
            className="py-2 w-1/5 text-black font-semibold font-hurme text-base"
          >
            KURUMSAL
          </Link>
          <Link
            href="/"
            className="py-2 w-1/5 text-black font-semibold font-hurme text-base"
          >
            PROJELER
          </Link>
          <Link
            href="/"
            className="py-2 w-1/5 text-black font-semibold font-hurme text-base"
          >
            VİLLALAR
          </Link>
          <Link
            href="/"
            className="py-2 w-1/5 text-black font-semibold font-hurme text-base"
          >
            İLETİŞİM
          </Link>
          <div className="py-2 w-1/5 text-black font-semibold font-hurme text-base">
          <LangSwitcher />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
