"use client";

import React from "react";

// React Icons
import { MdLightMode } from "react-icons/md";
import { CiLight  } from "react-icons/ci";
import { SiAboutdotme } from "react-icons/si";

// Components
import Tooltip from "./Tooltip/Tooltip";

// Context
import { useTheme } from "../context/ThemeProvider";

const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex items-center mt-2 h-20 w-full bg-slate-500 dark:bg-gray-700 bg-opacity-20 backdrop-blur-lg">
      <div className="flex items-center justify-between w-full mx-20">
        <SiAboutdotme size={"40"} className=" text-slate-800 dark:text-slate-200" />
        <Tooltip content={theme === "light" ? "Dark mode" : "Light mode"} position="bottom">
          <div className="flex flex-col items-center justify-center cursor-pointer">
            {theme === "dark" ? (
              <MdLightMode size={"40"} className="text-slate-200 hover:text-slate-400" onClick={toggleTheme} />
            ) : (
              <CiLight size={"40"} className="text-slate-700 hover:text-slate-900" onClick={toggleTheme} />
            )}
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Header;