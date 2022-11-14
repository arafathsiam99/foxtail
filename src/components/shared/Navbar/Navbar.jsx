import React from "react";
import { useState } from "react";
import Icons from "../../Icons/Icons";
import { HiX, HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center shadow-xl py-4 md:px-14 px-4  justify-between">
      <div
        onClick={() => setOpen(!open)}
        className="md:hidden mb-[350px] pr-5 md:pr-0 md:mb-0"
      >
        {open ? (
          <HiX className="w-6 h-6 mt-5" />
        ) : (
          <HiMenu className="w-6 h-6 mt-5" />
        )}
      </div>
      <div>
        <ul className="md:flex  justify-center items-center">
          <img
            src="https://i.ibb.co/Cvj6VX3/Group-62.png"
            alt=""
            className="md:mr-20 mr-16 h-[49px] w-[89px]"
          />
          <div className="flex flex-col md:flex md:flex-row  md:mt-0 text-gray-500 mt-5">
            <Link to="/" className="mx-3 my-3 md:my-0 border-b-2 md:border-b-0">
              Home
            </Link>
            <Link
              to="/nft"
              className="mx-3 my-3 md:my-0 border-b-2 md:border-b-0"
            >
              NFTs
            </Link>
            <Link
              to="/member"
              className="mx-3 my-3 md:my-0 border-b-2 md:border-b-0"
            >
              Member
            </Link>
            <Link
              to="/events"
              className="mx-3 my-3 md:my-0 border-b-2 md:border-b-0"
            >
              Events
            </Link>
            <Link to="/" className="mx-3 my-3 md:my-0 border-b-2 md:border-b-0">
              Desires
            </Link>
          </div>
          <div className="md:hidden">
            <button className=" my-btn px-20 py-3 mt-3">My Profile</button>
          </div>
        </ul>
      </div>
      <div className="mb-[320px] md:mb-0">
        <Icons />
      </div>
    </div>
  );
};

export default Navbar;
