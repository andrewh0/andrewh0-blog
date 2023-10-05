import Link, { LinkProps } from "next/link";

const StyledLink = ({
  href,
  children,
  ...props
}: LinkProps & { children: React.ReactNode }) => {
  return (
    <Link href={href} {...props}>
      <a className="text-blue-11 hover:underline focus:underline active:underline">
        {children}
      </a>
    </Link>
  );
};

export default StyledLink;
