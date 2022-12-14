import React from "react";
import tableArrow from "../../assets/images/table-arrow.svg";
const ProjectTable = () => {
  const tableData = [
    {
      id: 1,
      project: "DUpoint engagment ",
      type: "TM",
      account: "CRM",
      geo: "EUROP",
      countary: "USA-india",
      prm: "Name",
      pm: "Name",
      accManager: "jabco jones",
      remaingBudget: "50%",
    },
    {
      id: 1,
      project: "DUpoint engagment ",
      type: "TM",
      account: "CRM",
      geo: "EUROP",
      countary: "USA-india",
      prm: "Name",
      pm: "Name",
      accManager: "jabco jones",
      remaingBudget: "50%",
    },
    {
      id: 1,
      project: "DUpoint engagment ",
      type: "TM",
      account: "CRM",
      geo: "EUROP",
      countary: "USA-india",
      prm: "Name",
      pm: "Name",
      accManager: "jabco jones",
      remaingBudget: "50%",
    },
    {
      id: 1,
      project: "DUpoint engagment ",
      type: "TM",
      account: "CRM",
      geo: "EUROP",
      countary: "USA-india",
      prm: "Name",
      pm: "Name",
      accManager: "jabco jones",
      remaingBudget: "50%",
    },
    {
      id: 1,
      project: "DUpoint engagment ",
      type: "TM",
      account: "CRM",
      geo: "EUROP",
      countary: "USA-india",
      prm: "Name",
      pm: "Name",
      accManager: "jabco jones",
      remaingBudget: "50%",
    },
    {
      id: 1,
      project: "DUpoint engagment ",
      type: "TM",
      account: "CRM",
      geo: "EUROP",
      countary: "USA-india",
      prm: "Name",
      pm: "Name",
      accManager: "jabco jones",
      remaingBudget: "50%",
    },
  ];
  return (
    <div className="mt-10">
      <table className="table-fixed w-full overflow-hidden rounded-lg">
        <thead className="text-left border bg-gray-50">
          <tr>
            <th className="py-3 px-6 font-inter text-xs leading-4 font-medium tracking-wider text-gray-500"><div className="flex gap-1 items-end">PROJECT <img src={tableArrow} /></div></th>
            <th className="py-3 px-6 w-20 font-inter text-xs leading-4 font-medium tracking-wider text-gray-500">TYPE</th>
            <th className="py-3 px-6 font-inter text-xs leading-4 font-medium tracking-wider text-gray-500">ACCOUNT</th>
            <th className="py-3 px-6 font-inter text-xs leading-4 font-medium tracking-wider text-gray-500">GEO</th>
            <th className="py-3 px-6 font-inter text-xs leading-4 font-medium tracking-wider text-gray-500">COUNTARY</th>
            <th className="py-3 px-6 font-inter text-xs leading-4 font-medium tracking-wider text-gray-500">PRM</th>
            <th className="py-3 px-6 font-inter text-xs leading-4 font-medium tracking-wider text-gray-500">PM</th>
            <th className="py-3 px-6 font-inter text-xs leading-4 font-medium tracking-wider text-gray-500">ACC MANAGER</th>
            <th className="py-3 px-6 font-inter text-xs leading-4 font-medium tracking-wider text-gray-500">REMAINING BUDGET</th>    
          </tr>
        </thead>
        <tbody className="border overflow-hidden rounded-lg ">
          {tableData.map((item) => (
            <tr className="border text-lightGrayColor ">
              <td className=" bg-white font-inter text-sm leading-5 font-normal text-gray-500 py-3 px-6">
              <div className="flex gap-2 items-center"> 
                <a className="text-indigo-600">{item.project}</a> 
                <span className="h-1 w-1  bg-red-700 rounded-full  inline-block" ></span>
              </div>

                
                {/* <div className="bg-green-600 absolute top-[-10px] right-0">
                  <span>toop tips</span>
                </div> */}
              </td>
              <td className="bg-white text-center font-inter text-sm leading-5 font-normal text-gray-500 py-3 px-6">{item.type} </td>
              <td className="bg-white  font-inter text-sm leading-5 font-normal text-gray-500 py-3 px-6">
               <a  className="text-indigo-600"> {item.account}</a>
              </td>
              <td className="bg-white font-inter text-sm leading-5 font-normal text-gray-500 py-3 px-6 ">{item.geo} </td>
              <td className="bg-white font-inter text-sm leading-5 font-normal text-gray-500 py-3 px-6 ">{item.countary} </td>
              <td className="bg-white font-inter text-sm leading-5 font-normal text-gray-500 py-3 px-6 ">{item.prm} </td>
              <td className="bg-white font-inter text-sm leading-5 font-normal text-gray-500 py-3 px-6 ">{item.pm} </td>
              <td className="bg-white font-inter text-sm leading-5 font-normal text-gray-500 py-3 px-6 ">{item.accManager} </td>
              <td className="bg-white text-center font-inter text-sm leading-5 font-normal text-gray-500 py-3 px-6 ">
                {item.remaingBudget}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
