import React, { AnchorHTMLAttributes } from "react";
import classNames from "classnames";
import Link, { LinkProps } from "next/link";

type CustomLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
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
  return (
    <Link
      href={href}
      className="relative mr-3 text-gray-11 transition hover:text-gray-12 hover:no-underline focus:text-gray-12 active:text-gray-12"
      {...isExternalProps}
      {...rest}
    >
      {children}
      {isExternal ? (
        <span className="absolute left-0 top-0 block w-[calc(100%+1em)] text-right transition-transform hover:-translate-y-0.5 hover:translate-x-0.5">
          ↗
        </span>
      ) : (
        ""
      )}
    </Link>
  );
};

const LinkContainer = ({
  children,
  isHidden = false,
}: {
  children: React.ReactNode;
  isHidden?: boolean;
}) => (
  <span className={classNames("mb-1", isHidden ? "hidden" : "inline")}>
    {children}
  </span>
);

const Footer = () => (
  <footer className="mb-4 mt-32 flex flex-col px-2 text-xs">
    <div className="mb-2 flex flex-wrap space-x-4">
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
          href="https://x.com/andrewlho_codes"
          isExternal
          title="andrewlho_codes on X"
        >
          X
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
    </div>
    <div className="flex-start flex flex-col sm:flex-row sm:justify-between">
      <StyledLink href="/pale-blue-dot">
        <i>On a mote of dust suspended in a sunbeam.</i>
      </StyledLink>
      <span className="text-gray-11">
        San Francisco, {new Date().getFullYear()}
      </span>
    </div>
  </footer>
);

export default Footer;
