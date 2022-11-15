import React from "react";
import { useState } from "react";
import Icons from "../../Icons/Icons";
import { HiX, HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`flex items-center shadow-xl py-6 md:px-14 px-4   justify-between ${
        open ? `mb-[330px]` : `mb-0`
      }`}
    >
      <div className="flex items-center">
        <div onClick={() => setOpen(!open)} className="md:hidden pr-5">
          {open ? (
            <HiX className="w-7 h-7 mt-3" />
          ) : (
            <HiMenu className="w-7 h-7 mt-3" />
          )}
        </div>
        <div>
          <img
            src="https://i.ibb.co/Cvj6VX3/Group-62.png"
            alt=""
            className="md:mr-20"
          />
        </div>
        <div>
          <ul>
            <div
              className={` flex flex-col md:flex-row  md:mt-0 text-gray-500 mt-5 absolute md:top-8 md:mr-20 ${
                open ? `top-[70px]` : `top-[-340px]`
              }`}
            >
              <Link
                to="/"
                className="mx-3 my-3 md:my-0 border-b-2 md:border-b-0 hover:text-custom font-medium	 tracking-wide"
              >
                Home
              </Link>
              <Link
                to="/nft"
                className="mx-3 my-3 md:my-0 border-b-2 md:border-b-0 hover:text-custom font-medium	 tracking-wide"
              >
                NFTs
              </Link>
              <Link
                to="/member"
                className="mx-3 my-3 md:my-0 border-b-2 md:border-b-0 hover:text-custom font-medium	 tracking-wide"
              >
                Member
              </Link>
              <Link
                to="/events"
                className="mx-3 my-3 md:my-0 border-b-2 md:border-b-0 hover:text-custom font-medium	 tracking-wide"
              >
                Events
              </Link>
              <Link
                to="/"
                className="mx-3 my-3 md:my-0 border-b-2 md:border-b-0 hover:text-custom font-medium	 tracking-wide"
              >
                Desires
              </Link>
              <button className=" my-btn px-20 py-3 mt-3 md:hidden">
                My Profile
              </button>
            </div>
          </ul>
        </div>
      </div>
      <div className=" md:mb-0">
        <Icons />
      </div>
    </div>
  );
};

export default Navbar;
