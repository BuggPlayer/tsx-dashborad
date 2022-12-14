import React from "react";
import CardwithIcon from "../components/Project/CardwithIcon";
import DateQuater from "../components/Project/DateQuater";
import Header from "../components/Project/Header";
import ProjectTable from "../components/Project/ProjectTable";
import TitleCard from "../components/Project/TitleCard";
import searchIcon from "../assets/images/Search.svg";
const Project = () => {
  return (
    <div className="">
      <Header />
      <div className="px-10 py-8 bg-gray-50">
        <TitleCard />
        <DateQuater />
        <div className="mt-8  gap-6 flex justify-between">
          {[1, 2, 3, 4].map((item) => (
            <CardwithIcon />
          ))}
        </div>

        <div className="flex gap-8 mt-16">
          <button
            className="bg-blue-100 flex items-center 
          justify-center space-x-2 
          font-medium 
          p-4
          text-blueColor
            rounded-md"
          >
            <p className="font-medium font-inter text-lg">ALL</p>
          </button>

          {[
            { name: "External Projects " },
            { name: "On-Site Projects " },
            { name: "Internal Projects " },
            { name: "Beanch Inititives " },
          ].map((item) => (
            <button
              className=" hover:bg-blue-100 flex items-center 
            justify-center space-x-2 
           font-medium 
          
           p-4
           hover:text-blueColor
          rounded-md"
            >
              <p className="font-medium font-inter text-lg">{item.name}</p>
            </button>
          ))}
        </div>
        <div className="mt-10">
          <div className="flex  gap-3">
          <div className="w-1/5">
            <label className="text-sm mb-1 block leading-5 font-medium">Search for Project</label>
          
        <div className="flex relative ">
          <img
            src={searchIcon}
            alt=""
            className="absolute top-0 bottom-0 left-4 w-5 h-5 m-auto"
          />
          <input
            placeholder=""
            className="border w-full  outline-none text-left pl-12 placeholder:mr-3 border-gray-300   p-2 rounded-md"
          />
        </div>  
            </div>   
            <div className="w-1/6">
            <label className="text-sm mb-1 block leading-5 font-medium">Client</label>
            <select className="border w-full  outline-none text-left text-base leading-6 text-gray-500 font-normal placeholder:mr-3 border-gray-300   p-2 rounded-md">
              <option>All</option>
            </select>
            </div>
            <div className="w-1/6">
            <label className="text-sm mb-1 block leading-5 font-medium">Geo</label>
            <select className="border w-full  outline-none text-left text-base leading-6 text-gray-500 font-normal placeholder:mr-3 border-gray-300   p-2 rounded-md">
              <option>All</option>
            </select>
            </div>
            <div className="w-1/6">
            <label className="text-sm mb-1 block leading-5 font-medium">Practice</label>
            <select className="border w-full  outline-none text-left text-base leading-6 text-gray-500 font-normal placeholder:mr-3 border-gray-300   p-2 rounded-md">
              <option>All</option>
            </select>
            </div>
            <div className="w-1/6">
            <label className="text-sm mb-1 block leading-5 font-medium">Industry</label>
            <select className="border w-full  outline-none text-left text-base leading-6 text-gray-500 font-normal placeholder:mr-3 border-gray-300   p-2 rounded-md">
              <option>All</option>
            </select>
            </div>   
            <div className="w-1/12">
            <label className="text-sm mb-1 block leading-5 font-medium">&nbsp;</label>
              
              <button className="text-base leading-6 text-gray-500 rounded-md border border-solid border-gray-300 font-normal w-full p-2">More Filters</button>
            </div>
          </div>
        </div>
        <ProjectTable />
      </div>
    </div>
  );
};

export default Project;
