import { Box, BoxProps } from "theme-ui";

const ContentContainer = (props: BoxProps) => {
  return (
    <Box
      css={`
        display: flex;
        flex-direction: column;
        max-width: 800px;
        height: 100%;
        overflow: hidden;
        overscroll-behavior-y: none;
        margin: auto;
      `}
      p={3}
      {...props}
    />
  );
};

export default ContentContainer;
