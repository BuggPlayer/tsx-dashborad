import React from "react";
// import { Link } from "react-router-dom";
import invocieicon from "../../assets/images/invoiceicon.svg";
import pmAvatar from "../../assets/images/pmAvatar.svg";

const RightsideComponent = () => {
  return (
    <div className="space-y-8  mt-6 w-60 ">
      <div className="bg-white rounded-lg   shadow-lg  ">
        <div className="p-5 ">
          <p className="font-inter text-base leading-6 text-gray-700 font-semibold">
            Quick Links
          </p>
          <p className="text-indigo-600 font-inter font-medium text-sm leading-5 underline  capitalize py-2 ">
            Issue Tracker
          </p>
          <p className="text-indigo-600 font-inter font-medium text-sm leading-5 underline  capitalize ">
            Resource Entry
          </p>
          <p className="text-indigo-600 font-inter font-medium text-sm leading-5 underline  capitalize py-2 ">
            Project Feedback
          </p>
          <div className="flex items-center gap-2   ">
            <p className="text-indigo-600 font-inter font-medium text-sm leading-5 underline  capitalize ">
              Invoices
            </p>
            <img src={invocieicon} alt="invocieicon" />
          </div>
        </div>
      </div>

      {/* ///2nd div */}
      <div className="bg-white rounded-lg   shadow-lg  ">
        <div className="py-7 ">
          <div className="flex justify-between items-center px-6  ">
            <p className="text-lg leading-6 font-semibold font-inter">
              Account Details
            </p>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.2677 1.73223L18.9748 1.02513V1.02513L18.2677 1.73223ZM4.5 19.0355V20.0355C4.76522 20.0355 5.01957 19.9301 5.20711 19.7426L4.5 19.0355ZM1 19.0355H0C0 19.5878 0.447715 20.0355 1 20.0355L1 19.0355ZM1 15.4644L0.292893 14.7573C0.105357 14.9448 0 15.1992 0 15.4644H1ZM15.4393 2.43934C16.0251 1.85355 16.9748 1.85355 17.5606 2.43934L18.9748 1.02513C17.608 -0.341709 15.3919 -0.341709 14.0251 1.02513L15.4393 2.43934ZM17.5606 2.43934C18.1464 3.02513 18.1464 3.97487 17.5606 4.56066L18.9748 5.97487C20.3417 4.60804 20.3417 2.39196 18.9748 1.02513L17.5606 2.43934ZM17.5606 4.56066L3.79289 18.3284L5.20711 19.7426L18.9748 5.97487L17.5606 4.56066ZM4.5 18.0355H1V20.0355H4.5V18.0355ZM14.0251 1.02513L0.292893 14.7573L1.70711 16.1715L15.4393 2.43934L14.0251 1.02513ZM0 15.4644V19.0355H2V15.4644H0ZM12.5251 3.93934L16.0606 7.47487L17.4748 6.06066L13.9393 2.52513L12.5251 3.93934Z"
                fill="#6B7280"
              />
            </svg>
          </div>

          <div className="py-7 px-6  ">
            <p className="text-base leading-6 font-semibold font-inter text-gray-900">
              Aegon
            </p>
            <p className=" text-sm leading-5 font-medium font-inter text-gray-700">
              Aegon
            </p>
            <p className="text-sm leading-5  font-medium font-inter text-gray-500">
              placeholder
            </p>
          </div>

          <h1 className="text-base leading-6 font-medium font-inter px-6 ">
            Main Contact
          </h1>

          {/* //avatar */}
          <div className="py-7  flex items-start px-6   gap-4">
            <img src={pmAvatar} alt="pmAvatar" className="py-3" />
            <div className="py-4">
              <p className="text-base leading-6 font-semibold text-gray-900 font-inter">
                Mary Doe
              </p>
              <p className="text-sm leading-5 font-medium text-gray-700  font-inter">
                CEO
              </p>
              <p className="text-sm leading-5 font-medium  text-gray-500  font-inter">
                hellen@aegon.com
              </p>
            </div>
          </div>

          <div className="border-t ">
            <div className=" p-6">
              <h1 className="text-base mb-6 leading-6 font-medium font-inter">
                Key Stakeholders
              </h1>
              {/* //avatar */}
              <div className="flex items-start   gap-4">
                <img src={pmAvatar} alt="pmAvatar" className="py-3" />
                <div className="py-4">
                  <p className="text-base leading-6 font-semibold text-gray-900 font-inter">
                    Claudia Martin
                  </p>
                  <p className="text-sm leading-5 font-medium text-gray-700  font-inter">
                    CFO
                  </p>
                  <p className="text-sm leading-5 font-medium  text-gray-500  font-inter">
                    claud@aegon.com
                  </p>
                </div>
              </div>
              {/* //avatar */}
              <div className="flex border-t border-b  items-start   gap-4">
                <img src={pmAvatar} alt="pmAvatar" className="py-3" />
                <div className="py-4">
                  <p className="text-base leading-6 font-semibold text-gray-900 font-inter">
                    Mary Doe
                  </p>
                  <p className="text-sm leading-5 font-medium text-gray-700  font-inter">
                    CEO
                  </p>
                  <p className="text-sm leading-5 font-medium  text-gray-500  font-inter">
                    hellen@aegon.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white p-6 mt-1 rounded-lg   shadow-lg">
        <div className="flex justify-between items-center  ">
          <p
            className="

            text-lg leading-6 font-semibold font-inter"
          >
            Note
          </p>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.2677 1.73223L18.9748 1.02513V1.02513L18.2677 1.73223ZM4.5 19.0355V20.0355C4.76522 20.0355 5.01957 19.9301 5.20711 19.7426L4.5 19.0355ZM1 19.0355H0C0 19.5878 0.447715 20.0355 1 20.0355L1 19.0355ZM1 15.4644L0.292893 14.7573C0.105357 14.9448 0 15.1992 0 15.4644H1ZM15.4393 2.43934C16.0251 1.85355 16.9748 1.85355 17.5606 2.43934L18.9748 1.02513C17.608 -0.341709 15.3919 -0.341709 14.0251 1.02513L15.4393 2.43934ZM17.5606 2.43934C18.1464 3.02513 18.1464 3.97487 17.5606 4.56066L18.9748 5.97487C20.3417 4.60804 20.3417 2.39196 18.9748 1.02513L17.5606 2.43934ZM17.5606 4.56066L3.79289 18.3284L5.20711 19.7426L18.9748 5.97487L17.5606 4.56066ZM4.5 18.0355H1V20.0355H4.5V18.0355ZM14.0251 1.02513L0.292893 14.7573L1.70711 16.1715L15.4393 2.43934L14.0251 1.02513ZM0 15.4644V19.0355H2V15.4644H0ZM12.5251 3.93934L16.0606 7.47487L17.4748 6.06066L13.9393 2.52513L12.5251 3.93934Z"
              fill="#6B7280"
            />
          </svg>
        </div>
        <p className="mt-7 font-inter text-sm leading-5 font-normal">
          Lorem ipsum et siam allern ast lahe coma ultime saper itsu.
        </p>
      </div>
    </div>
  );
};

export default RightsideComponent;
