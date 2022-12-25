import Link, { LinkProps } from "next/link";
import { Flex, NavLink, NavLinkProps, Text } from "theme-ui";

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
          color: "muted",
          "&:hover": {
            color: "muted",
            textDecoration: "underline",
          },
          "&:focus": {
            color: "muted",
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
    mt={2}
    mb={5}
  >
    <Text
      sx={{
        fontSize: 3,
        fontWeight: 500,
        letterSpacing: "-0.03em",
      }}
    >
      Andrew Ho
    </Text>
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
          color: "gray11",
        }}
      >
        About
      </StyledNavLink>
      {/* <StyledNavLink
        href="/notes"
        mr={3}
        sx={{ fontWeight: "body", color: "gray11" }}
      >
        Notes
      </StyledNavLink> */}
      <StyledNavLink
        href="/projects"
        sx={{ fontWeight: "body", color: "gray11" }}
      >
        Projects
      </StyledNavLink>
    </Flex>
  </Flex>
);

export default Navigation;
