import React, { useState } from "react";
import "./Modal.css";

const Modal = () => {
    const [modal, setModal] = useState(false);

    const toogleModal =()=> {
        setModal(!modal)
    }
    return(
    <>
    <button onClick={toogleModal} className="showModal">
        show Modal
    </button>
{
    modal &&

    <div className="modal">
        <div className="overlay" onClick={toogleModal}></div>
        <div className="modal-content bg-white">
           <div className="header w-full">
            <h2>Manage Team</h2>
           </div>
                <div className="gray-300 header-tp">
                    <h3>Aegon Life</h3>
                    <p>Placeholder</p>
                </div>
            

            <div className="modal-content-container">
                content
            </div>

            <div className="modalFooter">
                <button onClick={toogleModal}>cancle</button>
                <button onClick={toogleModal}>Save</button>
            </div>
        </div>
    </div>
}
    
    
    </>
    );
}

export default Modal;