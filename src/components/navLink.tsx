import { MEDIA_QUERY_DESKTOP_HOVER } from "lib/constants";
import Link, { LinkProps } from "next/link";
import { NavLinkProps } from "theme-ui";

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
      <a
        {...rest}
        sx={{
          display: "inline-block",
          transition: "color 150ms ease-in-out",
          color: "muted",
          fontWeight: "body",
          textDecoration: "none",
          [MEDIA_QUERY_DESKTOP_HOVER]: {
            "&:hover": {
              color: "text",
            },
          },
          "&:active": {
            color: "text",
          },
          "&:focus": {
            color: "text",
          },
          ...sx,
        }}
      >
        {children}
      </a>
    </Link>
  );
};

export default StyledNavLink;
