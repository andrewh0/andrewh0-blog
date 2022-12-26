import { Box } from "theme-ui";
import NavLink from "components/navLink";

const SubpageNavigation = ({
  previousPagePath,
  previousPageLabel,
}: {
  previousPagePath?: string;
  previousPageLabel?: string;
}) => (
  <Box
    sx={{
      mt: [4, 5],
      mb: [4, 5],
    }}
  >
    {previousPagePath ? (
      <NavLink href={previousPagePath}>← {previousPageLabel}</NavLink>
    ) : null}
  </Box>
);

export default SubpageNavigation;
