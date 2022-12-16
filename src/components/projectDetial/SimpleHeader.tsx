import React from "react";

const SimpleHeader = () => {
  return (
    <div
      className=" h-20 bg-white border-t shadow-sm
    	shadow-black-500/60 px-6 gap-3  flex  justify-between items-center"
    >
      <div className=" gap-3 border rounded-md p-2 h-10 w-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          className=" text-gray-500 font-extrabold"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
      </div>
      <p className="text-base leading-6 font-medium font-inter text-gray-900">
        Back
      </p>
      <div className="inline-flex justify-end  flex-1">
        <div className=" w-28 text-center  ">
          <select className="border  bg-indigo-600 w-full text-white text-sm leading-5 font-medium outline-none   placeholder:mr-5 border-gray-300    rounded-md">
            <option className="">Action</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SimpleHeader;
