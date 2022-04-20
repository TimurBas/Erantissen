import { ComponentStyleConfig } from "@chakra-ui/theme";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const Heading: ComponentStyleConfig = {
  baseStyle: (props: StyleFunctionProps) => ({
    _hover: {
      color: mode("green.400", "#fffade")(props),
      transition: "all 0.25s ease-in",
    },
    color: mode("green.500", "rgb(222,218,193)")(props),
  }),
  sizes: {},
  variants: {},
  defaultProps: {},
};

export default Heading;
