import React from "react";
import SingleEvent from "../SingleEvent/SingleEvent";
import SingleMember from "../SingleMember/SingleMember";
import SingleMember1 from "../SingleMember/SingleMember1";
import SingleNft from "../SingleNft/SingleNft";
import TopCreator from "../TopCreator/TopCreator";

const Banner = () => {
 
  return (
    <>
      <div className="custom-color md:mt-5">
        <h1 className="text-white text-5xl flex items-start md:ml-14 ml-5 py-3">
          Trending
        </h1>
        <div className="grid md:grid-cols-3 md:px-10">
          <SingleNft />
        </div>
        <div className="grid md:grid-cols-2 md:px-8">
          <SingleEvent />
          <SingleEvent />
        </div>
        <div className="grid md:grid-cols-3 gap-5 md:px-16 px-5  py-5 ">
          <SingleMember />
        </div>
      </div>
      <h1 className=" font-medium	tracking-wide	 text-5xl flex items-start md:ml-14 ml-5 py-3 text-custom">
        Top Creators
      </h1>
      <div className="grid md:grid-cols-3 gap-3 md:px-16 px-2 py-10">
        <TopCreator />
      </div>
      <h1 className=" font-medium	tracking-wide	 text-5xl flex items-start md:ml-14 ml-8 py-3 text-custom">
        Latest
      </h1>
      <div className="grid md:grid-cols-3 md:px-12 px-5">
        <SingleNft />
      </div>
      <div className="grid md:grid-cols-2 md:mx-10">
        <SingleEvent />
        <SingleEvent />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:mx-16 mx-5 pt-5 pb-8  ">
        <SingleMember1 />
        <SingleMember1 />
        <SingleMember1 />
      </div>
    </>
  );
};

export default Banner;
