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
    <Flex as="footer" mt={3} sx={{ flexWrap: "wrap", fontSize: 1 }}>
      <StyledLink href="mailto:hello@andrewho.me" mr={3}>
        Email↗
      </StyledLink>
      <StyledLink href="https://github.com/andrewh0" mr={3}>
        GitHub↗
      </StyledLink>
      <StyledLink href="https://twitter.com/andrewlho_codes" mr={3}>
        Twitter↗
      </StyledLink>
      <StyledLink href="https://linkedin.com/in/andrewh0">LinkedIn↗</StyledLink>
    </Flex>
  );
};

export default Footer;
