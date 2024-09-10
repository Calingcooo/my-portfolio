import React, { useState } from "react";

const Tooltip = ({ children, content, position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        className="cursor-pointer"
      >
        {children}
      </div>

      {isVisible && (
        <div
          className={`absolute z-10 rounded-lg bg-gray-700 text-white text-sm px-3 py-2 shadow-md whitespace-nowrap ${
            position === "top"
              ? "bottom-full left-1/2 transform -translate-x-1/2 mb-4"
              : "top-full left-1/2 transform -translate-x-1/2 mt-4"
          }`}
        >
          {content}
          {/* Tooltip Arrow */}
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 ${
              position === "top" ? "top-full" : "bottom-full"
            }`}
          >
            <div
              className={`w-0 h-0 border-x-8 border-x-transparent ${
                position === "top"
                  ? "border-t-8 border-t-gray-700"
                  : "border-b-8 border-b-gray-700"
              }`}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
