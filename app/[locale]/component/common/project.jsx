import React from "react";
import Image from "next/image";
import Villa3 from "@/public/images/villalar/villa3.jpeg";

const project = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:h-screen p-3">
      <div className="flex justify-center items">
        <div className="flex flex-col justify-center items-center h-auto w-3/4 bg-darkSeaBlue lg:h-1/2 p-3 lg:p-6 gap-6 border">
          <div className="flex">
            <Image src={Villa3} />
          </div>
          <div className="flex flex-col items-center gap-2 justify-center">
            <h2 className="text-white font-semibold font-hurme text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Yonca Homes
            </h2>
            <p className="pl-9 pr-2 text-white font-semibold font-sans text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              Lüks ve konforun bir arada sunulduğu bu özel villa, size ve
              ailenize huzurlu bir yaşam vadediyor. Detaylar için hemen
              iletişime geçin!
            </p>
            <button className="flex bg-flameOrange rounded-md px-10 py-3">
                <p className="flex text-white font-semibold font-sans text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-[19px]">Daha fazlasi</p>
            </button>
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
    </div>
  );
};

export default project;