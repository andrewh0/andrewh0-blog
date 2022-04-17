import { Themed, Box, useThemeUI } from "theme-ui";

const ProjectTitle = ({ name, year }: { name: string; year: string }) => {
  const { theme }: { theme: any } = useThemeUI();

  return (
    <Box
      sx={{
        mt: theme.styles.h2.mt,
        mb: theme.styles.h2.mb,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Themed.h2 sx={{ m: 0 }}>{name}</Themed.h2>
      <span sx={{ fontFamily: "monospace", color: "gray11", fontSize: [1, 2] }}>
        {year}
      </span>
    </Box>
  );
};

export default ProjectTitle;
