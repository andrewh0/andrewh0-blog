import Link, { LinkProps } from "next/link";
import { NavLink, NavLinkProps } from "theme-ui";

const StyledNavLink = ({
  href,
  children,
  sx,
  ...rest
}: LinkProps & NavLinkProps) => {
  // Must add passHref to Link
  // https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
  return (
    <Link href={href} passHref>
      <NavLink
        {...rest}
        sx={{
          transition: "color 150ms ease-in-out",
          color: "muted",
          fontWeight: "body",
          textDecoration: "none",
          "&:hover": {
            color: "text",
          },
          "&:focus": {
            color: "text",
          },
          ...sx,
        }}
      >
        {children}
      </NavLink>
    </Link>
  );
};

export default StyledNavLink;
