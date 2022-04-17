import Link, { LinkProps } from "next/link";
import { Flex, NavLink, NavLinkProps } from "theme-ui";

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
          color: "text",
          "&:hover": {
            color: "text",
            textDecoration: "underline",
          },
          "&:focus": {
            color: "text",
            textDecoration: "underline",
          },
          ...sx,
        }}
      >
        {children}
      </NavLink>
    </Link>
  );
};

const Navigation = () => (
  <Flex
    as="nav"
    sx={{
      justifyContent: "space-between",
      flexWrap: "wrap",
      color: "text",
    }}
    mb={5}
  >
    <StyledNavLink
      href="/"
      sx={{
        fontSize: 3,
        fontWeight: 500,
        letterSpacing: "-0.03em",
      }}
    >
      Andrew Ho
    </StyledNavLink>
    <Flex
      sx={{
        color: "text",
        alignItems: "center",
      }}
    >
      <StyledNavLink
        href="/about"
        mr={3}
        sx={{
          fontWeight: "body",
        }}
      >
        About
      </StyledNavLink>
      {/* <StyledNavLink href="/notes" mr={3} sx={{ fontWeight: "body" }}>
        Notes
      </StyledNavLink> */}
      <StyledNavLink href="/projects" sx={{ fontWeight: "body" }}>
        Projects
      </StyledNavLink>
    </Flex>
  </Flex>
);

export default Navigation;
