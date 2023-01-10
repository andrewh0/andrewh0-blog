import { Themed } from "@theme-ui/mdx";
import { MEDIA_QUERY_DESKTOP_HOVER } from "lib/constants";
import Link, { LinkProps } from "next/link";
import React from "react";
import {
  Flex,
  Link as ThemeLink,
  LinkProps as ThemeLinkProps,
  Box,
} from "theme-ui";

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
            [MEDIA_QUERY_DESKTOP_HOVER]: {
              "&:hover": {
                textDecoration: "none",
                color: "text",
              },
            },
            "&:active": {
              color: "text",
            },
            "&:focus": {
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
                [MEDIA_QUERY_DESKTOP_HOVER]: {
                  "&:hover": {
                    transform: "translateX(2px) translateY(-2px)",
                  },
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

const LinkContainer = ({
  children,
  isHidden = false,
}: {
  children: React.ReactNode;
  isHidden?: boolean;
}) => (
  <span
    sx={{
      mr: 3,
      mb: 1,
      "&:last-child": {
        mr: 0,
      },
      display: isHidden ? "none" : "auto",
    }}
  >
    {children}
  </span>
);

const Footer = () => (
  <Flex
    as="footer"
    mt={6}
    mb={3}
    px={2}
    sx={{ fontSize: 0, display: "flex", flexDirection: "column" }}
  >
    <Box sx={{ flexWrap: "wrap" }} mb={2}>
      <LinkContainer>
        <StyledLink
          href="mailto:hello@andrewho.me"
          isExternal
          title="hello@andrewho.me"
        >
          Email
        </StyledLink>
      </LinkContainer>
      <LinkContainer>
        <StyledLink
          href="https://github.com/andrewh0"
          isExternal
          title="andrewh0 on GitHub"
        >
          GitHub
        </StyledLink>
      </LinkContainer>
      <LinkContainer>
        <StyledLink
          href="https://twitter.com/andrewlho_codes"
          isExternal
          title="andrewlho_codes on Twitter"
        >
          Twitter
        </StyledLink>
      </LinkContainer>
      <LinkContainer isHidden>
        <StyledLink
          rel="me"
          href="https://mastodon.social/@andrewh0"
          isExternal
          title="andrewh0 on Mastodon"
        >
          Mastodon
        </StyledLink>
      </LinkContainer>
      <LinkContainer>
        <StyledLink
          href="https://linkedin.com/in/andrewh0"
          isExternal
          title="andrewh0 on LinkedIn"
        >
          LinkedIn
        </StyledLink>
      </LinkContainer>
    </Box>
    <Box
      sx={{
        display: "flex",
        justifyContent: ["flex-start", "space-between"],
        flexDirection: ["column", "row"],
      }}
    >
      <StyledLink href="/pale-blue-dot">
        <i>On a mote of dust suspended in a sunbeam.</i>
      </StyledLink>
      <span sx={{ color: "muted" }}>
        San Francisco, {new Date().getFullYear()}
      </span>
    </Box>
  </Flex>
);

export default Footer;
