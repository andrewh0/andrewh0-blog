import Link, { LinkProps } from "next/link";
import { Flex, NavLink, NavLinkProps } from "theme-ui";

const StyledNavLink = ({
  href,
  children,
  ...rest
}: LinkProps & NavLinkProps) => {
  // Must add passHref to Link
  // https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
  return (
    <Link href={href} passHref>
      <NavLink {...rest}>{children}</NavLink>
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
    <NavLink
      href="/"
      sx={{ fontSize: 2, fontWeight: 500, letterSpacing: "-0.03em" }}
    >
      Andrew Ho
    </NavLink>
    <Flex
      sx={{
        color: "text",
        alignItems: "center",
      }}
    >
      <StyledNavLink href="/about" mr={3} sx={{ fontWeight: "body" }}>
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
