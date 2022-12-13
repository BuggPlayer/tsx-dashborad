import React from "react";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  BanknotesIcon,
  BriefcaseIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
const DateQuater = () => {
  return (
    <div className="py-4 mt-8 ">
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-gray text-lg">This week: 11-15 Sep 2022</h2>

        <div className=" w-56 text-right">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center items-center space-x-2 rounded-md border border-lightGrayColor bg-white bg-opacity-60 px-4  py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <BriefcaseIcon className="w-6 h-6 text-lightGrayColor" />
                <span>Week</span>
                <ChevronDownIcon
                  className="ml-2 -mr-1 h-6 w-6  text-lightGrayColor hover:text-lightGrayColor"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    <button>Edit</button>
                  </Menu.Item>
                  <Menu.Item>
                    <button>Edit</button>
                  </Menu.Item>
                </div>
                <Menu.Item>
                  <button>Edit</button>
                </Menu.Item>
                <Menu.Item>
                  <button>Edit</button>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default DateQuater;
