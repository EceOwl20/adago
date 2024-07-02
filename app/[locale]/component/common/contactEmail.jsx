import React from "react";
import { LuPhone } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
import { useTranslations } from "next-intl";

const contactEmail = () => {
  const t=useTranslations("Contact")

  return (
    <div id="contact"  className="flex bg-darkSeaBlue mb-[140px] justify-center mt-[200px]">

      <div className="flex flex-col lg:flex-row justify-center items-center xl:w-3/5">
        <div className="flex flex-col gap-[20px] p-[30px] mx-[40px] justify-center items-start w-full xl:w-2/3 rounded-md font-hurme">
          <span className="text-flameOrange text-xl lg:text-2xl font-semibold">
          {t("title")}
          </span>
          <div className="flex flex-col xl:flex-row gap-[20px] justify-center items-center w-full">
            <input
              type="text"
              placeholder={t("name")}
              className="border-[1px] text-sm lg:text-lg border-haki rounded-sm w-full xl:w-1/2 py-[4px] xl:py-[6px]"
            />
            <input
              type="email"
              placeholder={t("email")}
              className="border-[1px] text-sm lg:text-lg border-haki rounded-sm w-full xl:w-1/2 py-[4px] xl:py-[6px]"
            />
          </div>
          <input
            type="text"
            placeholder={t("subject")}
            className="border-[1px] text-sm lg:text-lg border-haki rounded-sm w-full py-[4px] xl:py-[6px]"
          />
          <textarea
            type="text"
            placeholder={t("message")}
            className="border-[1px] text-sm lg:text-lg border-haki rounded-sm w-full h-[120px]"
          />
          <button className="bg-flameOrange py-[6px] lg:py-[12px] px-[10px] lg:px-[30px] mt-[10px] text-white text-sm lg:text-lg rounded-md">
          {t("send")}
          </button>
        </div>
        <div className="flex flex-col gap-[20px] p-4 font-hurme bg-darkSeaBlue items-start justify-center text-white rounded-md py-[10x] lg:py-[40px]  xl:w-1/3 ">
        <div className="flex gap-[20px] items-center justify-center">
          <LuPhone size={24} />
          <div className="flex flex-col gap-[5px]">
            <text className="text-lg font-semibold">{t("phone")}</text>
            <span className="text-base font-light">+{t("phoneText")}</span>
          </div>
        </div>
        <div className="flex gap-[20px] items-center justify-center">
          <LuMail size={24} />
          <div className="flex flex-col gap-[5px]">
            <text className="text-lg font-semibold">{t("email")}</text>
            <span className="text-base font-light">{t("emailText")}</span>
          </div>
        </div>
        <div className="flex gap-[20px] items-center justify-center ">
          <LuMapPin size={24} />
          <div className="flex flex-col gap-[5px]">
            <text className="text-lg font-semibold">{t("location")}</text>
            <span className="text-base font-light">
            {t("locationText")}
            </span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default contactEmail;
