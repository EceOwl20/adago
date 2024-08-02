import React from 'react';
import Link from "next/link";
import { useTranslations } from "next-intl";

const Menubar = () => {

  const t=useTranslations("Menubar");

  return (
    <div className='flex flex-row w-full sticky top-[62px] md:top-[72px] lg:top-[76px] text-white z-[9990]'>
      <div className='flex w-full shrink-0 bg-royalBlue overflow-y-auto shadow shadow-darkSeaBlue items-center justify-around p-2 sticky top-0'>
        <div className='flex text-[12px] lg:text-[16px] xl:text-[18px] font-montserrat font-semibold items-center gap-8 lg:gap-12 xl:gap-36'>
            <Link className="hover:bg-white hover:text-darkSeaBlue p-1 rounded-md" href={t("hrefConcept")}>{t("concept")}</Link>
            <Link className="hover:bg-white hover:text-darkSeaBlue p-1 rounded-md" href={t("hrefRooms")}>{t("rooms")}</Link>
            <Link className="hover:bg-white hover:text-darkSeaBlue p-1 rounded-md whitespace-nowrap" href={t("hrefFloor")} >{t("floor")}</Link>
            <Link className="hover:bg-white hover:text-darkSeaBlue p-1 rounded-md whitespace-nowrap" href={t("hrefLayout")} >{t("layout")}</Link>
        </div>
      </div>
    </div>
  )
}

export default Menubar
