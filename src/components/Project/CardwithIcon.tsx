import React from "react";
import {
  BanknotesIcon,
  BriefcaseIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const CardwithIcon = () => {
  return (
    <>
      <div className="bg-white w-80  shadow-lg  flex items-center space-x-6 p-4   rounded-lg">
        <div className="bg-blueColor  items-center inline-block p-2 rounded-md">
          <BriefcaseIcon className="text-white w-8 h-8" />
        </div>

        <div className=" ">
          <span className="font-inter font-medium text-lightGrayColor">
            Total Products
          </span>

          <div className="flex space-x-2  ">
            <h2 className="font-inter font-bold text-2xl text-black">599</h2>
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

              <span className="font-bold">30%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardwithIcon;
