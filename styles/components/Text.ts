import { ComponentStyleConfig } from "@chakra-ui/theme";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const Text: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {},
  variants: {
    carouselText: (props: StyleFunctionProps) => ({
      color: mode("#000000", "#0f2e29")(props),
    }),
  },
  defaultProps: {},
};

export default Text;
