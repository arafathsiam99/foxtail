import React from "react";
import BuyNow from "../../components/BuyNow/BuyNow";
import SingleNft1 from "../../components/SingleNft/SingleNft1";
import { FiChevronRight } from "react-icons/fi";
import {
  RiBookmarkLine,
  RiArrowUpSLine,
  RiArrowDownSLine,
} from "react-icons/ri";

const NFTPage = () => {
  return (
    <>
      <div className="flex text-gray-400 items-center ml-5 md:ml-16 my-3">
        <h3>NFTs</h3>
        <FiChevronRight className="h-5 w-5" />
        <h3>SuperSexy Girl Art</h3>
      </div>
      <div className="grid md:grid-cols-2  py-3 md:px-16 px-5">
        <div>
          <img
            src="https://i.ibb.co/mqjZY6F/Rectangle-88.png"
            alt=""
            className=""
          />
        </div>
        <div className=" mt-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-medium	tracking-wide	">
              Curabitur suscipit
            </h1>
            <div className="flex">
              <img
                src="https://i.ibb.co/JFFDtN2/Frame-413.png"
                alt=""
                className="w-8 h-8"
              />
              <img
                src="https://i.ibb.co/2qJDWrX/Frame-412.png"
                alt=""
                className="w-8 h-8"
              />
              <img
                src="https://i.ibb.co/JFc5zv8/Frame-411.png"
                alt=""
                className="w-8 h-8"
              />
              <img
                src="https://i.ibb.co/Tg2K5kn/Frame-410.png"
                alt=""
                className="w-8 h-8"
              />
            </div>
          </div>
          <p className="mt-2 text-gray-500">
            by: <span className="text-fuchsia-700 underline">NancyDyna</span>
          </p>
          <p className="mt-2 	text-gray-500">
            Owned by: <span className="text-fuchsia-700 underline">Arifa</span>
          </p>
          <div className="flex mt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
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
            <p className="ml-1 text-gray-500">9.67k View</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-3 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <p className="ml-1 	text-gray-500">02 Save</p>
          </div>
          <div className="bg-gray-200 my-10 p-3 font-normal">
            <h3 className="font-medium	text-xl	tracking-wide	">Perks:</h3>
            <p className="mt-2	text-xl	tracking-wide	leading-6	 ">
              <span className="text-fuchsia-700">Message from creator:-</span>
              Get etcVivamus porttitor purus non mauris venenatis, quis gravida
              risus consequat. Curabitur suscipit vestibulum urna id tincidunt.
            </p>
            <p className=" text-gray-400 mt-5 text-base	tracking-wide	">
              *Perks are only good for first purchase unless specified by
              creator
            </p>
          </div>
          <div className="border-2 mt-10">
            <h1 className="text-xl tracking-wide	leading-8	 border-b-2 py-5 pl-3">
              Sale ends on:
              <span className="text-gray-400 ml-3">3d 21h 43M 21s</span>
            </h1>
            <h1 className="mt-5 text-xl tracking-wide	leading-8 pl-3">
              Current Price
            </h1>
            <div className="flex items-center py-2 pl-3">
              <img
                src="https://i.ibb.co/h9fTpCL/rsz-2d0dbcbff37dac3ebd093f05b6dee7cf-expires-1668384000-signature-rfzlm-lm50m-xb-ppga-1-fa6joo04d-mm.png"
                alt=""
                className="w-7 h-7"
              />
              <h1 className="text-5xl	 mx-2 leading-10	">
                1052 <span className="text-sm text-gray-400">($654)</span>
              </h1>
            </div>
            <div className=" flex items-center py-5 pl-3">
              <BuyNow />
              <div className="flex">
                <div>
                  <button
                    type="button"
                    className="text-custom font-medium leading-8	 border border-purple-800 focus:outline-none text-lg	 rounded-sm px-5 py-0.5 ml-4"
                  >
                    <div className="flex items-center">
                      <RiBookmarkLine className="text-custom " />
                      <h1 className="ml-1">Make Offer</h1>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 mt-5">
        <div className="md:ml-16 md:w-[654px] md:h-[318px] mx-5">
          <div className="border-2">
            <h1 className="font-medium text-lg py-3 border-b-2 pl-4">
              Descriptions
            </h1>
            <div>
              <p className="font-normal	pt-2 pb-10 text-gray-500 pl-4 pr-8 text-lg	leading-6	tracking-wide	">
                Nunc ultrices, eros ac auctor accumsan, felis sapien volutpat
                est, a hendrerit nisi risus quis sem. Vivamus porttitor purus
                non mauris venenatis, quis gravida risus consequat. Curabitur
                suscipit vestibulum urna id tincidunt. Aliquam ac risus quis
                nibh pretium pulvinar. Nunc ultrices, eros ac auctor accumsan,
                felis sapien volutpat est, a hendrerit nisi risus quis sem.
                <br />
                <span>
                  <div className="mt-7 pr-7">
                    Vivamus porttitor purus non mauris venenatis, quis gravida
                    risus consequat.
                  </div>
                </span>
              </p>
            </div>
          </div>
          <div className="border-2 my-7 ">
            <h1 className=" font-medium	 text-lg py-3 pl-4 border-b-2 leading-6	tracking-wide	">
              Tag
            </h1>
            <div className="flex  px-2 py-4">
              <button className="bg-fuchsia-700 text-base	 text-white	 p-1 mr-2">
                Bdsm
              </button>
              <button className="bg-fuchsia-700 text-base	 text-white p-1 mr-2">
                Toys
              </button>
              <button className="bg-fuchsia-700	text-base	 text-white p-1 mr-2">
                Boobs
              </button>
              <button className="bg-fuchsia-700	text-base	 text-white p-1 mr-2">
                Bdsm
              </button>
            </div>
          </div>
        </div>
        <div className="md:mr-16 mx-5">
          <button
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            className="text-black w-full border-2 px-4 text-center inline-flex items-center justify-between  font-medium text-lg py-3 border-b-2 pl-4"
            type="button"
          >
            Details
            <RiArrowDownSLine className="w-7 h-7" />
          </button>
          <div className="mt-4">
            <button
              id="dropdownDefault"
              data-dropdown-toggle="dropdown"
              className="text-black border-2 w-full  font-medium text-lg py-3 border-b-2 pl-4 px-4 text-center inline-flex items-center justify-between"
              type="button"
            >
              Comments
              <RiArrowUpSLine className="w-7 h-7" />
            </button>
            <div className="border-2 border-t-0 px-4 py-2 w-full">
              <h1 className="font-medium text-lg ">Comments</h1>
              <div className="flex py-2 items-center">
                <div>
                  <img
                    src="https://i.ibb.co/NSzs8Hw/Ellipse-43.png"
                    alt=""
                    className="w-8 h-8"
                  />
                </div>
                <div className="ml-3">
                  <h1 className="text-lg tracking-wide	">JustinBruno</h1>
                  <p className="text-gray-400">12.06.2021</p>
                </div>
              </div>
              <p className="text-gray-400 text-lg tracking-wide	">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                pellentesque nunc, diam convallis. At netus libero etiam
                tincidunt lectus orci maecenas pharetra netus. Adipiscing velit
                justo, amet est volutpat.
              </p>
              <div className="flex py-2 items-center">
                <div>
                  <img
                    src="https://i.ibb.co/NSzs8Hw/Ellipse-43.png"
                    alt=""
                    className="w-8 h-8"
                  />
                </div>
                <div className="ml-3">
                  <h1 className="text-lg tracking-wide	">JustinBruno</h1>
                  <p className="text-gray-400">12.06.2021</p>
                </div>
              </div>
              <p className="text-gray-400 text-lg tracking-wide	 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                pellentesque nunc, diam convallis. At netus libero etiam
                tincidunt lectus orci maecenas pharetra netus. Adipiscing velit
                justo, amet est volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="py-3">
        <div className="border-2 w-3/4">
          <div className="flex items-center justify-between p-3">
            <h1 className="font-medium	text-lg	leading-6	tracking-wide	">
              Sales Activity
            </h1>
            <div className="flex items-center mr-3">
              <h1 className="text-lg	leading-6	tracking-wide	text-gray-400">
                Filter Events
              </h1>
              <div className="flex border-2 p-2 items-center ml-4">
                <h3>NFTs, Sale, Transfer</h3>
                <RiArrowDropDownFill className="w-8 h-8" />
              </div>
            </div>
          </div>
          <table className="w-3/4">
            <tr className="border-2 divide-x-2">
              <th className="font-medium py-3">Event</th>
              <th className="font-medium py-3">Price </th>
              <th className="font-medium py-3">From</th>
              <th className="font-medium py-3">Date</th>
            </tr>

            <tr className="border-2 p-2 divide-x-2">
              <td>
                <div className="flex py-2 px-2">
                  <TbShoppingCartDiscount className="w-6 h-6" />
                  <p className="ml-1 font-medium">Sale</p>
                </div>
              </td>
              <td>
                <div className="flex py-2 px-2">
                  <img
                    src="https://i.ibb.co/TmH6qfh/rsz-2d0dbcbff37dac3ebd093f05b6dee7cf-expires-1668384000-signature-rfzlm-lm50m-xb-ppga-1-fa6joo04d-mm.png"
                    alt=""
                    className="w-6 h-6"
                  />
                  <p className="ml-1 font-medium">2.3469</p>
                </div>
              </td>

              <td className="py-2 px-2">437097</td>
              <td className="py-2 px-2">6 hours ago</td>
            </tr>
            <tr className="border-2 divide-x-2">
              <td>
                <div className="flex py-2 px-2">
                  <TbArrowsRightLeft className="w-6 h-6" />
                  <p className="ml-1 font-medium">Transfer</p>
                </div>
              </td>
              <td>
                <div className="flex py-2 px-2">
                  <img
                    src="https://i.ibb.co/TmH6qfh/rsz-2d0dbcbff37dac3ebd093f05b6dee7cf-expires-1668384000-signature-rfzlm-lm50m-xb-ppga-1-fa6joo04d-mm.png"
                    alt=""
                    className="w-6 h-6"
                  />
                  <p className="ml-1 font-medium">2.3469</p>
                </div>
              </td>
              <td className="py-2 px-2">437097</td>
              <td className="py-2 px-2">1 days ago</td>
            </tr>
            <tr className="border-2 divide-x-2">
              <td>
                <div className="flex py-2 px-2">
                  <TbArrowsRightLeft className="w-6 h-6" />
                  <p className="ml-1 font-medium">Transfer</p>
                </div>
              </td>
              <td>
                <div className="flex py-2 px-2">
                  <img
                    src="https://i.ibb.co/TmH6qfh/rsz-2d0dbcbff37dac3ebd093f05b6dee7cf-expires-1668384000-signature-rfzlm-lm50m-xb-ppga-1-fa6joo04d-mm.png"
                    alt=""
                    className="w-6 h-6"
                  />
                  <p className="ml-1 font-medium">2.3469</p>
                </div>
              </td>
              <td className="py-2 px-2">437097</td>
              <td className="py-2 px-2">4 days ago</td>
            </tr>
            <tr className="border-2 divide-x-2">
              <td>
                <div className="flex py-2 px-2">
                  <TbShoppingCartDiscount className="w-6 h-6" />
                  <p className="ml-1 font-medium">Sale</p>
                </div>
              </td>
              <td>
                <div className="flex py-2 px-2">
                  <img
                    src="https://i.ibb.co/TmH6qfh/rsz-2d0dbcbff37dac3ebd093f05b6dee7cf-expires-1668384000-signature-rfzlm-lm50m-xb-ppga-1-fa6joo04d-mm.png"
                    alt=""
                    className="w-6 h-6"
                  />
                  <p className="ml-1 font-medium">2.3469</p>
                </div>
              </td>
              <td className="py-2 px-2">437097</td>
              <td className="py-2 px-2">6 days ago</td>
            </tr>
            <tr className="border-2 divide-x-2">
              <td>
                <div className="flex py-2 px-2">
                  <TbArrowsRightLeft className="w-6 h-6" />
                  <p className="ml-1 font-medium">Transfer</p>
                </div>
              </td>
              <td>
                <div className="flex py-2 px-2">
                  <img
                    src="https://i.ibb.co/TmH6qfh/rsz-2d0dbcbff37dac3ebd093f05b6dee7cf-expires-1668384000-signature-rfzlm-lm50m-xb-ppga-1-fa6joo04d-mm.png"
                    alt=""
                    className="w-6 h-6"
                  />
                  <p className="ml-1 font-medium">2.3469</p>
                </div>
              </td>
              <td className="py-2 px-2">437097</td>
              <td className="py-2 px-2">6 days ago</td>
            </tr>
            <tr className="border-2 divide-x-2">
              <td>
                <div className="flex py-2 px-2">
                  <TbShoppingCartDiscount className="w-6 h-6" />
                  <p className="ml-1 font-medium">Sale</p>
                </div>
              </td>
              <td>
                <div className="flex py-2 px-2">
                  <img
                    src="https://i.ibb.co/TmH6qfh/rsz-2d0dbcbff37dac3ebd093f05b6dee7cf-expires-1668384000-signature-rfzlm-lm50m-xb-ppga-1-fa6joo04d-mm.png"
                    alt=""
                    className="w-6 h-6"
                  />
                  <p className="ml-1 font-medium">2.3469</p>
                </div>
              </td>
              <td className="py-2 px-2">437097</td>
              <td className="py-2 px-2">9 days ago</td>
            </tr>

            <tr className="border-2 divide-x-2">
              <td>
                <div className="flex py-2 px-2">
                  <TbShoppingCartDiscount className="w-6 h-6" />
                  <p className="ml-1 font-medium">Sale</p>
                </div>
              </td>
              <td>
                <div className="flex py-2 px-2">
                  <img
                    src="https://i.ibb.co/TmH6qfh/rsz-2d0dbcbff37dac3ebd093f05b6dee7cf-expires-1668384000-signature-rfzlm-lm50m-xb-ppga-1-fa6joo04d-mm.png"
                    alt=""
                    className="w-6 h-6"
                  />
                  <p className="ml-1 font-medium">2.3469</p>
                </div>
              </td>
              <td className="py-2 px-2">437097</td>
              <td className="py-2 px-2">10 days ago</td>
            </tr>
          </table>
        </div>
      </div> */}
      <h3 class="font-medium my-3 md:ml-14 ml-5 text-xl text-custom">
        More NFTs from the creator
      </h3>
      <div className="grid md:grid-cols-3 py-5 md:mx-10 ">
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

export default NFTPage;
