import React from "react";
import SingleNft1 from "../../components/SingleNft/SingleNft1";

const NFT = () => {
  return (
    <>
      <div className="flex items-center justify-between md:mx-6">
        <div className="flex items-center py-8 px-8">
          <div>
            <h3 className="text-xs tracking-wide md:text-lg">Filt by Tag:</h3>
          </div>
          <div>
            <div>
              <input
                type="text"
                id=""
                className="bg-white border-2 border-gray-300 text-sm rounded-sm  block w-1/2  md:w-3/4  p-1.5  md:ml-3 md:p-2.5   dark:placeholder-gray-400 outline-none"
                placeholder="bdsm,"
                required
              />
            </div>
          </div>
        </div>
        <div className="flex items-center pr-2">
          <div>
            <h3 className="text-xs tracking-wide md:text-lg text-custom">
              Short by :
            </h3>
          </div>
          <div className="flex justify-center">
            <div>
              <div className="dropdown relative ml-4">
                <a
                  className="
          py-2
          px-1
          md:px-6
          border-2
         md:w-full
          text-black
          rounded-sm
          flex
          items-center
        "
                >
                  <h3 className="text-xs tracking-wide md:text-lg mr-6 md:mr-0">
                    Recent
                  </h3>

                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    className="w-2 md:ml-2 mr-5 md:mr-0"
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
        <h3 className="text-white text-2xl flex items-start md:ml-10 ml-5 pt-4 ">
          Popular NFTs
        </h3>
        <div className="grid md:grid-cols-3  md:mx-5  pt-3 pb-10 ">
          <SingleNft1 />
          <SingleNft1 />
          <SingleNft1 />
        </div>
      </div>
      <div className="grid md:grid-cols-3  md:mx-5 pb-16 ">
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
        <SingleNft1 />
      </div>
    </>
  );
};

export default NFT;
