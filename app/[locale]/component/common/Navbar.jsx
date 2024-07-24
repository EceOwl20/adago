"use client"; // Bu satırı ekleyin

import React, { useState, useEffect, createContext, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoWhite from "@/public/images/logoWhite.png";
//import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import LangSwitcher from "../../../../LangSwitcher";
import Logo1 from "@/public/images/logo1.png"
import Cookies from "js-cookie";

const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);


const Navbar = ({data}) => {
  const { institutional, logoImage, project, contact } = data;

  const [language, setLanguage] = useState(Cookies.get("language") || "TR");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Cookies.set("language", language);
  }, [language]);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    Cookies.set("language", newLanguage);
    window.location.reload(); 
  };

  const languages = ["EN", "TR", "RU"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  //const t=useTranslations("Navbar");

  return (
    <div className="flex w-full justify-between items-center bg-darkSeaBlue sticky top-0 p-4 z-[9999]">
      <div className="w-3/12 md:w-2/12 lg:w-1/12 ">
        <Link href="/"><Image src={Logo1} alt="logo" /></Link>
      </div>
      <div className="hidden md:flex w-4/5 md:justify-end justify-end items-center gap-10">
        <Link
          href="/#a"
          className=" text-white font-semibold font-hurme text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-[19px]  hover:text-flameOrange"
        >
          {institutional.text}
        </Link>
        <Link
          href="/project"
          className=" text-white font-semibold font-hurme text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-[19px]  hover:text-flameOrange"
        >
          {project.text}
        </Link>
        
        <Link
          href="/contactpage"
          className=" text-white font-semibold font-hurme text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-[19px]  hover:text-flameOrange"
        >
          {contact.text}
        </Link>
        <Link href='tel:+90 532 562 77 77'>
        <span className=" text-white font-light font-hurme text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-lg">+90 532 562 77 77</span>
        </Link>
        <div className="relative ">
          <button
            className="inline-flex items-center bg-royalBlue text-white text-lg px-3 py-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {language}
            <svg
              className="ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 rounded-md shadow-lg text-lg bg-white ring-1 ring-black ring-opacity-5 ">
              {languages
                .filter((lang) => lang !== language)
                .map((lang, index) => (
                  <button
                    key={index}
                    onClick={() => handleLanguageChange(lang)}
                    className="block w-full px-6 py-2 text-left  text-royalBlue hover:bg-royalBlue hover:text-white"
                  >
                    {lang}
                  </button>
                ))}
            </div>
          )}
        </div>
        <div className=" justify-center items-center md:text-white md:bg-darkSeaBlue text-base lg:text-lg xl:text-xl text-center cursor-pointer ">
            {/* <LangSwitcher /> */}
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
            {institutional.text}
          </Link>
          <Link
            href="/project"
            className="py-2 w-1/5 text-black font-semibold font-hurme text-base"
          >
            {project.text}
          </Link>
          
          <Link
            href="/contactpage"
            className="py-2 w-1/5 text-black font-semibold font-hurme text-base"
          >
            {contact.text}
          </Link>
          <div className="py-2 w-1/5  font-semibold font-hurme text-base">
          {/* <LangSwitcher /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
