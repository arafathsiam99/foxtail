import React from "react";
import SingleMember1 from "../../components/SingleMember/SingleMember1";

const Member = () => {
  return (
    <>
      <div className="flex items-center justify-between md:mx-8">
        <div className="flex py-8 px-8 ">
          <div>
            <h3 className="text-lg	tracking-wide">Filter:</h3>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
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
        <div className="flex items-center pr-2">
          <div>
            <h3 className="text-lg	tracking-wide">Short by</h3>
          </div>
          <div className="flex justify-center">
            <div>
              <div className="dropdown relative ml-4">
                <a
                  className="
          py-2
          px-3
          md:px-6
          border-2
         md:w-full
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

      <div className="custom-color">
        <h3 className="text-white font-medium text-xl md:block  md:ml-10 hidden pt-5">
          Just for you
        </h3>
        <div className="grid md:grid-cols-3 gap-8 md:mx-10 mx-3  pt-5 pb-14">
          <SingleMember1 />
          <SingleMember1 />
          <SingleMember1 />
          <SingleMember1 />
          <SingleMember1 />
          <SingleMember1 />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:mx-10 mx-3 py-10 ">
        <SingleMember1 />
        <SingleMember1 />
        <SingleMember1 />
        <SingleMember1 />
        <SingleMember1 />
        <SingleMember1 />
        <SingleMember1 />
        <SingleMember1 />
        <SingleMember1 />
        <SingleMember1 />
        <SingleMember1 />
        <SingleMember1 />
        <SingleMember1 />
        <SingleMember1 />
        <SingleMember1 />
      </div>
    </>
  );
};

export default Member;
