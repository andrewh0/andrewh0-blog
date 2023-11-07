import NavLink from "components/navLink";

const SubpageNavigation = ({
  previousPagePath,
  previousPageLabel,
}: {
  previousPagePath?: string;
  previousPageLabel?: string;
}) => (
  <div className="mb-16 mt-16 sm:mb-16 sm:mt-32">
    {previousPagePath ? (
      <NavLink href={previousPagePath} className="relative">
        <span className="absolute left-0 top-0 block w-full transition-transform hover:-translate-x-0.5">
          ←
        </span>
        <span className="ml-5">{previousPageLabel}</span>
      </NavLink>
    ) : null}
  </div>
);

export default SubpageNavigation;
