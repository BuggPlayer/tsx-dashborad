import React, { useState }  from "react";
import ProjectTable from "../Project/ProjectTable";
import Modal from "../../components/Modal/Modal"

const CenterDetailComponent = () => {

  const [modal, setModal] = useState(false);

    const toogleModal =()=> {
        setModal(!modal)
    }
  const rowsData = [
    {
      id: 1,
      project: "Kristin Watson ",
      type: "Frontend developer",
      account: "40%",
    },
    {
      id: 1,
      project: "Kristin Watson ",
      type: "Frontend developer",
      account: "40%",
    },
    {
      id: 1,
      project: "Kristin Watson ",
      type: "Frontend developer",
      account: "40%",
    },
    {
      id: 1,
      project: "Kristin Watson ",
      type: "Frontend developer",
      account: "40%",
    },
    {
      id: 1,
      project: "Kristin Watson ",
      type: "Frontend developer",
      account: "40%",
    },
    {
      id: 1,
      project: "Kristin Watson ",
      type: "Frontend developer",
      account: "40%",
    },
    {
      id: 1,
      project: "Kristin Watson ",
      type: "Frontend developer",
      account: "40%",
    },
    // {
    //   id: 1,
    //   project: "Kristin Watson ",
    //   type: "Frontend developer",
    //   account: "40%",
    // },
    // {
    //   id: 1,
    //   project: "Kristin Watson ",
    //   type: "Frontend developer",
    //   account: "40%",
    // },
  ];
  const headernameData = [
    {
      col1: "NAME",
      col2: "TYPE",
      col3: "ALLOCATION",
    },
  ];

  return (
    <div className="bg-white  mt-6 rounded-lg shadow-lg">
      <div className="p-6  ">
        <div className="flex gap-6">
          <button
            className="
         
            bg-indigo-100
            flex 
            items-center 
           justify-center 
            rounded-md
            py-2 px-3"
          >
            <p className=" text-sm leading-5 font-medium font-inter text-indigo-700">
              Team
            </p>
          </button>

          {[
            { name: "Budget" },
            { name: "Plan " },
            { name: "Risk " },
            { name: "Escalations" },
          ].map((item) => (
            <button
              className="
      
           hover:bg-indigo-100
            flex 
            items-center 
           justify-center 
            rounded-md
            py-2 px-3"
            >
              <p className=" text-sm leading-5 font-medium font-inter text-gray-500  hover:text-indigo-700">
                {item.name}
              </p>
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mt-8 mb-8 ">
          <p className="text-base font-inter leading-6 font-bold">
            Team Members
          </p>

          <button className=" flex justify-center items-center gap-2.5 border shadow-sm rounded-md py-2.5 px-4 bg-white" onClick={toogleModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
            <p className="text-sm leading-5 font-medium font-inter">
              Manage Team
            </p>
          </button>
        </div>

        <ProjectTable rows={rowsData} colums={headernameData} />
      </div>
      <Modal open={modal}/>
    </div>
  );
};

export default CenterDetailComponent;
