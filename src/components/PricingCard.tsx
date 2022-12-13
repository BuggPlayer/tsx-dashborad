import React from "react";

const PricingCard = () => {
  return (
    <div className="bg-slate-800 min-h-screen flex items-center justify-center">
      {/* try main-card */}
      <div className="flex flex-col px-6 my-6 md:flex-row md:space-x-6">
        {/* col-1 */}

        {[1, 2, 3].map((item) => (
          <div className="bg-slate-700 mb-4  rounded p-2 text-white hover:bg-violet-500">
            <div className="bg-slate-800 rounded-t-xl p-8 mx-3 mt-3">
              <p className=" text-center uppercase">Basic</p>
              <h2 className=" font-serif mt-8 text-5xl text-center">100GB</h2>
              <h3 className="mt-2 text-center">$1.99/Month</h3>
              <div className="flex justify-center ">
                <a
                  href="#"
                  className="border border-violet-600 py-3  rounded-lg px-10 inline-block mt-5 :duration-200 hover:bg-violet-800 hover:border-violet-800"
                >
                  Purchase
                </a>
              </div>
            </div>
            <div className="border-t border-slate-700 hover:border-violet-700"  />
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              <div className="flex flex-col space-y-2">
                {[1, 2, 3].map((item) => (
                  <div className="flex justify-center items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                    <span className="text-sm ml-2">100 GB of storage</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
