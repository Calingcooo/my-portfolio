import React, { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Navigation = () => {
  const [activeHoverHome, setActiveHoverHome] = useState(false);
  const [activeHoverProfile, setActiveHoverProfile] = useState(false);
  const [activeHoverAbout, setActiveHoverAbout] = useState(false);

  return (
    <div className="flex h-16 mb-16">
      <div className="flex items-center justify-center w-full">
        <div className="flex justify-evenly items-center bg-black bg-opacity-50 text-white h-full w-1/4 rounded-full">
          <div
            className="text-gray-400 hover:text-gray-200 flex flex-col items-center hover:-translate-y-2 duration-300 transition-all"
            onMouseEnter={() => setActiveHoverHome(true)}
            onMouseLeave={() => setActiveHoverHome(false)}
          >
            <span className={`uppercase tracking-wider ${!activeHoverHome && "hidden"}`}>Home</span>
            <span
              className={`rounded-full px-4 py-2 bg-gray-400 text-black font-bold hover:bg-gray-200 cursor-pointer`}
            >
              1
            </span>
          </div>
          <div
            className="text-gray-400 hover:text-gray-200 flex flex-col items-center hover:-translate-y-2 duration-300 transition-all"
            onMouseEnter={() => setActiveHoverProfile(true)}
            onMouseLeave={() => setActiveHoverProfile(false)}
          >
            <span className={`uppercase tracking-wider ${!activeHoverProfile && "hidden"}`}>Profile</span>
            <span className="rounded-full px-4 py-2 bg-gray-400 text-black font-bold hover:bg-gray-200 cursor-pointer ">
              2
            </span>
          </div>
          <div
            className="text-gray-400 hover:text-gray-200 flex flex-col items-center hover:-translate-y-2 duration-300 transition-all"
            onMouseEnter={() => setActiveHoverAbout(true)}
            onMouseLeave={() => setActiveHoverAbout(false)}
          >
            <span className={`uppercase tracking-wider ${!activeHoverAbout && "hidden"}`}>About</span>
            <span className="rounded-full h-full px-4 py-2 bg-gray-400 text-black font-bold hover:bg-gray-200 cursor-pointer group">
              {/* <IoIosInformationCircleOutline size={18} /> */}
              3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
