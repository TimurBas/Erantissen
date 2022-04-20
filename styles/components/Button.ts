import type { ComponentStyleConfig } from "@chakra-ui/theme";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const Button: ComponentStyleConfig = {
  baseStyle: (props: StyleFunctionProps) => ({
    _hover: {
      color: mode("green.400", "rgb(222,218,193)")(props),
    },
    _focus: {
      boxShadow: "none",
    },
    fontWeight: "semibold",
  }),
  sizes: {
    xl: {
      h: "56px",
      fontSize: "lg",
      px: "32px",
    },
  },
  variants: {
    primary: (props: StyleFunctionProps) => ({
      borderRadius: "none",
      _hover: {
        borderBottom: mode(
          "5px solid #38A169",
          "5px solid rgb(222,218,193)"
        )(props),
      },
      color: mode("white.500", "black.500")(props),
    }),
  },
  defaultProps: {},
};

export default Button;
