import React from "react";

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
        <thead className="text-left border bg-gray-300">
          <tr>
            <th className="p-2 font-inter font-medium text-sm">PROJECT</th>
            <th className="text-center font-inter font-medium text-sm">TYPE</th>
            <th className="font-inter font-medium text-sm">ACCOUNT</th>
            <th className="font-inter font-medium text-sm">GEO</th>
            <th className="font-inter font-medium text-sm">COUNTARY</th>
            <th className="font-inter font-medium text-sm">PRM</th>
            <th className="font-inter font-medium text-sm">PM</th>
            <th className="font-inter font-medium text-sm">ACC MANAGER</th>
            <th className="text-center font-inter font-medium text-sm">
              REMAINING BUDGET
            </th>
          </tr>
        </thead>
        <tbody className="border overflow-hidden rounded-lg ">
          {tableData.map((item) => (
            <tr className="border text-lightGrayColor ">
              <td className="p-1 flex relative items-center  text-blueColor font-inter text-sm ">
                {item.project}

                <div className="h-1 w-1  bg-red-700 rounded-full ml-2" />
                {/* <div className="bg-green-600 absolute top-[-10px] right-0">
                  <span>toop tips</span>
                </div> */}
              </td>
              <td className="text-center font-inter text-sm ">{item.type} </td>
              <td className="text-blueColor font-inter text-sm ">
                {item.account}
              </td>
              <td className="font-inter text-sm ">{item.geo} </td>
              <td className="font-inter text-sm ">{item.countary} </td>
              <td className="font-inter text-sm ">{item.prm} </td>
              <td className="font-inter text-sm ">{item.pm} </td>
              <td className="font-inter text-sm ">{item.accManager} </td>
              <td className="text-center font-inter text-sm ">
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
