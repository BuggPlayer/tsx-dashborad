import React from "react";
import {
  BanknotesIcon,
  BriefcaseIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const CardwithIcon = () => {
  return (
    <>
      <div className="bg-white w-full  shadow-lg  flex items-center space-x-5 px-4 py-5  rounded-lg">
        <div className="bg-blueColor  items-center inline-block p-2 rounded-md">
          <BriefcaseIcon className="text-white w-8 h-8" />
        </div>

        <div className=" ">
          <span className="font-inter   text-gray-500 text-sm leading-5 font-medium">
            Total Products
          </span>

          <div className="flex space-x-2 items-baseline ">
            <h2 className="font-inter   text-gray-900 text-2xl leading-8 font-semibold">599</h2>
            <div className="flex items-center text-greenColor ">
            <svg  width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.293153 5.70679C0.105447 5.51926 0 5.26495 0 4.99979C0 4.73462 0.105447 4.48031 0.293153 4.29279L4.29816 0.292787C4.48592 0.105316 4.74055 0 5.00604 0C5.27154 0 5.52617 0.105316 5.71393 0.292787L9.71894 4.29279C9.90132 4.48139 10.0022 4.73399 9.99996 4.99619C9.99768 5.25838 9.89238 5.5092 9.70674 5.6946C9.5211 5.88001 9.26997 5.98518 9.00745 5.98746C8.74492 5.98974 8.49201 5.88894 8.30317 5.70679L6.0073 3.41379V10.9998C6.0073 11.265 5.90181 11.5194 5.71404 11.7069C5.52627 11.8944 5.27159 11.9998 5.00604 11.9998C4.7405 11.9998 4.48582 11.8944 4.29805 11.7069C4.11028 11.5194 4.00479 11.265 4.00479 10.9998V3.41379L1.70892 5.70679C1.52116 5.89426 1.26653 5.99957 1.00104 5.99957C0.735542 5.99957 0.480915 5.89426 0.293153 5.70679Z" fill="#10B981"/>
</svg>


              <span className="text-sm ml-1 leading-5 text-green-600 font-semibold">30%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardwithIcon;
