import React from "react";
import { ButtonProps } from "../../@types/components/atoms/button";

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      type="button"
      className="flex w-full justify-center rounded bg-indigo-500 px-2 py-2 text-3xl font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
