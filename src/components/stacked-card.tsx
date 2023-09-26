import React from "react";

type Props = {
  children: React.ReactNode;
  gridCols?: string;
};

const StackedCard = ({
  children,
  gridCols = "md:grid-cols-[40%_1fr]",
}: Props) => {
  return (
    <div className="relative">
      <div
        className={`relative z-10 bg-white rounded-2xl grid place-items-center ${gridCols} p-6 md:p-12 w-full`}
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
