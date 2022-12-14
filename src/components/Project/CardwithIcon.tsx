import React from "react";
import {
  BanknotesIcon,
  BriefcaseIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const CardwithIcon = () => {
  return (
    <>
      <div className="bg-white w-80  shadow-lg  flex items-center space-x-5 px-4 py-5  rounded-lg">
        <div className="bg-blueColor  items-center inline-block p-2 rounded-md">
          <BriefcaseIcon className="text-white w-8 h-8" />
        </div>

        <div className=" ">
          <span className="font-inter   text-gray-500 text-sm leading-5 font-medium">
            Total Products
          </span>

          <div className="flex space-x-2  ">
            <h2 className="font-inter   text-gray-900 text-2xl leading-8 font-semibold">599</h2>
            <div className="flex place-items-end text-greenColor ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
                />
              </svg>

              <span className="text-sm leading-5 text-green-600 font-semibold">30%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardwithIcon;
