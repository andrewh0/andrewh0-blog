import { Box } from "theme-ui";
import Image, { ImageProps } from "next/image";

const StyledImage = ({ alt, ...props }: ImageProps) => (
  <Box sx={{ my: 5, display: "flex" }}>
    <Image
      style={{
        borderRadius: "16px",
      }}
      alt={alt}
      {...props}
    />
  </Box>
);

export default StyledImage;
