import { createTheme } from "@mui/material";
import { grey, orange, deepOrange, green } from "@mui/material/colors";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          borderRadius: "1rem",
          width: "200px",
          textTransform: "inherit",
          "&:hover": {
            backgroundColor: "#00022b",
          },
        },
      },
    },
    // MuiFab:{
    //   styleOverrides:{
    //     secondary:{
    //     backgroundColor:"#030720fe"
    //     }
    //   }
    // }
  },

  typography: {
    fontFamily: [
      "apple-system",
      "BlinkMacSystemFont",
      '"Sagoe UI"',
      "Apple Color Emoji",
    ].join(","),
  },
  palette: {
    primary: {
      // main: "#cd0000",
      main: "#f6005e",
      white: "#ffffff",
      lightPink: "#f3bddb",
      others: "#020017fb",
      contrastText: "#fccccc",
    },

    secondary: {
      main: "#020017fb",
      dark: grey[200],
    },
    custom: {
      light: "#ffa726",
      main: "ffa726",
      dark: "ffa726",
      contrastText: "rgba(0,0,0,0.87)",
    },
    text: {
      primary: "#ffffff",
    },
  },
});
export default theme;
