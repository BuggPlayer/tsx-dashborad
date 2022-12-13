import React from "react";
import CardwithIcon from "../components/Project/CardwithIcon";
import DateQuater from "../components/Project/DateQuater";
import Header from "../components/Project/Header";
import ProjectTable from "../components/Project/ProjectTable";
import TitleCard from "../components/Project/TitleCard";

const Project = () => {
  return (
    <div className="">
      <Header />
      <div className="px-10 py-4">
        <TitleCard />
        <DateQuater />
        <div className="mt-5 flex justify-between">
          {[1, 2, 3, 4].map((item) => (
            <CardwithIcon />
          ))}
        </div>

        <div className="flex space-x-20 mt-16">
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

        <ProjectTable />
      </div>
    </div>
  );
};

export default Project;
