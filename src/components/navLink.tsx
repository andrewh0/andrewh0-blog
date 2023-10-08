import Link, { LinkProps } from "next/link";
import classNames from "classnames";
import { AnchorHTMLAttributes } from "react";

const StyledNavLink = ({
  href,
  children,
  className,
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Link
    href={href}
    className={classNames(
      "inline-block text-gray-11 no-underline transition hover:text-gray-12 focus:text-gray-12 active:text-gray-12",
      className,
    )}
  >
    {children}
  </Link>
);

export default StyledNavLink;
