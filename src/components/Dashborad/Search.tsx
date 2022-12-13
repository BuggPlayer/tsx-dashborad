import React from "react";
import { BiSearch } from "react-icons/bi";
const Search = () => {
  return (
    <div>
      <div
        className="bg-white 
        shadow-md flex
    items-center
    w-60
    gap-1
     rounded-md
     p-2
     text-center
     "
      >
        <BiSearch size={22} style={{ color: "gray" }} />
        <input
          className="
         p-1
          border-none 
          outline-none
          text-sm 

           placeholder:text-gray 
           placeholder:text-sm 

         w-full
      "
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Search;
