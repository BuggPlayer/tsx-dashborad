import React from "react";
import calender from "../assets/images/Calender.svg";
import ProjectManagmenCard from "../components/projectDetial/ProjectManagmenCard";
import TechCard from "../components/projectDetial/TechCard";
// import { BriefcaseIcon } from "@heroicons/react/24/outline";
const ProjectDetailsPage = () => {
  return (
    <>
      <aside className="bg-white border w-1/4">
        <div className="p-6">
          <div className=" flex justify-between">
            <div className=" bg-green-100 w-2/8 py-0.5 px-2.5 rounded    text-center">
              <p className=" font-inter font-medium capitalize text-xs flex items-center text-green-800">
                In progress
              </p>
            </div>

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

          <h1 className="text-2xl leading-8 text-gray-900 font-inter mt-3 font-bold">
            Aegon Life
          </h1>
          <div className=" flex items-center ">
            {/* <img src={calender} className="w-4 h-4 text-gray-400  " /> */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.33333 4.66667V2M10.6667 4.66667V2M4.66667 7.33333H11.3333M3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V4.66667C14 3.93029 13.403 3.33333 12.6667 3.33333H3.33333C2.59695 3.33333 2 3.93029 2 4.66667V12.6667C2 13.403 2.59695 14 3.33333 14Z"
                stroke="#9CA3AF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="text-xs leading-5 font-normal ml-1.5 text-gray-500 font-inter">
              End date: 30 sept 2022(10 weeks left)
            </span>{" "}
          </div>
          <div className="mt-4 border-t mb-4  ">
            <div className="mt-8 flex items-center   ">
              <div className="p-1 w-9 h-9 bg-gray-50 rounded flex items-center justify-center">
                <svg
                  className="text-gray-500"
                  width="20"
                  height="22"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.33333 4.66667V2M10.6667 4.66667V2M4.66667 7.33333H11.3333M3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V4.66667C14 3.93029 13.403 3.33333 12.6667 3.33333H3.33333C2.59695 3.33333 2 3.93029 2 4.66667V12.6667C2 13.403 2.59695 14 3.33333 14Z"
                    stroke="#9CA3AF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h1 className="text-sm leading-5 font-medium font-inter text-gray-600 ml-2">
                Time & Material
              </h1>
            </div>

            <div className="mt-2 flex items-center ">
              <div className="p-1 w-9 h-9 bg-gray-50 rounded flex items-center justify-center">
                <svg
                  className="text-gray-500"
                  width="20"
                  height="22"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.33333 4.66667V2M10.6667 4.66667V2M4.66667 7.33333H11.3333M3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V4.66667C14 3.93029 13.403 3.33333 12.6667 3.33333H3.33333C2.59695 3.33333 2 3.93029 2 4.66667V12.6667C2 13.403 2.59695 14 3.33333 14Z"
                    stroke="#9CA3AF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h1 className="text-sm leading-5 font-medium font-inter text-gray-600 ml-2">
                India
              </h1>
            </div>

            <div className="mt-2 flex items-center ">
              <div className="p-1 w-9 h-9 bg-gray-50 rounded flex items-center justify-center">
                <svg
                  className="text-gray-500"
                  width="20"
                  height="22"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.33333 4.66667V2M10.6667 4.66667V2M4.66667 7.33333H11.3333M3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V4.66667C14 3.93029 13.403 3.33333 12.6667 3.33333H3.33333C2.59695 3.33333 2 3.93029 2 4.66667V12.6667C2 13.403 2.59695 14 3.33333 14Z"
                    stroke="#9CA3AF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h1 className="text-sm leading-5 font-medium font-inter text-gray-600 ml-2">
                Gurgaon
              </h1>
            </div>

            <div className="mt-2 flex items-center ">
              <div className="p-1 w-9 h-9 bg-gray-50 rounded flex items-center justify-center">
                <svg
                  className="text-gray-500"
                  width="20"
                  height="22"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.33333 4.66667V2M10.6667 4.66667V2M4.66667 7.33333H11.3333M3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V4.66667C14 3.93029 13.403 3.33333 12.6667 3.33333H3.33333C2.59695 3.33333 2 3.93029 2 4.66667V12.6667C2 13.403 2.59695 14 3.33333 14Z"
                    stroke="#9CA3AF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h1 className="text-sm leading-5 font-medium font-inter text-gray-600 ml-2">
                Industry
              </h1>
            </div>
          </div>

          <ProjectManagmenCard />
         
        </div>
        <TechCard />
      </aside>
    </>
  );
};

export default ProjectDetailsPage;
