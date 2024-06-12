"use client";

import { Roboto_Mono } from "next/font/google";
import { createTheme, PaletteOptions } from "@mui/material/styles";
import { darkScrollbar } from "@mui/material";

const robotoMono = Roboto_Mono({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const palette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#5ab53f",
  },
  secondary: {
    main: "#993fb5",
  },
  background: {
    default: "#000000",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#FFFFFF",
  },
};

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...darkScrollbar(),
          height: "100%",
        },
        a: {
          color: "white",
          "&:hover": {
            color: "grey",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: robotoMono.style.fontFamily,
  },
  palette: palette,
});

export default theme;
