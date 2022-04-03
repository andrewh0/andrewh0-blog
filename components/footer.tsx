import Link, { LinkProps } from "next/link";
import { Flex, Link as ThemeLink, LinkProps as ThemeLinkProps } from "theme-ui";

const StyledLink = ({
  href,
  children,
  ...rest
}: LinkProps & ThemeLinkProps) => {
  // Must add passHref to Link
  // https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
  return (
    <Link href={href} passHref>
      <ThemeLink {...rest}>{children}</ThemeLink>
    </Link>
  );
};

const Footer = () => {
  return (
    <Flex as="nav" mt={3} sx={{ flexWrap: "wrap" }}>
      <StyledLink href="mailto:hello@andrewho.me" p={2}>
        Email↗
      </StyledLink>
      <StyledLink href="/" p={2}>
        GitHub↗
      </StyledLink>
      <StyledLink href="/" p={2}>
        Twitter↗
      </StyledLink>
      <StyledLink href="/" p={2}>
        LinkedIn↗
      </StyledLink>
    </Flex>
  );
};

export default Footer;
