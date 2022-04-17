import { Box } from "theme-ui";

const Lozenge = ({ color = "gray", sx = {}, ...props }) => (
  <Box
    as="span"
    sx={{
      bg: `${color}3`,
      color: `${color}11`,
      border: "1px solid",
      borderColor: `${color}6`,
      py: "0.05em",
      px: 2,
      mr: 1,
      mb: 2,
      borderRadius: 16,
      fontSize: 0,
      fontWeight: 500,
      ...sx,
    }}
    {...props}
  />
);

export default Lozenge;
