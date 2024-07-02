import React from "react";
import Image from "next/image";
import business from "@/public/images/business.jpeg";
import { useTranslations } from "next-intl";

const values = () => {

  const t=useTranslations("Values");

  return (
    <div id="a"className="flex w-full bg-white justify-center items-center mb-44">
      <div className="flex flex-col lg:flex-row w-full xl:w-3/5 justify-center items-center gap-[30px] xl:gap-[70px] mx-[25px] md:mx-[45px]">
        <div className="flex w-full md:w-3/5 xl:w-1/3"   >
          <Image src={business} alt="business" layout="responsive" />
        </div>
        <div className="flex flex-col xl:w-2/3 font-hurme items-start justify-center gap-[5px] lg:gap-[15px] ">
          <span className="text-base md:text-lg lg:text-xl font-semibold uppercase">
            {t("title")}
          </span>
          <span className="text-base md:text-lg lg:text-2xl font-bold text-royalBlue">
          {t("subTitle")}
          </span>
          <text className="text-sm lg:text-base break-keep">
          {t("text")}
          </text>
        </div>
      </div>
    </div>
  );
};

export default values;
