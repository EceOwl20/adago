import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex bg-darkSeaBlue">
      <div className="flex flex-col">
        <div className="flex gap-[15px] mx-[40px]">
          <Link
            href="/"
            className="text-xl text-white font-semibold hover:text-flameOrange"
          >
            KURUMSAL
          </Link>
          <Link
            href="/"
            className="text-xl text-white font-semibold hover:text-flameOrange"
          >
            PROJELERİ
          </Link>
          <Link
            href="/"
            className="text-xl text-white font-semibold hover:text-flameOrange"
          >
            VİLLALAR
          </Link>
          <Link
            href="/"
            className="text-xl text-white font-semibold hover:text-flameOrange"
          >
            İLETİŞİM
          </Link>
        </div>
        <div className="flex">
          <text>Powered by ©️ DGTLFACE | All rights reserved</text>
        </div>
      </div>
    </div>
  );
};

export default Footer;
