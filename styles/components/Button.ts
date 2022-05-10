import type { ComponentStyleConfig } from "@chakra-ui/theme";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const Button: ComponentStyleConfig = {
  baseStyle: (props: StyleFunctionProps) => ({
    _hover: {
      color: mode("gray.600", "#fffade")(props),
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
        color: mode("green.400", "#fffade")(props),
        borderBottom: mode(
          "5px solid #38A169",
          "5px solid rgb(222,218,193)"
        )(props),
      },
    }),
    search: (props: StyleFunctionProps) => ({
      bg: mode("gray.200", "blackAlpha.500")(props),
    }),
    cart: (props: StyleFunctionProps) => ({
      bg: mode("gray.50", "rgb(17,52,46)")(props),
    }),
    carouselArrow: (props: StyleFunctionProps) => ({
      opacity: "0.85",
      _hover: {
        backgroundColor: mode("#e4e8eb", "#17453d")(props),
        transition: "all 0.4s ease",
      },
      bg: mode("#F7FAFC", "rgb(17,52,46)")(props),
      zIndex: "2",
      position: "absolute",
      borderRadius: "50%",
    }),
    carouselButton: (props: StyleFunctionProps) => ({
      borderRadius: "24px",
      bg: mode("green.400", "#0f2e29")(props),
      _hover: {
        color: mode("gray.800", "#fffade")(props),
      },
    }),
  },
  defaultProps: {},
};

export default Button;
