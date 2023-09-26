import React from "react";

import checkmarkIcon from "../images/check.svg";

const Checkmark = () => {
  return (
    <div className="bg-blue w-[35px] h-[34px] rounded-full grid place-items-center">
      <img height={12} width={12} src={checkmarkIcon} />
    </div>
  );
};

export default Checkmark;
