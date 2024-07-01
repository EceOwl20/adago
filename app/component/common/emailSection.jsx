import React from "react";

const emailSection = () => {
  return (

    <div className='flex  justify-center '>
      <div className='flex flex-col gap-[20px] p-[30px] justify-center items-start h-[500px] w-5/6 xl:w-1/2 bg-darkSeaBlue rounded-md font-hurme'>
      <span className="text-flameOrange text-sm md:text-xl lg:text-2xl  font-semibold">Contact Us</span>
        <div className='flex gap-[20px] justify-center items-center w-full'>
            <input

            type="text"
            placeholder="Name"
            className="border-[1px] text-sm lg:text-lg border-haki rounded-sm w-1/2 py-[4px]"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-[1px] text-sm lg:text-lg border-haki rounded-sm w-1/2 py-[4px]"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="border-[1px] text-sm lg:text-lg border-haki rounded-sm w-full py-[4px]"
        />
        <textarea
          type="text"
          placeholder="Message"
          className="border-[1px] border-haki rounded-sm w-full py-[4px] h-1/3"
        />
        <button className="bg-flameOrange py-[10px] px-[30px] text-white text-sm lg:text-lg rounded-md">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default emailSection;
