import React, { FC } from "react";
import { FiPlus } from "react-icons/fi";
import { addbtnProps } from "../../Type/Type";

const Addbtn: FC<addbtnProps> = ({ openModal }): JSX.Element => {
  return (
    <div
      className=" bg-blueColor border-radius-6 text-white  font-medium"
      onClick={openModal}
    >
      <div className="flex gap-x-2  items-center justify-center py-3 hadow-l px-6">
        <FiPlus size={20} />
        <span className="font-inter font-medium leading-5 text-sm">
          {" "}
          NEW PRODUCT
        </span>
      </div>
    </div>
  );
};

export default Addbtn;
