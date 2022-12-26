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
      <NavLink
        href={previousPagePath}
        sx={{
          position: "relative",
        }}
      >
        <span
          sx={{
            position: "absolute",
            transition: "transform 150ms ease-in-out",
            width: "100%",
            top: 0,
            left: 0,
            display: "block",
            "&:hover": {
              transform: "translateX(-2px)",
            },
          }}
        >
          ←
        </span>
        <span sx={{ ml: "1.25em" }}>{previousPageLabel}</span>
      </NavLink>
    ) : null}
  </Box>
);

export default SubpageNavigation;
