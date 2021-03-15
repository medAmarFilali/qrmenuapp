import { createMuiTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  typography: {
    fontFamily: ["'Inter'", "open-sans"].join(","),
  },
  overrides: {
    MuiButton: {
      root: {
        padding: defaultTheme.spacing(2, 2),
        borderRadius: defaultTheme.spacing(1),
      },
      // containedPrimary: {
      //   backgroundColor: deepOrange[600],
      //   "&:hover": {
      //     backgroundColor: deepOrange[800],
      //   },
      // },
    },
    MuiFormLabel: {
      root: {
        color: "#697f9c",
        "&$focused": {
          color: grey[800],
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: defaultTheme.spacing(1),
        borderColor: "#e2e8f0",
        backgroundColor: "white",
      },
      notchedOutline: {
        borderColor: "#e2e8f0!important",
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: defaultTheme.spacing(1),
      },
    },
  },
});

export default theme;
