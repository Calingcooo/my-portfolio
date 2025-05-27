"use client";

import React, { useState } from "react";
import { useTheme } from "@/app/context/ThemeProvider";

const MouseGradient = ({ children }) => {
  const { theme } = useTheme()
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setGradientPosition({ x, y });
  };

  const gradientColors = theme === 'dark'
  ? 'rgba(29, 78, 216, 0.15), transparent 80%'
  : 'rgba(108, 108, 108 , 0.15), transparent 80%';

  return (
    <div className="relative h-full" onMouseMove={handleMouseMove} suppressHydrationWarning >
      {/* The gradient overlay */}
      <div
        className="pointer-events-none fixed inset-0 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(400px at ${gradientPosition.x}% ${gradientPosition.y}%, ${gradientColors})`,
          pointerEvents: "none",
          zIndex: 11,
        }}
      />
      <div className="flex flex-grow flex-col h-screen w-screen items-center justify-between px-40 bg-slate-200 dark:bg-gray-800">
        {children}
      </div>
    </div>
  );
};

export default MouseGradient;
