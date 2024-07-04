import React from "react";

const Concept = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="flex relatíve w-full justify-center">
        <div
          className="flex  w-full bg-cover bg-center"
          style={{ backgroundImage: `url('/images/villalar/villa1.jpeg')` }}
        >
          <div className=" absolute inset-0 bg-black/30 w-full flex items-center gap-10 p-5 z-10"></div>
            <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center text-center justify-center w-1/2">
            <h1 className="text-white font-hurme text-2xl md:text-2xl uppercase z-50  items-center">
              konsept
            </h1>
            <p className="flex items-center w-full text-white text-center z-50">
              Adago, modern yaşamın tüm gereksinimlerini karşılayan ve konforu
              ön planda tutan benzersiz bir konut projesidir.
            </p>
            </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Concept;
