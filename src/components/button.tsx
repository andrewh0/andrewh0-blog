import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

type ButtonProps = {
  variant?: keyof typeof variants;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  default:
    "text-gray-12 bg-gray-6 hover:bg-gray-5 disabled:text-gray-11 disabled:cursor-not-allowed disabled:bg-gray-4",
  success:
    "text-green-12 bg-green-6 hover:bg-green-5 disabled:text-green-11 disabled:cursor-not-allowed disabled:bg-green-4",
  danger:
    "text-red-12 bg-red-6 hover:bg-red-5 disabled:text-red-11 disabled:cursor-not-allowed disabled:bg-red-4",
};

const Button = ({ variant = "default", ...props }: ButtonProps) => {
  return (
    <button
      className={classNames(
        "inline-block w-32 cursor-pointer select-none rounded px-1 py-4 text-center text-xl font-bold",
        variants[variant],
      )}
      {...props}
    />
  );
};

export default Button;
