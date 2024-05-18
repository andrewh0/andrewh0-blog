import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

type ButtonProps = {
  variant?: keyof typeof variants;
  size?: "sm" | "default" | "lg";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  default:
    "text-gray-12 bg-gray-6 hover:bg-gray-5 disabled:text-gray-11 disabled:cursor-not-allowed disabled:bg-gray-4",
  success:
    "text-green-12 bg-green-6 hover:bg-green-5 disabled:text-green-11 disabled:cursor-not-allowed disabled:bg-green-4",
  danger:
    "text-red-12 bg-red-6 hover:bg-red-5 disabled:text-red-11 disabled:cursor-not-allowed disabled:bg-red-4",
};

const sizes = {
  sm: "py-2 px-3 text-sm rounded",
  default: "py-2 px-3 text-base rounded-lg",
  lg: "py-3 px-4 text-xl rounded-xl",
};

const Button = ({
  variant = "default",
  size = "default",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        "inline-block w-full cursor-pointer select-none text-center font-bold sm:w-auto",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
};

export default Button;
