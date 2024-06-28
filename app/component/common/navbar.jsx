import React from "react";

const navbar = () => {
  return (
    <div className="flex w-full justify-center bg-transparent">
      <div className="flex w-4/5 ">
        <div className="flex w-1/6">logo</div>
        <div className="flex w-1/6">
          <button>KURUMSAL</button>
        </div>
        <div className="flex w-1/6">
          <button>PROJELER</button>
        </div>
        <div className="flex w-1/6">
          <button>VİLLALAR</button>
        </div>
        <div className="flex w-1/6">
          <button>İLETİŞİM</button>
        </div>
        <div className="flex w-1/6">dil seçeneği</div>
      </div>
    </div>
  );
};

export default navbar;
