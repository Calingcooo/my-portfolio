import React from "react";

const Navigation = () => {
  return (
    <div className="flex h-16 mb-16">
      <div className="flex items-center justify-center w-full">
        <div className="flex justify-evenly items-center bg-black bg-opacity-50 text-white h-full w-1/4 rounded-full">
          <span className="rounded-full px-4 py-2 bg-gray-400 text-black font-bold hover:bg-gray-200 cursor-pointer hover:-translate-y-2 duration-300 transition-all">
            1
          </span>
          <span className="rounded-full px-4 py-2 bg-gray-400 text-black font-bold hover:bg-gray-200 cursor-pointer hover:-translate-y-2 duration-300 transition-all">
            2
          </span>
          <span className="rounded-full px-4 py-2 bg-gray-400 text-black font-bold hover:bg-gray-200 cursor-pointer hover:-translate-y-2 duration-300 transition-all">
            3
          </span>
          <span className="rounded-full px-4 py-2 bg-gray-400 text-black font-bold hover:bg-gray-200 cursor-pointer hover:-translate-y-2 duration-300 transition-all">
            4
          </span>
          <span className="rounded-full px-4 py-2 bg-gray-400 text-black font-bold hover:bg-gray-200 cursor-pointer hover:-translate-y-2 duration-300 transition-all">
            5
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
