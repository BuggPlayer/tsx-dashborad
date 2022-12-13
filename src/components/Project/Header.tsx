import React from "react";
import logo from "../../assets/images/Vector.svg";
import Avatar from "../../assets/images/Avatar.svg";
import bellIcon from "../../assets/images/Bellicon.svg";
import searchIcon from "../../assets/images/searchIcon.svg";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import {
  BanknotesIcon,
  BriefcaseIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="border border-lightGrayColor bg-white shadow-lg px-10 py-4  flex  justify-between items-center">
      <div className="flex space-x-2 items-center">
        <img src={logo} alt="logo" className="inline-block" />
        <h1 className="text-textBlack font-inter font-bold text-2xl">
          KELLTON
        </h1>
        <ul className="flex  flex-1 ml-10 text-sm font-inter text-lightGrayColor  space-x-6 ">
          <li className="ml-10 cursor-pointer hover:text-blackColor hover:border-b-2 hover:border-blueColor">
            Dashboard
          </li>
          <li className="cursor-pointer  hover:border-b-2 hover:border-blueColor hover:text-blackColor">
            Utilization
          </li>

          <li className="cursor-pointer hover:text-blackColor  hover:border-b-2 hover:border-blueColor">
            People
          </li>
          <li className="cursor-pointer hover:text-blackColor hover:border-b-2 hover:border-blueColor">
            Projects
          </li>
          <li className="cursor-pointer hover:text-blackColor hover:border-b-2 hover:border-blueColor">
            Revenue
          </li>
          <li className="cursor-pointer hover:text-blackColor hover:border-b-2 hover:border-blueColor">
            Reports
          </li>
        </ul>
        {/* <div  className="w-10 h-1  bg-yellow-500" /> */}
      </div>
      <div className="flex justify-end  items-center flex-1 space-x-5">
        <div className="flex relative">
          <img
            src={searchIcon}
            alt=""
            className="absolute top-3 left-2 w-5 h-5"
          />
          <input
            placeholder=""
            className="border  outline-none text-center placeholder:mr-3 border-gray-300 w-64 p-2 rounded-md"
          />
        </div>
        <div className=" relative">
          <img src={bellIcon} alt="bellIcon" className="w-8 min-w-7 h-8" />
          <div className="absolute top-0 right-0 bg-red-500 rounded-full w-4 h-4 text-center">
            <p className="text-xs">5</p>
          </div>
        </div>
        <img src={Avatar} alt="avatar" className="w-10 h-10 object-contain" />
      </div>
    </div>
  );
};

export default Header;
