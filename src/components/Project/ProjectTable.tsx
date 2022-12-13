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
          <tr >
            <th className="p-2">PROJECT</th>
            <th className="text-center">TYPE</th>
            <th>ACCOUNT</th>
            <th>GEO</th>
            <th>COUNTARY</th>
            <th>PRM</th>
            <th>PM</th>
            <th>ACC MANAGER</th>
            <th className="text-center">REMAINING BUDGET</th>
          </tr>
        </thead>
        <tbody className="border ">
          {/* //project */}

          {tableData.map((item) => (
            <tr className="border  text-lightGrayColor ">
              <td className="p-1">{item.project} </td>
              <td className="text-center">{item.type} </td>
              <td className="">{item.account} </td>
              <td>{item.geo} </td>
              <td>{item.countary} </td>
              <td>{item.prm} </td>
              <td>{item.pm} </td>
              <td>{item.accManager} </td>
              <td className="text-center">{item.remaingBudget} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
