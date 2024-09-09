"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

// React Icons
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { TfiNotepad } from "react-icons/tfi";

// Components
import Tooltip from "./Tooltip/Tooltip";

const navContent = [
  {
    id: 1,
    navName: "Home",
    navIcon: <AiOutlineHome />,
    link: "/",
  },
  {
    id: 2,
    navName: "About me",
    navIcon: <CgProfile />,
    link: "/about",
  },
  {
    id: 3,
    navName: "Projects",
    navIcon: <TfiNotepad />,
    link: "/projects",
  },
];

const Navigation = () => {
  const navigate = useRouter();

  const handleNavClick = (link) => {
    navigate.push(link);
  };

  return (
    <div className="flex w-full h-20 mb-16">
      <div className="flex items-center justify-center w-full">
        <div className="flex justify-evenly items-center bg-black bg-opacity-50 text-white h-full w-1/4 rounded-full">
          {navContent.map((nav) => {
            return (
              <Tooltip key={nav.id} content={nav.navName} position="top">
                <div
                  className="bg-gray-800 hover:bg-gray-500 px-4 py-2 rounded-full flex flex-col items-center hover:-translate-y-2 duration-300 transition-all"
                  onClick={() => handleNavClick(nav.link)}
                >
                  <span className="text-slate-200 font-bold cursor-pointer">
                    {nav.navIcon}
                  </span>
                </div>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
