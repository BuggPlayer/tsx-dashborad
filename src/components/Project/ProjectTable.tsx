import React from "react";
import tableArrow from "../../assets/images/table-arrow.svg";
import { Link } from "react-router-dom";
const ProjectTable = ({ rows, colums }: any) => {
  return (
    <div className="">
      <table className="table-fixed  overflow-hidden  rounded-lg">
        <thead className="text-left border bg-gray-50">
          {colums.map((col: any) => (
            <tr>
              <th className="py-3 px-6 font-inter text-xs leading-4 font-medium tracking-wider text-gray-500">
                <div className="flex gap-1 items-end">
                  {col.col1} <img src={tableArrow} />
                </div>
              </th>
              <th className="py-3 px-6 w-20 font-inter text-xs leading-4 font-medium tracking-wider text-gray-500">
                {col.col2}
              </th>
              <th className="py-3 px-6 font-inter text-xs leading-4 font-medium tracking-wider text-gray-500">
                {col.col3}
              </th>
              <th className="py-3 px-6 font-inter text-xs leading-4 font-medium tracking-wider text-gray-500">
                {col.col4}
              </th>
              <th className="py-3 px-6 font-inter text-xs leading-4 font-medium tracking-wider text-gray-500">
                {col.col5}
              </th>
              <th className="py-3 px-6 font-inter text-xs leading-4 font-medium tracking-wider text-gray-500">
                {col.col6}
              </th>
              <th className="py-3 px-6 font-inter text-xs leading-4 font-medium tracking-wider text-gray-500">
                {col.col7}
              </th>
              <th className="py-3 px-6 font-inter text-xs leading-4 font-medium tracking-wider text-gray-500">
                {col.col8}
              </th>
              <th className="py-3 px-6 font-inter text-xs leading-4 font-medium tracking-wider text-gray-500">
                {col.col9}
              </th>
            </tr>
          ))}
        </thead>
        <tbody className="border overflow-hidden rounded-lg ">
          {rows.map((item: any) => (
            <tr className="border text-lightGrayColor ">
              <td className=" bg-white font-inter text-sm leading-5 font-normal text-gray-500 py-3 px-6">
                <div className="flex gap-2 items-center">
                  <Link to="/details" className="text-indigo-600">
                    {item.project}
                  </Link>
                  <span className="h-1 w-1  bg-red-700 rounded-full  inline-block"></span>
                </div>
              </td>
              <td className="bg-white text-center font-inter text-sm leading-5 font-normal text-gray-500 py-3 px-6">
                {item.type}{" "}
              </td>
              <td className="bg-white  font-inter text-sm leading-5 font-normal text-gray-500 py-3 px-6">
                <a className="text-indigo-600"> {item.account}</a>
              </td>
              <td className="bg-white font-inter text-sm leading-5 font-normal text-gray-500 py-3 px-6 ">
                {item.geo}{" "}
              </td>
              <td className="bg-white font-inter text-sm leading-5 font-normal text-gray-500 py-3 px-6 ">
                {item.countary}{" "}
              </td>
              <td className="bg-white font-inter text-sm leading-5 font-normal text-gray-500 py-3 px-6 ">
                {item.prm}{" "}
              </td>
              <td className="bg-white font-inter text-sm leading-5 font-normal text-gray-500 py-3 px-6 ">
                {item.pm}{" "}
              </td>
              <td className="bg-white font-inter text-sm leading-5 font-normal text-gray-500 py-3 px-6 ">
                {item.accManager}{" "}
              </td>
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
