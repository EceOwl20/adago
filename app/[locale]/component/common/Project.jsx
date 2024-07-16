import React from "react";
import Image from "next/image";
import Link from "next/link"
import Villa3 from "@/public/images/villalar/villa3.jpeg";
import { useTranslations } from "next-intl";

const Project = () => {
  const t=useTranslations("Project");
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-1 lg:h-screen my-8 mx-3 gap-10">
      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row justify-center items-center w-3/4 lg:w-full bg-darkSeaBlue h-1/2 mt-7 p-3 gap-20">
          <div className="flex lg:w-6/12">
            <Image src={Villa3}
                    layout="responsive"
                    width={500}
                    height={300} />
          </div>
          <div className="flex flex-col lg:w-3/12 lg:flex-row items-center gap-10 justify-center">
            <div className="flex flex-col gap-2 lg:gap-6"><h2 className=" flex text-white font-semibold font-hurme text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
            {t("header")}
            </h2>
            <p className="flex text-white font-semibold font-sans text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
            {t("text")}
            </p></div>

            <Link
              href="/project/concept"

              className="flex bg-flameOrange rounded-md px-6 py-3"
            >
              <p className="flex text-white whitespace-nowrap font-semibold font-sans text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
              {t("button")}
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row justify-center items-center w-3/4 lg:w-full bg-darkSeaBlue h-full p-3 gap-6">
          <div className="flex">
            <Image src={Villa3} />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-10 justify-center">
            <div className="flex flex-col gap-2 lg:gap-6"><h2 className=" flex text-white font-semibold font-hurme text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
              Yonca Homes
            </h2>
            <p className="flex text-white font-semibold font-sans text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
              Lüks ve konforun bir arada sunulduğu bu özel villa, size ve
              ailenize huzurlu bir yaşam vadediyor. Detaylar için hemen
              iletişime geçin!
            </p></div>

            <Link
              href="/project/concept"

              className="flex bg-flameOrange rounded-md px-10 py-3"
            >
              <p className="flex text-white font-semibold font-sans text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
                Daha fazlası
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row justify-center items-center w-3/4 lg:w-full bg-darkSeaBlue h-full p-3 gap-6">
          <div className="flex">
            <Image src={Villa3} />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-10 justify-center">
            <div className="flex flex-col gap-2 lg:gap-6"><h2 className=" flex text-white font-semibold font-hurme text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
              Yonca Homes
            </h2>
            <p className="flex text-white font-semibold font-sans text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
              Lüks ve konforun bir arada sunulduğu bu özel villa, size ve
              ailenize huzurlu bir yaşam vadediyor. Detaylar için hemen
              iletişime geçin!
            </p></div>

            <Link
              href="/project/concept"

              className="flex bg-flameOrange rounded-md px-10 py-3"
            >
              <p className="flex text-white font-semibold font-sans text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
                Daha fazlası
              </p>
            </Link>
          </div>
        </div>
      </div> */}

      {/* ********************************* */}
      
      {/* <div className="relative flex justify-center">
        <div className="absolute inset-0 bg-white z-[999]"></div>
        <div className="flex flex-col items-center h-auto w-3/4 p-3 lg:p-6 gap-4 border">
          <div className="flex">
            <Image src={Villa3} />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-semibold font-hurme text-base md:text-lg lg:text-base xl:text-lg 2xl:text-[19px]">
              Yonca Homes
            </h2>
            <p className="font-semibold font-sans text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-[19px]">
              Lüks ve konforun bir arada sunulduğu bu özel villa, size ve
              ailenize huzurlu bir yaşam vadediyor. Detaylar için hemen
              iletişime geçin!
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="absolute inset-0 bg-white z-[999]"></div>
        <div className="flex flex-col items-center h-auto w-3/4 p-3 lg:p-6 gap-4 border">
          <div className="flex">
            <Image src={Villa3} />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-semibold font-hurme text-base md:text-lg lg:text-base xl:text-lg 2xl:text-[19px]">
              Yonca Homes
            </h2>
            <p className="font-semibold font-sans text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-[19px]">
              Lüks ve konforun bir arada sunulduğu bu özel villa, size ve
              ailenize huzurlu bir yaşam vadediyor. Detaylar için hemen
              iletişime geçin!
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center">
        <div className="absolute inset-0 bg-white z-[999]"></div>
        <div className="flex flex-col items-center h-auto w-3/4 p-3 lg:p-6 gap-4 border">
          <div className="flex">
            <Image src={Villa3} />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-semibold font-hurme text-base md:text-lg lg:text-base xl:text-lg 2xl:text-[19px]">
              Yonca Homes
            </h2>
            <p className="font-semibold font-sans text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-[19px]">
              Lüks ve konforun bir arada sunulduğu bu özel villa, size ve
              ailenize huzurlu bir yaşam vadediyor. Detaylar için hemen
              iletişime geçin!
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Project;
