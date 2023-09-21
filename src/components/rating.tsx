import React, { useState } from "react";
import starIcon from "../images/star.svg";

type Props = {
  rating: number;
};

const Rating = ({ rating }: Props) => {
  return (
    <div className="flex gap-2">
      {[...Array(rating)].map((_, index) => (
        <img src={starIcon} key={index} width="27" height="17" />
      ))}
    </div>
  );
};

export default Rating;
