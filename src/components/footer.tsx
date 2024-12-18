import React, { AnchorHTMLAttributes } from "react";
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
      className="relative text-gray-11 transition hover:text-gray-12 hover:no-underline focus:text-gray-12 active:text-gray-12"
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

const Footer = () => (
  <footer className="mb-4 mt-32 flex flex-col gap-y-2 px-2 text-xs">
    <div className="flex flex-wrap gap-x-8 gap-y-1">
      <StyledLink
        href="mailto:hello@andrewho.me"
        isExternal
        title="hello@andrewho.me"
      >
        Email
      </StyledLink>
      <StyledLink
        href="https://github.com/andrewh0"
        isExternal
        title="andrewh0 on GitHub"
      >
        GitHub
      </StyledLink>
      <StyledLink
        href="https://bsky.app/profile/andrewho.me"
        isExternal
        title="andrewho.me on Bluesky"
      >
        Bluesky
      </StyledLink>
      <StyledLink
        href="https://x.com/andrewlho_codes"
        isExternal
        title="andrewlho_codes on X"
      >
        X
      </StyledLink>
      <StyledLink
        rel="me"
        href="https://mastodon.social/@andrewh0"
        isExternal
        title="andrewh0 on Mastodon"
      >
        Mastodon
      </StyledLink>
      <StyledLink
        href="https://linkedin.com/in/andrewh0"
        isExternal
        title="andrewh0 on LinkedIn"
      >
        LinkedIn
      </StyledLink>
    </div>
    <div className="flex-start flex flex-col gap-y-2 sm:flex-row sm:justify-between">
      <StyledLink href="/pale-blue-dot">
        <i>On a mote of dust suspended in a sunbeam.</i>
      </StyledLink>
      <StyledLink href="/sf">
        San Francisco, {new Date().getFullYear()}
      </StyledLink>
    </div>
  </footer>
);

export default Footer;
