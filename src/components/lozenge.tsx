import React from "react";
import classNames from "classnames";

const colors = {
  cyan: "bg-cyan-3 text-cyan-11 border border-cyan-6",
  indigo: "bg-indigo-3 text-indigo-11 border border-indigo-6",
  plum: "bg-plum-3 text-plum-11 border border-plum-6",
  gray: "bg-gray-3 text-gray-11 border border-gray-6",
};

const Lozenge = ({
  color = "gray",
  children,
}: {
  color?: "cyan" | "indigo" | "plum" | "gray";
  children: React.ReactNode;
}) => (
  <span
    className={classNames(
      "mb-2 mr-1 rounded-2xl px-2 py-0.5 text-xs font-medium",
      colors[color],
    )}
  >
    {children}
  </span>
);

export default Lozenge;
