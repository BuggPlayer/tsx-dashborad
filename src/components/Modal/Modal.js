import React, { useState } from "react";
import "./Modal.css";
import pmAvatar from "../../assets/images/pmAvatar.svg";
import deleteIcon from "../../assets/images/delete.svg";

const Modal = (props) => {
    const [noOfRows, setNoOfRows] = useState(1);
    return(
    <>
{
   props.open &&

    <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content bg-white">
           <div className="header w-full">
            <h2>Manage Team</h2>
           </div>
                <div className="gray-300 header-tp">
                    <h3>Aegon Life</h3>
                    <p>Placeholder</p>
                </div>
            

            <div className="p-8">
                <div className="flex gap-3 items-center justify-between">
                    <div className="detail flex-col">
                        <label class="text-sm text-gray-700 leading-5 font-medium">Name</label>
                        <div className="  flex items-start border w-full  outline-none text-left border-gray-300 rounded-md p-2 gap-4">
                            <img src={pmAvatar} alt="pmAvatar"/>
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
                    <label class="text-sm text-gray-700 leading-5 font-medium">Start Date</label>
                        <div className="flex">
                            <input placeholder="" type="date" class="border w-full  outline-none text-left placeholder:mr-3 border-gray-300 p-1 h-16 placeholder-opacity-0 rounded-md text-sm leading-5 font-normal"/>
                        </div>
                    </div>
                    <div className="date flex-col">
                    <label class="text-sm text-gray-700 leading-5 font-medium">End Date</label>
                        <div className="flex">
                            <input placeholder="" type="date" class="border w-full  outline-none text-left placeholder:mr-3 border-gray-300 p-1 h-16 rounded-md placeholder-opacity-0 text-sm leading-5 font-normal"/>
                        </div>
                    </div>
                    <div className="estimation flex-col">
                    <label class="text-sm text-gray-700 leading-5 font-medium">Allocation (%)</label>
                        <div className="flex">
                            <input placeholder="" class="border w-full  outline-none text-left placeholder:mr-3 border-gray-300 p-2 rounded-md h-16 placeholder-opacity-0 text-sm leading-5 font-normal text-right"/>
                        </div>
                    </div>
                    <div className="delete flex-col">
                    <label class="text-sm text-gray-700 leading-5 font-medium">&nbsp;</label>
                        <img src={deleteIcon} alt="delete"/>
                    </div>
                </div>

                <button type="button" class="btn btn-primary me-3" onClick={() => setNoOfRows(noOfRows + 1)}>Add</button>
            </div>

            <div className="modalFooter">
                <button>cancle</button>
                <button>Save</button>
            </div>
        </div>
    </div>
}
    
    
    </>
    );
}

export default Modal;