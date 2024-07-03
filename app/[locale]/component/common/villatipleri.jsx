import React from "react";
import Image from "next/image";
import Link from "next/link";
import Villa1 from "@/public/images/villalar/villa1.jpeg";
import Villa2 from "@/public/images/villalar/villa2.jpeg";
import Villa3 from "@/public/images/villalar/villa3.jpeg";
import Villa4 from "@/public/images/villalar/villa4.jpeg";
import LogoWhite from "@/public/images/logoWhite.png";
import { useTranslations } from "next-intl";

const Villatipleri = () => {
  const t=useTranslations("Vilas");

  return (
    <div>
      <div className="flex flex-col bg-darkSeaBlue w-full h-1/2 p-2 items-center">
        <div className="relative w-1/2 h-16">
          <Image src={LogoWhite} alt="logo" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-4 w-full gap-4 flex flex-col lg:flex-row">
        <Link href="/villa1" >
          <div
            className="relative flex flex-col justify-center items-center bg-cover bg-center "
            style={{
              backgroundImage: `url(${Villa1.src})`,
              height: "45vh",
              width: "100%",
            }}
          >
            <div className="bg-black/30 absolute inset-0 z-[1px]"></div>
            <h2 className="z-10 text-white font-semibold font-hurme text-3xl md:text-4xl lg:text-xl xl:text-2xl 2xl:text-3xl">
              {t("subTitle")}
            </h2>
            <h3 className="z-10 text-white font-semibold font-hurme text-xl md:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl">
            {t("subText")}
            </h3>
          </div>
        </Link>
        <Link href="/villa1" >
          <div
            className="relative flex flex-col justify-center items-center bg-cover bg-center  "
            style={{
              backgroundImage: `url(${Villa2.src})`,
              height: "45vh",
              width: "100%",
            }}
          >
            <div className="bg-black/30 absolute inset-0 z-[1px]"></div>
            <h2 className="z-10 text-white font-semibold font-hurme text-3xl md:text-4xl lg:text-xl xl:text-2xl 2xl:text-3xl">
            {t("subTitle2")}
            </h2>
            <h3 className="z-10 text-white font-semibold font-hurme text-xl md:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl">
            {t("subText2")}
            </h3>
          </div>
        </Link>
        <Link href="/villa1" >
          <div
            className="relative flex flex-col justify-center items-center bg-cover bg-center "
            style={{
              backgroundImage: `url(${Villa3.src})`,
              height: "45vh",
              width: "100%",
            }}
          >
            <div className="bg-black/30 absolute inset-0 z-[1px]"></div>
            <h2 className="z-10 text-white font-semibold font-hurme text-3xl md:text-4xl lg:text-xl xl:text-2xl 2xl:text-3xl">
            {t("subTitle3")}
            </h2>
            <h3 className="z-10 text-white font-semibold font-hurme text-xl md:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl">
            {t("subText3")}
            </h3>
          </div>
        </Link>
        <Link href="/villa1" >
          <div
            className="relative flex flex-col justify-center items-center bg-cover bg-center "
            style={{
              backgroundImage: `url(${Villa4.src})`,
              height: "45vh",
              width: "100%",
            }}
          >
            <div className="bg-black/30 absolute inset-0 z-[1px]"></div>
            <h2 className="z-10 text-white font-semibold font-hurme text-3xl md:text-4xl lg:text-xl xl:text-2xl 2xl:text-3xl">
            {t("subTitle4")}
            </h2>
            <h3 className="z-10 text-white font-semibold font-hurme text-xl md:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl">
            {t("subText4")}
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Villatipleri;
