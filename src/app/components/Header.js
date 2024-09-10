"use client";

import React from "react";

// React Icons
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";

// Components
import Tooltip from "./Tooltip/Tooltip";

const Header = () => {
  return (
    <div className="flex items-center mt-2 h-20 w-full bg-gray-700 bg-opacity-20 backdrop-blur-lg">
      <div className="flex items-center justify-between w-full mx-20">
        <SiAboutdotme size={"40"} className="text-slate-200" />
        <Tooltip content={"Light mode"} position="bottom">
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <MdOutlineDarkMode size={"40"} className="text-slate-200" />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Header;
