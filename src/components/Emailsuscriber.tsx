import React from "react";
import img1 from "../assets/images/image.jpg";

const Emailsuscriber = () => {
  return (
    // backgrund container
    <div className="flex items-center justify-center bg-zinc-700 h-screen ">
      {/* card */}
      <div className="bg-zinc-800 rounded-2xl p-2 mx-6">
        {/* flex-container */}
        <div className="flex flex-col md:flex-row">
          <img
            src={img1}
            alt="img"
            className="h-80 rounded-xl object-fill md:rounded-l-xl md:h-64 md:rounded-r-none transform hover:scale-105 duration-100 "
          />
          <div className="p-6 md:p-12">
            <h2 className="text-white font-serif font-medium text-xl text-center md:text-left ">
              Get diet and fitness tips in your inbox
            </h2>
            <p className="max-w-xs my-4 text-sm leading-5 tracking-wide text-center text-white md:text-left ">
              Eat better and exercise better. Sign up for the Diet&Fitness
              newsletter.
            </p>

            <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
              <input
                placeholder="Enter your email id"
                className="p-2 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none"
              />
              {/* "px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500" */}
              <button className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emailsuscriber;
