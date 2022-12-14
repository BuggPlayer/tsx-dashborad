import React from "react";
import pmAvatar from "../../assets/images/pmAvatar.svg";
const ProjectManagmenCard = () => {
  return (
    <div className="border-t border-b py-6 ">
      <h1 className="text-lg leading-6 font-semibold font-inter">
        Project Management
      </h1>

      <div className="py-5">
        <div className="  flex items-start  gap-4">
          <img src={pmAvatar} alt="pmAvatar"  className="py-2"/>
          <div className="py-2">
            <p className="text-base leading-6 font-semibold text-gray-900 font-inter">
              Blake Alexander
            </p>
            <p className="text-sm leading-5 font-medium text-gray-700  font-inter">
              Project Manager
            </p>
            <p className="text-sm leading-5 font-medium  text-gray-500  font-inter">
              claud@kellton.com
            </p>
          </div>
        </div>
        <div className="border-b border-t  flex items-start  gap-4">
          <img src={pmAvatar} alt="pmAvatar" className="py-3" />
          <div className="py-4">
            <p className="text-base leading-6 font-semibold text-gray-900 font-inter">
              Blake Alexander
            </p>
            <p className="text-sm leading-5 font-medium text-gray-700  font-inter">
              Project Manager
            </p>
            <p className="text-sm leading-5 font-medium  text-gray-500  font-inter">
              claud@kellton.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagmenCard;
