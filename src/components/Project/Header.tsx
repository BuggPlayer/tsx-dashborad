import React from "react";
import logo from "../../assets/images/logo.svg";
import Avatar from "../../assets/images/Avatar.svg";
import bellIcon from "../../assets/images/bell.svg";
import searchIcon from "../../assets/images/Search.svg";
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
        <a href=""><img src={logo} alt="logo"/></a>
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
      </div>
      <div className="flex justify-end  items-center flex-1">
        <div className="flex relative mx-4">
          <img
            src={searchIcon}
            alt=""
            className="absolute top-0 bottom-0 left-4 w-5 h-5 m-auto"
          />
          <input
            placeholder=""
            className="border  outline-none text-left pl-12 placeholder:mr-3 border-gray-300 w-64 p-2 rounded-md"
          />
        </div>
      <div className="relative w-7 h-7 mr-4 flex items-center">
          <img src={bellIcon} alt="bellIcon" className="w-6 h-6" />
          <div className="absolute top-0 right-0 bg-red-500 rounded-full w-4 h-4 text-center">
            <p className="text-xs font-semibold	text-white">5</p>
          </div>
        </div>
        <div className="w-8 h-8 overflow-hidden rounded-full	">
        <img src={Avatar} alt="avatar"/>
        </div>
       
      </div>
    </div>
  );
};

export default Header;
