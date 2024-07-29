import React from "react";
import Image from "next/image";
import Link from "next/link"
import Villa3 from "@/public/images/villalar/villa3.jpeg";
//import { useTranslations } from "next-intl";

const Project = ({data}) => {
  //const t=useTranslations("Project");
  const { header, text, image, button } = data;
  const imageUrl = "http://127.0.0.1:1337" + image.url;
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-1 lg:h-screen my-8 mx-3 gap-10">
      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row justify-center items-center w-3/4 lg:w-full bg-darkSeaBlue h-1/2 mt-7 p-3 gap-20">
          <div className="flex lg:w-6/12">
            <Image src={imageUrl}
                    layout="responsive"
                    alt="project"
                    width={1600}
                    height={900} />
          </div>
          <div className="flex flex-col lg:w-3/12 lg:flex-row items-center gap-10 justify-center">
            <div className="flex flex-col gap-2 lg:gap-6"><h2 className=" flex text-white font-semibold font-hurme text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
            {header}
            </h2>
            <p className="flex text-white font-semibold font-sans text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
            {text}
            </p></div>

            <Link
              href="/project/concept"

              className="flex bg-flameOrange rounded-md px-6 py-3"
            >
              <p className="flex text-white whitespace-nowrap font-semibold font-sans text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm">
              {button.text}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
