import React from "react";
import logo from "../../assets/images/logo.svg";
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
    <div className=" h-16 bg-white shadow-sm	shadow-black-500/60 px-10  flex  justify-between items-center">
      <div className="flex space-x-2 items-center">
        <img src={logo} alt="logo" className=" " /> 
        <ul className="flex h-16 font-medium	 flex-1 ml-10 text-sm font-inter text-lightGrayColor  space-x-6 ">
          <li className="ml-10 flex items-center cursor-pointer   hover:text-blackColor border-b-2 border-transparent hover:border-blueColor">
           <a href="#">Dashboard</a> 
          </li>
          <li className="ml-10 flex items-center cursor-pointer   hover:text-blackColor border-b-2 border-transparent hover:border-blueColor">
            Utilization
          </li>

          <li className="ml-10 flex items-center cursor-pointer   hover:text-blackColor border-b-2 border-transparent hover:border-blueColor">
            People
          </li>
          <li className="ml-10 flex items-center cursor-pointer   hover:text-blackColor border-b-2 border-transparent hover:border-blueColor">
            Projects
          </li>
          <li className="ml-10 flex items-center cursor-pointer   hover:text-blackColor border-b-2 border-transparent hover:border-blueColor">
            Revenue
          </li>
          <li className="ml-10 flex items-center cursor-pointer   hover:text-blackColor border-b-2 border-transparent hover:border-blueColor">
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
