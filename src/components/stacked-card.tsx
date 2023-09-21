import React from "react";

const StackedCard = ({ children, gridCols = "grid-cols-[40%_1fr]" }) => {
  return (
    <div className="relative">
      <div
        className={`relative z-10 bg-white rounded-2xl grid place-items-center ${gridCols} p-12 w-full`}
      >
        {children}
      </div>

      <div className="absolute -z-5 h-20 px-4 -bottom-3 w-full">
        <div className="bg-gray-200 opacity-[.13] w-full h-full rounded-2xl" />
      </div>
    </div>
  );
};

export default StackedCard;
