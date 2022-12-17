import { Themed, Box, useThemeUI } from "theme-ui";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes({ from: { opacity: 0.25 }, to: { opacity: 1 } });

const ProjectTitle = ({
  name,
  year,
  isActive = false,
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
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Themed.h2 sx={{ my: 0, mr: "16px" }}>{name}</Themed.h2>
        {isActive && (
          <Box
            title="Actively developed"
            sx={{
              display: "inline-block",
              bg: "orange9",
              color: "white",
              borderRadius: "100%",
              fontSize: 0,
              width: "8px",
              height: "8px",
              animation: `${fadeIn} 2s ease-out infinite alternate`,
            }}
          />
        )}
      </Box>
      <span sx={{ fontFamily: "monospace", color: "gray11", fontSize: [1, 2] }}>
        {year}
      </span>
    </Box>
  );
};

export default ProjectTitle;
