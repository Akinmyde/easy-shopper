import React from "react";

export type InputType = "search" | "text" | "number";

export interface InputProps {
  name?: string;
  type?: InputType;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
  required = false,
  disabled,
  onBlur,
}) => {
  return (
    <div className="grid gap-4">
      <label htmlFor={name} className="text-black-900">
        {label}
      </label>
      <input
        id={name}
        className="w-full h-[69px] p-2 rounded-xl bg-white text-black-900 font-semibold placeholder:text-black-900 focus:outline-none"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
