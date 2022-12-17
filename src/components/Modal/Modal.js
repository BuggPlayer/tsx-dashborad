import React, { useState } from "react";
import "./Modal.css";
import pmAvatar from "../../assets/images/pmAvatar.svg";
import deleteIcon from "../../assets/images/delete.svg";

const Modal = (props) => {
  const [noOfRows, setNoOfRows] = useState(1);
  return (
    <>
      {props.open && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content bg-white rounded-lg overflow-hidden">
            <div className="px-8 py-7 flex items-center justify-between ">
              <h2 className="text-lg leading-6 font-semibold font-inter text-gray-900">
                Manage Team
              </h2>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6 4.58579L10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L7.41421 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.41421L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                  fill="#6B7280"
                />
              </svg>
            </div>
            <div className="px-8 py-3.5   bg-gray-50 border-t border-b">
              <p className="text-sm leading-5 font-medium font-inter text-gray-900">
                Aegon Life
              </p>
              <p className="text-sm leading-5 font-normal font-inter text-gray-500">
                Placeholder
              </p>
            </div>

            <div className="p-8">
              <div className="flex gap-3 items-center justify-between">
                <div className="detail flex-col">
                  <label class="text-sm text-gray-700 leading-5 font-medium">
                    Name
                  </label>
                  <div className="  flex items-start border w-full  outline-none text-left border-gray-300 rounded-md p-2 gap-4">
                    <img src={pmAvatar} alt="pmAvatar" />
                    <div>
                      <p className="text-base leading-6 font-semibold text-gray-900 font-inter">
                        Blake Alexander
                      </p>
                      <p className="text-sm leading-5 font-medium text-gray-700  font-inter">
                        Project Manager
                      </p>
                    </div>
                  </div>
                </div>
                <div className="date flex-col">
                  <label class="text-sm text-gray-700 leading-5 font-medium">
                    Start Date
                  </label>
                  <div className="flex">
                    <input
                      placeholder=""
                      type="date"
                      class="border w-full  outline-none text-left placeholder:mr-3 border-gray-300 p-1 h-16 placeholder-opacity-0 rounded-md text-sm leading-5 font-normal"
                    />
                  </div>
                </div>
                <div className="date flex-col">
                  <label class="text-sm text-gray-700 leading-5 font-medium">
                    End Date
                  </label>
                  <div className="flex">
                    <input
                      placeholder=""
                      type="date"
                      class="border w-full  outline-none text-left placeholder:mr-3 border-gray-300 p-1 h-16 rounded-md placeholder-opacity-0 text-sm leading-5 font-normal"
                    />
                  </div>
                </div>
                <div className="estimation flex-col">
                  <label class="text-sm text-gray-700 leading-5 font-medium">
                    Allocation (%)
                  </label>
                  <div className="flex">
                    <input
                      placeholder=""
                      class="border w-full  outline-none text-left placeholder:mr-3 border-gray-300 p-2 rounded-md h-16 placeholder-opacity-0 text-sm leading-5 font-normal text-right"
                    />
                  </div>
                </div>
                <div className="delete flex-col">
                  <label class="text-sm text-gray-700 leading-5 font-medium">
                    &nbsp;
                  </label>
                  <img src={deleteIcon} alt="delete" />
                </div>
              </div>

              <button
                type="button"
                className="border bg-white gap-2 flex my-6 px-4 py-2.5 shadow-sm rounded-md"
                onClick={() => setNoOfRows(noOfRows + 1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5 text-gray-500 "
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="text-sm leading-5 font-medium font-inter text-gray-700">
                  Add Person
                </p>
              </button>
            </div>

            <div className=" flex justify-end gap-3  p-8 border-t">
              <button
                type="button"
                className="border bg-white  px-4 py-2.5 shadow-sm rounded-md"
                onClick={() => setNoOfRows(noOfRows + 1)}
              >
                <p className="text-sm leading-5 font-medium font-inter text-gray-700">
                  Cancel
                </p>
              </button>
              <button
                type="button"
                className="border bg-indigo-600  px-4 py-2.5 shadow-sm rounded-md"
                onClick={() => setNoOfRows(noOfRows + 1)}
              >
                <p className="text-sm leading-5 font-medium font-inter text-white">
                  Save
                </p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
