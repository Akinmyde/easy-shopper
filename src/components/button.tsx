import React from "react";

const variants = {
  primary: "bg-blue text-white",
  secondary: "bg-transparent border-[#030303] border text-[#030303]",
  tertiary: "bg-transparent text-[#262626]",
};

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  fullWidth?: boolean;
};

const Button = ({ variant = "primary", children, fullWidth }: Props) => {
  let variantClasses = variants[variant];

  return (
    <button
      type="button"
      className={`flex items-center justify-center gap-1 font-semibold  ${
        fullWidth ? "w-full" : "max-w-max"
      } h-[53px] hover:text-[#A5B4FC] ${variantClasses} outline-none  rounded-xl px-4`}
    >
      {children}
    </button>
  );
};

export default Button;
