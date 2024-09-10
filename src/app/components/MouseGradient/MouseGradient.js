"use client";

import React, { useState } from "react";

const MouseGradient = ({ children }) => {
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100; // Percentage relative to element's width
    const y = ((e.clientY - top) / height) * 100; // Percentage relative to element's height

    setGradientPosition({ x, y });
  };

  return (
    <div
      className="relative h-full"
      onMouseMove={handleMouseMove}
    >
      {/* The gradient overlay */}
      <div
      className="pointer-events-none fixed inset-0 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(400px at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(29, 78, 216, 0.15), transparent 80%)`,
          pointerEvents: "none",
          zIndex: 11
        }}
      />
      <div className="flex flex-grow flex-col h-screen w-screen items-center justify-between px-40 bg-gray-800">
        {children}
      </div>
    </div>
  );
};

export default MouseGradient;
