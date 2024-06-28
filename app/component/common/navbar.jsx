"use client"; // Bu satırı ekleyin

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-full justify-between items-center bg-transparent p-4">
      <div className="w-1/6">logo</div>
      <div className="hidden md:flex w-4/5 justify-between">
        <Link
          href="/"
          className=" text-black font-semibold font-hurme text-sm md:text-base lg:text-base xl:text-lg 2xl:text-[19px]  hover:text-flameOrange"
        >
          KURUMSAL
        </Link>
        <Link
          href="/"
          className=" text-black font-semibold font-hurme text-sm md:text-base lg:text-base xl:text-lg 2xl:text-[19px]  hover:text-flameOrange"
        >
          PROJELER
        </Link>
        <Link
          href="/"
          className=" text-black font-semibold font-hurme text-sm md:text-base lg:text-base xl:text-lg 2xl:text-[19px]  hover:text-flameOrange"
        >
          VİLLALAR
        </Link>
        <Link
          href="/"
          className=" text-black font-semibold font-hurme text-sm md:text-base lg:text-base xl:text-lg 2xl:text-[19px]  hover:text-flameOrange"
        >
          İLETİŞİM
        </Link>
        <div className="w-1/6">dil seçeneği</div>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
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
            DİL{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
