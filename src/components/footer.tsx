import Link, { LinkProps } from "next/link";
import { Flex, Link as ThemeLink, LinkProps as ThemeLinkProps } from "theme-ui";

type CustomLinkProps = LinkProps &
  ThemeLinkProps & {
    isExternal?: boolean;
  };

const StyledLink = ({
  href,
  isExternal = false,
  children,
  ...rest
}: CustomLinkProps) => {
  const isExternalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  // Must add passHref to Link
  // https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
  return (
    <>
      <Link href={href} passHref>
        <ThemeLink
          {...isExternalProps}
          sx={{
            transition: "color 150ms ease-in-out",
            color: "muted",
            "&:hover": {
              textDecoration: "none",
              color: "text",
            },
            position: "relative",
            mr: "1.25em",
          }}
          {...rest}
        >
          {children}
          {isExternal ? (
            <span
              sx={{
                position: "absolute",
                transition: "transform 150ms ease-in-out",
                width: "calc(100% + 1em)",
                top: 0,
                left: 0,
                display: "block",
                textAlign: "right",
                "&:hover": {
                  transform: "translateX(2px) translateY(-2px)",
                },
              }}
            >
              ↗
            </span>
          ) : (
            ""
          )}
        </ThemeLink>
      </Link>
    </>
  );
};

const Footer = () => (
  <Flex as="footer" mt={5} mb={3} px={2} sx={{ flexWrap: "wrap", fontSize: 0 }}>
    <span sx={{ mr: 3 }}>
      <StyledLink
        href="mailto:hello@andrewho.me"
        isExternal
        title="hello@andrewho.me"
      >
        Email
      </StyledLink>
    </span>
    <span sx={{ mr: 3 }}>
      <StyledLink
        href="https://github.com/andrewh0"
        isExternal
        title="andrewh0 on GitHub"
      >
        GitHub
      </StyledLink>
    </span>
    <span sx={{ mr: 3 }}>
      <StyledLink
        href="https://twitter.com/andrewlho_codes"
        isExternal
        title="andrewlho_codes on Twitter"
      >
        Twitter
      </StyledLink>
    </span>
    <span>
      <StyledLink
        href="https://linkedin.com/in/andrewh0"
        isExternal
        title="andrewh0 on LinkedIn"
      >
        LinkedIn
      </StyledLink>
    </span>
  </Flex>
);

export default Footer;
