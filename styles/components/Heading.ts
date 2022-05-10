import { ComponentStyleConfig } from "@chakra-ui/theme";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const Heading: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {},
  variants: {
    logo: (props: StyleFunctionProps) => ({
      _hover: {
        color: mode("green.400", "#fffade")(props),
        transition: "all 0.4s ease",
      },
      color: mode("green.500", "rgb(222,218,193)")(props),
    }),
  },
  defaultProps: {},
};

export default Heading;
