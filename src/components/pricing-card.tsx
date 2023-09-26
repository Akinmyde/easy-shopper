import React from "react";
import Button from "./button";

type Props = {
  title: string;
  amount: number;
  duration?: string;
  subtitle: string;
  isPrimary?: boolean;
};

const PricingCard = ({
  title,
  amount,
  duration = "month",
  subtitle,
  isPrimary = false,
}: Props) => {
  return (
    <div
      className={`bg-white rounded-2xl p-8 ${
        isPrimary ? "" : "my-6 z-10"
      } shadow-lg text-black-900`}
    >
      <p className="text-xl font-semibold">{title}</p>
      <div className="flex my-4">
        <p className="text-[32px] font-semibold">$</p>
        <p>
          <span className="text-7xl font-semibold">{amount}</span>
          <span className="text-xl">/{duration}</span>
        </p>
      </div>

      <p className="text-xl max-w-[70%] mb-16">{subtitle}</p>

      <Button
        variant={isPrimary ? "primary" : "secondary"}
        fullWidth
      >{`Get Started with ${title}`}</Button>
    </div>
  );
};

export default PricingCard;
