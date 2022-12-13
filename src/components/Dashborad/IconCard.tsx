import React from "react";
import { BsFillBagCheckFill, BsArrowUp } from "react-icons/bs";
const IconCard = () => {
  return (
    <>
      <div className="bg-white w-60 shadow-md mt-2 flex items-center space-x-6 p-4   rounded-lg">
        <div className="bg-blueColor  items-center inline-block p-4 rounded-xl">
          <BsFillBagCheckFill size={25} color="white" />
        </div>

        <div className=" ">
          <span className="font-inter font-medium text-lightGrayColor">
            Total Products
          </span>

          <div className="flex space-x-2  ">
            <h2 className="font-inter font-bold text-2xl text-black">599</h2>
            <div className="flex place-items-end text-greenColor ">
              <BsArrowUp style={{ fontSize: 20, fontWeight: "bold" }} />
              <span className="font-bold">30%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IconCard;

