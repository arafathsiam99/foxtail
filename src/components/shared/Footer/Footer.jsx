import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-200 h-[2px]  mx-14 mt-1"></div>
      <div className="flex justify-between items-center px-4 pb-14">
        <div className="md:flex ml-5 justify-center items-center">
          <div className="p-5">
            <img
              src="https://i.ibb.co/Cvj6VX3/Group-62.png"
              alt=""
              className=""
            />
          </div>
          <div>
            <ul className="md:flex  gap-6">
              <li>Contact Us</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>2257 Compliance</li>
              <li>AntiSpam</li>
              <li>Law Enforcement</li>
            </ul>
          </div>
        </div>
        <div className="mr-10">
          <p>2022 Foxtail LLC. All reights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
