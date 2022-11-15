import React from "react";
import EventRibbon from "../Ribbon/EventRibbon";

const SingleEvent = () => {
  return (
    <div className="m-5 bg-white  shadow-xl">
      <div className="relative  z-30">
        <img
          src="https://i.ibb.co/r3tbMmR/image-2.png"
          alt=""
          className="w-full"
        />
        <EventRibbon />
      </div>
      <div className=" px-4 py-2">
        <div className="flex text-gray-500 flex-col md:flex-row">
          <div>
            <h3 className="text-black text-xl leading-5 md:leading-6	font-medium tracking-wide">
              Curabitur suscipit vestibulum urna id tincidunt.
            </h3>
            <div className="mt-4 md:mt-2">
              <div className="flex md:py-2 py-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <p className="text-sm md:text-base md:leading-5 leading-4 tracking-wide">
                  18 Dynahost Street, 02 No Appartment, Texas, USA
                </p>
              </div>
              <div className="flex md:py-2 py-1 items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
                <p className="text-sm md:text-base md:leading-5 leading-4 tracking-wide">
                  Date: 21.12.2022
                </p>
                <p className="text-sm md:text-base md:leading-5 leading-4 tracking-wide ml-5">
                  Time: 04.30pm
                </p>
              </div>
              <div className="flex items-center md:py-2 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>
                <p className="text-sm md:text-base md:leading-5 leading-4 tracking-wide">
                  Ticket Price: $99.00
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="flex md:pt-28 md:ml-0 ml-32 mt-3 md:mt-0  -space-x-4">
              <img
                className="w-12 h-12 rounded-full border-4  dark:border-slate-600"
                src="https://i.ibb.co/z4gB1Np/2a11d7dbd8f19d0fda66fb08908bd2ec-Expires-1668384000-Signature-P0-RD1-eygjg-FSEf30-P-l-Vgstv-Im-Eaz-E.png"
                alt=""
              />
              <img
                className="w-12 h-12 rounded-full border-4  dark:border-slate-600"
                src="https://i.ibb.co/z4gB1Np/2a11d7dbd8f19d0fda66fb08908bd2ec-Expires-1668384000-Signature-P0-RD1-eygjg-FSEf30-P-l-Vgstv-Im-Eaz-E.png"
                alt=""
              />
              <img
                className="w-12 h-12 rounded-full border-4  dark:border-slate-600"
                src="https://i.ibb.co/BCvByzK/ff7296334f7d23c8d90b72606f23624d-Expires-1668384000-Signature-EIizidt-Hm-Qo8zmv-MCZM3dd-Bhr-9-Whc-Ww.jpg"
                alt=""
              />
            </div>
            <div className=" ml-3 md:mt-28 text-xl font-medium">
              <h1>+30</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
