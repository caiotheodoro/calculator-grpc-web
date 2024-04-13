import { ButtonHTMLAttributes } from "react";

export interface ButtonProps{
  children: React.ReactNode;
  rest: ButtonHTMLAttributes<HTMLButtonElement>;
}