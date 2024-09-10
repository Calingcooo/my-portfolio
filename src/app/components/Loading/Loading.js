"use client";

import React from "react";
import './Loading.css'

const Loading = () => {

  return (
    <div className="bouncing-loader flex items-center justify-center bg-slate-800 h-screen">
      <div className="w-6 h-6 m-1 bg-slate-200 rounded-full"></div>
      <div className="w-6 h-6 m-1 bg-slate-200 rounded-full"></div>
      <div className="w-6 h-6 m-1 bg-slate-200 rounded-full"></div>
    </div>
  );
};

export default Loading;
