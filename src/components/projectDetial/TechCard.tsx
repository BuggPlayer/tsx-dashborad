import React from "react";

const TechCard = () => {
  return (
    <div className="border ">
      <div className=" p-6  flex justify-between items-center">
        <h1 className="text-lg leading-6 font-semibold font-inter text-gray-900">
          Technology
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-gray-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </div>
      <div className="px-6 mb-10 space-x-2">
        <div className=" bg-green-100 w-2/8 py-0.5 px-2.5 rounded inline-block   text-center">
          <p className=" font-inter font-medium capitalize text-xs flex items-center text-green-800">
            In progress
          </p>
        </div>

        <div className=" bg-green-100 w-2/8 py-0.5 px-2.5 rounded inline-block   text-center">
          <p className=" font-inter font-medium capitalize text-xs flex items-center text-green-800">
            TM
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
