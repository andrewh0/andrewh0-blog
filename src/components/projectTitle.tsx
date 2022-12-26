import { Box, useThemeUI } from "theme-ui";

const ProjectTitle = ({
  name,
  year,
}: {
  name: string;
  year: string;
  isActive?: boolean;
}) => {
  const { theme }: { theme: any } = useThemeUI();

  return (
    <Box
      sx={{
        mt: theme.styles.h2.mt,
        mb: theme.styles.h2.mb,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <h2
          sx={{
            my: 0,
            mr: 3,
            fontSize: [3, 4],
            fontWeight: "heading",
            letterSpacing: "-0.033em",
          }}
        >
          {name}
        </h2>
      </Box>
      <span sx={{ fontFamily: "monospace", color: "gray11", fontSize: [1, 2] }}>
        {year}
      </span>
    </Box>
  );
};

export default ProjectTitle;
