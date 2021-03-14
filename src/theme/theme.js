import { createMuiTheme } from "@material-ui/core/styles";

// const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  typography: {
    fontFamily: ["'Inter'", "open-sans"].join(","),
  },
});

export default theme;
