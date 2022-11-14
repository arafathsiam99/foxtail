import React from 'react';
import MemberRibbon from '../Ribbon/MemberRibbon';

const SingleMember1 = () => {
    return (
      <>
        <div className="relative z-30  shadow-xl">
          <img
            src="https://i.ibb.co/njtgJvX/Rectangle-170-6.png"
            alt=""
            className="w-full"
          />
          <MemberRibbon />
          <div className="text-white backdrop-blur-xl  absolute inset-x-0 bottom-0 left-0">
            <div className="flex items-center">
              <h1 className="text-2xl flex items-start px-1 ml-2 my-0.5" >
                Sreeti Mon
              </h1>
              <div className="rounded-full w- h-2 border-4 border-lime-400 mt-1 ml-1"></div>
            </div>
            <p className="flex items-start px-1 my-1 text-xl ml-2">
              Bisexual, 27y, 19Mi Away
            </p>
            <div className="flex px-1 my-4 ml-2">
              <button className="bg-fuchsia-800 text-xs	 px-1 mr-2">Toys</button>
              <button className="bg-fuchsia-800 text-xs	 px-1 mr-2">Kiss</button>
              <button className="bg-fuchsia-800	text-xs	 px-1 mr-2">Bdsm</button>
              <button className="bg-fuchsia-800	text-xs	 px-1 mr-2">12+</button>
              <button className="bg-fuchsia-800	text-xs	 px-1 mr-2">Toys</button>
              <button className="bg-fuchsia-800	text-xs	 px-1 mr-2">Kiss</button>
              <button className="bg-fuchsia-800	text-xs	 px-1 mr-2">Bdsm</button>
              <button className="bg-fuchsia-800	text-xs	 px-1 mr-2">12+</button>
            </div>
          </div>
        </div>
      </>
    );
};

export default SingleMember1;