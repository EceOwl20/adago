import React from "react";
import Image from "next/image";
import Villa6 from "@/public/images/villalar/villa6.jpeg";

const Concept = () => {
  return (
    <div className="flex w-full h-screen">
      <div
        className="flex flex-col w-full h-screen bg-black items-center justify-center gap-16"
        style={{
          backgroundImage: 'url("/images/villalar/villa1.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col w-8/12 xl:w-3/4 items-center justify-center gap-10 bg-black bg-opacity-50 backdrop-blur-md p-6 rounded-lg">
          <h1 className="text-white font-semibold font-hurme text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-[30px]">
            KONSEPT
          </h1>
          <p className="text-white font-semibold font-hurme text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-[18px] text-center">
            Adago, şehrin kalbinde yer alan ve modern yaşamın tüm ihtiyaçlarını
            karşılayan prestijli bir konut projesidir. Geniş ve ferah yaşam
            alanları, akıllı ev sistemleri, yeşil sosyal alanlar ve 7/24
            güvenlik hizmeti ile Adago, size hem konforlu hem de güvenli bir
            yaşam sunar. Merkezi konumu sayesinde her yere kolay ulaşım imkanı
            sağlayan Adago, aynı zamanda yatırım değeri yüksek bir projedir.
            Adago&apos;da hayat, hayal ettiğinizden daha güzel.
          </p>
        </div>
        <div className="flex-col  w-6/7 md:w-9/12 md:flex xl:w-6/12 xl:gap-10 justify-center items-center mt-10 bg-black bg-opacity-50 backdrop-blur-md p-6 rounded-lg">
          <div className="w-6/7 xl:w-5/12">
            <Image
              src={Villa6}
              alt="Villa"
              layout="responsive"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col  md:flex-col items-center gap-3 justify-center"> 
            <h1 className=" text-white font-semibold font-hurme text-sm md:text-sm lg:text-base xl:text-lg 2xl:text-[30px]">
              Adago: Modern ve Konforlu Yaşam Alanları
            </h1>
            <p className=" text-white font-semibold font-hurme text-xs md:text-sm lg:text-base xl:text-base 2xl:text-[18px] text-center">
              Adago, şehrin tam merkezinde konumlanan ve modern yaşamın tüm
              gereksinimlerini karşılayan seçkin bir konut projesidir. Ferah ve
              geniş daireler, ileri teknoloji akıllı ev sistemleri, yemyeşil
              sosyal alanlar ve 7/24 güvenlik ile Adago, size hem rahat hem de
              güvenli bir yaşam sunuyor. Merkezi konumu sayesinde ulaşım
              kolaylığı sağlayan Adago, aynı zamanda yüksek yatırım
              potansiyeline sahip. Adago&apos;da yaşam, beklentilerinizin ötesinde
              bir deneyim sunar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concept;
