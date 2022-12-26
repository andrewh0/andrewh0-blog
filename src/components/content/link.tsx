import Link, { LinkProps } from "next/link";
import { LinkProps as ThemeLinkProps } from "theme-ui";
import { Themed } from "@theme-ui/mdx";

const StyledLink = ({ href, children, sx }: LinkProps & ThemeLinkProps) => {
  // Must add passHref to Link
  // https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
  return (
    <Link href={href} passHref>
      <Themed.a sx={sx}>{children}</Themed.a>
    </Link>
  );
};

export default StyledLink;