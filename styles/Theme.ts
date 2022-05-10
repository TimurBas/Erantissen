// theme.js
import { extendTheme } from "@chakra-ui/react";
import Button from "./components/Button";
import Link from "./components/Link";
import Image from "./components/Image";
import Heading from "./components/Heading";
import Text from "./components/Text";

import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode("black", "rgb(222,218,193)")(props),
        bg: mode("gray.50", "rgb(17,52,46)")(props),
      },
    }),
  },
  fontSizes: {
    xs: "13px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    "2xl": "32px",
    "3xl": "38px",
    "4xl": "48px",
    "5xl": "56px",
  },
  components: {
    Button,
    Link,
    Image,
    Heading,
    Text,
  },
});

export default theme;
