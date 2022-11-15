import React from "react";
import SingleEvent from "../../components/SingleEvent/SingleEvent";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Events = () => {
  return (
    <>
      <div className="flex items-center justify-between md:mx-6">
        <div className="flex py-8 px-8">
          <div>
            <h3 className="text-lg tracking-wide leading-6 text-custom">
              Filter:
            </h3>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="purple"
              className="w-6 h-6 mt-1 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center md:mr-8 mr-5">
          <div>
            <h3 className="text-lg tracking-wide leading-6">Short by</h3>
          </div>
          <div className="flex justify-center">
            <div>
              <div className="dropdown relative ml-4">
                <a
                  className="

          px-6
          border-2
          h-[40px] w-full
          text-black
          rounded-sm
          flex
          items-center
        "
                >
                  <h3>Recent</h3>

                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    className="w-2 ml-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="border-2 py-3 my-3 mx-5 ">
        <div className="flex items-center justify-between">
          <div className="flex">
            <h1>Loaction:</h1>
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 focus:text-gray-700  outline-none"
              placeholder="San Diago, California, US"
            />
          </div>
          <div class="flex items-center justify-center">
            <div className="datepicker flex relative form-floating mb-3 xl:w-96">
              <h2>Date: </h2>
              <input
                type="date"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  m-0 focus:text-gray-700  outline-none"
                placeholder="04.30.2022 - 05.06.2022"
              />
            </div>
            <div className="flex">
              <label
                for="small-range"
                class="block mb-2 text-normal font-medium text-black dark:text-gray-300"
              >
                Distance
              </label>
              <input
                id="small-range"
                type="range"
                value="50"
                className=" w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
              ></input>
            </div>
          </div>
        </div>
      </div> */}
      <div className="custom-color">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-medium text-base	md:text-xl tracking-wide	leading-6	md:leading-6 md:ml-14 ml-7 pt-4 ">
            My Events
          </h3>
          <div className="flex mr-5 mt-3 md:hidden">
            <FiArrowLeft className="text-white w-6 h-6" />
            <FiArrowRight className="text-white w-6 h-6" />
          </div>
        </div>
        <div className="grid md:grid-cols-2  md:mx-5  md:pt-3 pb-10 ">
          <div className="flex justify-center items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6 hidden md:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </div>
            <div>
              <SingleEvent />
            </div>
          </div>
          <div className="md:flex justify-center items-center hidden ">
            <div>
              <SingleEvent />
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6 hidden md:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <h2 className="font-medium text-xl tracking-wide text-custom mt-5 ml-7 md:ml-14">
        Upcoming Events
      </h2>
      <div className="grid md:grid-cols-2 md:mx-5 md:pt-3 pb-10 ">
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
      </div>
    </>
  );
};

export default Events;
