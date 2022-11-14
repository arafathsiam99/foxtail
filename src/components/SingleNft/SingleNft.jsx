import React from "react";
import BuyNow from "../BuyNow/BuyNow";
import NFTRibbon from "../Ribbon/NFTRibbon";

const SingleNft = () => {
  return (
    <>
      <div className="mt-5 bg-white rounded-sm mx-5 shadow-xl">
        <div className="relative  z-30">
          <img
            className="object-cover w-full h-64 "
            src="https://i.ibb.co/8jXByXJ/b52d5841ac741c25199e47817d64f004-Expires-1668384000-Signature-GNKg-T-QIYm-GLNr36-WMKYaygpu-Ijw311h-X.png"
            alt=""
          />
          <NFTRibbon />
          <div className="flex justify-between p-3 backdrop-blur-md  absolute inset-x-0 bottom-0 left-0">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h2 className="text-white ml-1">9.7k</h2>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                />
              </svg>

              <h2 className="text-white ml-1">44</h2>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>

              <h2 className="text-white ml-1">04</h2>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>

              <h2 className="text-white ml-1">22</h2>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>

              <h2 className="text-white ml-1">04</h2>
            </div>
          </div>
        </div>

        <div className="font-thin">
          <h1 className="font-medium text-2xl font-sans flex align-start my-1.5 ml-4 ">
            Curabitur suscipit
          </h1>
          <h4 className="flex align-start ml-4  text-gray-500">
            Created: 28.08.2022 by
            <span className="underline	ml-1 decoration-solid	decoration-from-font	">
              NancyDyna
            </span>
          </h4>
          <h4 className="flex align-start ml-4  text-gray-500 ">
            Owner:
            <span className="underline ml-1 decoration-solid	decoration-from-font	">
              Sadiya
            </span>
          </h4>
        </div>
        <div className="bg-fuchsia-200 h-0.5   max-w-7xl mx-4 mt-1"></div>
        <div className="flex items-center justify-between py-3 font-thin ">
          <div className="flex items-center">
            <img
              src="https://i.ibb.co/h9fTpCL/rsz-2d0dbcbff37dac3ebd093f05b6dee7cf-expires-1668384000-signature-rfzlm-lm50m-xb-ppga-1-fa6joo04d-mm.png"
              alt=""
              className="w-6 h-6 ml-3"
            />
            <h1 className="font-medium text-3xl ml-3 ">1052</h1>
            <h2 className="ml-3 font-medium text-gray-500">($654)</h2>
          </div>
          <div className="mr-5">
            <BuyNow />
          </div>
        </div>
      </div>
      <div className="mt-5 bg-white rounded-sm mx-5  shadow-xl">
        <div className="relative  z-30">
          <img
            className="object-cover w-full h-64 "
            src="https://i.ibb.co/0MhPkHS/df5288f744b0486b3efccaebcd67c4a2-Expires-1668384000-Signature-Gy-Wq-Qd0vs-IBeoi2-M0-Ged-MHEJpo8t5m-R.jpg"
            alt=""
          />
          <NFTRibbon />
          <div className="flex justify-between p-3 backdrop-blur-md  absolute inset-x-0 bottom-0 left-0">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h2 className="text-white ml-1">9.7k</h2>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                />
              </svg>

              <h2 className="text-white ml-1">44</h2>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>

              <h2 className="text-white ml-1">04</h2>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>

              <h2 className="text-white ml-1">22</h2>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>

              <h2 className="text-white ml-1">04</h2>
            </div>
          </div>
        </div>

        <div className="font-thin">
          <h1 className="font-medium text-2xl flex align-start my-1.5 ml-4 ">
            Curabitur suscipit
          </h1>
          <h4 className="flex align-start ml-4  text-gray-500 ">
            Created: 28.08.2022 by
            <span className="underline	ml-1 decoration-solid	decoration-from-font	">
              NancyDyna
            </span>
          </h4>
          <h4 className="flex align-start ml-4  text-gray-500 ">
            Owner:
            <span className="underline ml-1 decoration-solid	decoration-from-font	">
              Sadiya
            </span>
          </h4>
        </div>

        <div className="bg-fuchsia-200 h-0.5  max-w-7xl mx-4 mt-1"></div>
        <div className="flex items-center justify-between py-3 font-thin ">
          <div className="flex items-center">
            <img
              src="https://i.ibb.co/h9fTpCL/rsz-2d0dbcbff37dac3ebd093f05b6dee7cf-expires-1668384000-signature-rfzlm-lm50m-xb-ppga-1-fa6joo04d-mm.png"
              alt=""
              className="w-6 h-6 ml-3"
            />
            <h1 className="font-medium text-3xl ml-3 ">1052</h1>
            <h2 className="ml-3 font-medium text-gray-500">($654)</h2>
          </div>
          <div className="mr-5">
            <BuyNow />
          </div>
        </div>
      </div>
      <div className="mt-5 bg-white rounded-sm mx-5  shadow-xl">
        <div className="relative  z-30">
          <img
            className="object-cover w-full h-64 "
            src="https://i.ibb.co/NCJBykY/e13be138e069a3e96f33fbf61655606c-Expires-1668384000-Signature-hrbzk-r-WIb-DPXiiw9n-Hei-TL1-Zd-UEnpn.jpg"
            alt=""
          />
          <NFTRibbon />
          <div className="flex justify-between p-3 backdrop-blur-md  absolute inset-x-0 bottom-0 left-0">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h2 className="text-white ml-1">9.7k</h2>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                />
              </svg>

              <h2 className="text-white ml-1">44</h2>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>

              <h2 className="text-white ml-1">04</h2>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>

              <h2 className="text-white ml-1">22</h2>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>

              <h2 className="text-white ml-1">04</h2>
            </div>
          </div>
        </div>

        <div className="font-thin">
          <h1 className="font-medium text-2xl flex align-start my-1.5 ml-4 ">
            Curabitur suscipit
          </h1>
          <h4 className="flex align-start ml-4  text-gray-500">
            Created: 28.08.2022 by
            <span className="underline	ml-1 decoration-solid	decoration-from-font	">
              NancyDyna
            </span>
          </h4>
          <h4 className="flex align-start ml-4  text-gray-500 ">
            Owner:
            <span className="underline ml-1 decoration-solid	decoration-from-font">
              Sadiya
            </span>
          </h4>
        </div>

        <div className="bg-fuchsia-200 h-0.5  max-w-7xl mx-4 mt-1"></div>
        <div className="flex items-center justify-between py-3 font-thin ">
          <div className="flex items-center">
            <img
              src="https://i.ibb.co/h9fTpCL/rsz-2d0dbcbff37dac3ebd093f05b6dee7cf-expires-1668384000-signature-rfzlm-lm50m-xb-ppga-1-fa6joo04d-mm.png"
              alt=""
              className="w-6 h-6 ml-3"
            />
            <h1 className="font-medium text-3xl ml-3 ">1052</h1>
            <h2 className="ml-3 font-medium text-gray-500">($654)</h2>
          </div>
          <div className="mr-5">
            <BuyNow />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleNft;
