import { gray, green, red } from "@radix-ui/colors";
import { ThemeUICSSObject } from "theme-ui";

const variants: { [s: string]: ThemeUICSSObject } = {
  default: {
    color: "text",
    bg: gray.gray6,
    "&:hover": {
      bg: gray.gray5,
    },
    "&:disabled": {
      color: "muted",
      bg: gray.gray4,
      cursor: "not-allowed",
    },
  },
  success: {
    color: green.green12,
    bg: green.green6,
    "&:hover": {
      bg: green.green5,
    },
    "&:disabled": {
      color: green.green11,
      bg: green.green4,
      cursor: "not-allowed",
    },
  },
  danger: {
    color: red.red12,
    bg: red.red6,
    "&:hover": {
      bg: red.red5,
    },
    "&:disabled": {
      color: red.red11,
      bg: red.red4,
      cursor: "not-allowed",
    },
  },
};

// https://theme-ui.com/recipes/button/#button
const Button = ({ variant = "default", ...props }) => {
  return (
    <button
      {...props}
      sx={{
        appearance: "none",
        display: "inline-block",
        textAlign: "center",
        lineHeight: "inherit",
        textDecoration: "none",
        fontSize: "inherit",
        fontWeight: "bold",
        cursor: "pointer",
        m: 0,
        px: 3,
        py: 2,
        border: 0,
        borderRadius: 4,
        // Theme UI docs recommend using a variant prop (as with the following), but I prefer
        // colocating the variant with the button definition.
        // variant: `buttons.${variant}`,
        ...variants[variant],
      }}
    />
  );
};

export default Button;
