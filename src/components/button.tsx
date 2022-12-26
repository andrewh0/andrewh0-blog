import { MEDIA_QUERY_DESKTOP_HOVER } from "lib/constants";
import { ThemeUICSSObject } from "theme-ui";

const variants: { [s: string]: ThemeUICSSObject } = {
  default: {
    color: "text",
    bg: "gray6",
    [MEDIA_QUERY_DESKTOP_HOVER]: {
      "&:hover": {
        bg: "gray5",
      },
    },
    "&:disabled": {
      color: "muted",
      bg: "gray4",
      cursor: "not-allowed",
    },
  },
  success: {
    color: "green12",
    bg: "green6",
    [MEDIA_QUERY_DESKTOP_HOVER]: {
      "&:hover": {
        bg: "green5",
      },
    },
    "&:disabled": {
      color: "green11",
      bg: "green4",
      cursor: "not-allowed",
    },
  },
  danger: {
    color: "red12",
    bg: "red6",
    [MEDIA_QUERY_DESKTOP_HOVER]: {
      "&:hover": {
        bg: "red5",
      },
    },
    "&:disabled": {
      color: "red11",
      bg: "red4",
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
        fontSize: 3,
        fontWeight: "bold",
        cursor: "pointer",
        m: 0,
        px: 4,
        py: 3,
        border: 0,
        borderRadius: 4,
        userSelect: "none",
        // Theme UI docs recommend using a variant prop (as with the following), but I prefer
        // colocating the variant with the button definition.
        // variant: `buttons.${variant}`,
        ...variants[variant],
      }}
    />
  );
};

export default Button;
