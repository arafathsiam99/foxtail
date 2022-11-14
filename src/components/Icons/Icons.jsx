import React from "react";
import { FiSearch, FiUsers, FiPlus } from "react-icons/fi";
import { BiMessageAltDots } from "react-icons/bi";
import { TbBell } from "react-icons/tb";
import { RiArrowDropDownFill } from "react-icons/ri";

const Icons = () => {
  return (
    <>
      <ul className="flex justify-center items-center">
        <li className="mx-5 hidden md:block">
          <FiSearch className="w-6 h-6" />
        </li>
        <div className="h-[30px] bg-gray-400 w-[2px] mx-5 md:block hidden"></div>
        <li className="mx-5 md:ml-0">
          <button className="create-btn flex items-center">
            Create
            <FiPlus className="w-4 h-4 ml-2" />
          </button>
        </li>
        <div className="h-[30px] bg-gray-400 w-[2px] ml-5 md:block hidden"></div>
        <div className="relative">
          <li className="mx-5">
            <BiMessageAltDots className="w-6 h-6" />
            <div className="absolute top-[-10px] right-0">
              <div className="bg-purple-800 text-white rounded-full w-[20px] h-[20px]">
                <p className="ml-1.5 mb-2 text-sm">4</p>
              </div>
            </div>
          </li>
        </div>
        <div className="h-[30px] bg-gray-400 w-[2px] ml-5 md:block hidden"></div>
        <div className="relative">
          <li className="mx-5">
            <FiUsers className="w-6 h-6" />
            <div className="absolute top-[-10px] right-0">
              <div className="bg-purple-800 text-white rounded-full w-[20px] h-[20px] ">
                <p className="ml-1.5 mb-2 text-sm">4</p>
              </div>
            </div>
          </li>
        </div>
        <div className="h-[30px] bg-gray-400 w-[2px] ml-5 md:block hidden"></div>
        <div className="relative">
          <li className="mx-5">
            <TbBell className="w-6 h-6" />
          </li>
          <div className="absolute top-[-10px] right-0">
            <div className="bg-purple-800 text-white rounded-full w-[20px] h-[20px]">
              <p className="ml-1.5 mb-2 text-sm">4</p>
            </div>
          </div>
        </div>
        <div className="h-[30px] bg-gray-400 w-[2px] ml-5 md:block hidden"></div>
        <li>
          <div className="md:flex justify-center  hidden">
            <div>
              <div className="border-2 flex items-center py-2 px-3 rounded-sm justify-center relative ml-4">
                <img
                  className="w-[20px] h-[20px] rounded-full ring-2 ring-gray-300 dark:ring-violet-500"
                  src="https://i.ibb.co/02Rn9g0/fe4f29a38707617f19db951e686aeb22.png"
                  alt="Bordered avatar"
                />
                <RiArrowDropDownFill className="h-6 w-6"/>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Icons;
