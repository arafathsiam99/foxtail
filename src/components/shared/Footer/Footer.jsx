import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-color">
        <div className="mx-14 bg-gray-200 h-[2px]"></div>
        <div className="bg-color md:flex md:justify-between justify-center items-center md:px-4 md:pb-14 mx-24 md:mx-0">
          <div className="md:flex md:ml-5 justify-center items-center">
            <div className="md:p-5 md:mx-0 ml-16 md:ml-0">
              <img
                src="https://i.ibb.co/Cvj6VX3/Group-62.png"
                alt=""
                className=""
              />
            </div>
            <div className="md:ml-16 md:my-0 my-10 ml-16">
              <ul className="md:flex md:space-x-4">
                <div className="flex items-center">
                  <li className="my-2 md:my-0">Contact Us</li>
                  <div className="hidden md:block bg-gray-400 w-[1.5px] h-4 ml-2"></div>
                </div>
                <div className="flex items-center">
                  <li className="my-2 md:my-0">Terms</li>
                  <div className="hidden md:block bg-gray-400 w-[1.5px] h-4 ml-2"></div>
                </div>
                <div className="flex items-center">
                  <li className="my-2 md:my-0">Privacy</li>
                  <div className="hidden md:block bg-gray-400 w-[1.5px] h-4 ml-2"></div>
                </div>
                <div className="flex items-center">
                  <li className="my-2 md:my-0">2257 Compliance</li>
                  <div className="hidden md:block bg-gray-400 w-[1.5px] h-4 ml-2"></div>
                </div>
                <div className="flex items-center">
                  <li className="my-2 md:my-0">AntiSpam</li>
                  <div className="hidden md:block bg-gray-400 w-[1.5px] h-4 ml-2"></div>
                </div>
                <div className="flex items-center">
                  <li className="my-2 md:my-0">Law Enforcement</li>
                </div>
              </ul>
            </div>
          </div>
          <div className="md:mr-10 border-t-2 md:border-t-0">
            <p className="mt-5 md:mt-0">
              2022 Foxtail LLC. All reights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
