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

const Navigation = () => {
  return (
    <Flex
      as="nav"
      mb={3}
      sx={{ justifyContent: "space-between", flexWrap: "wrap" }}
    >
      <NavLink href="/" p={2}>
        Andrew Ho
      </NavLink>
      <Flex>
        <StyledNavLink href="/about" p={2} mr={2}>
          About
        </StyledNavLink>
        <StyledNavLink href="/posts" p={2} mr={2}>
          Writing
        </StyledNavLink>
        <StyledNavLink href="/projects" p={2}>
          Projects
        </StyledNavLink>
      </Flex>
    </Flex>
  );
};

export default Navigation;
