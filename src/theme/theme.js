import { createMuiTheme } from "@material-ui/core/styles";
import { grey, lightBlue, deepOrange } from "@material-ui/core/colors";

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  typography: {
    fontFamily: ["'Inter'", "open-sans"].join(","),
  },
  palette: {
    primary: {
      main: deepOrange[600],
    },
    secondary: {
      main: lightBlue[900],
    },
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "3rem",
        fontWeight: 300,
        color: grey[900],
      },
      h2: {
        fontSize: "2.5rem",
        fontWeight: 300,
        color: grey[900],
      },
      h3: {
        fontSize: "1.7rem",
        fontWeight: 700,
        color: grey[900],
      },
      h4: {
        fontSize: "1.4rem",
        fontWeight: 700,
        color: grey[900],
        // letterSpacing: 1,
      },
      h5: {
        fontSize: "1.3rem",
        fontWeight: 700,
        color: grey[900],
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 700,
        color: grey[900],
        letterSpacing: 2,
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: lightBlue[900],
        color: "white",
      },
    },
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
        padding: defaultTheme.spacing(2, 3, 4, 3),
      },
      elevation4: {
        boxShadow: "none",
      },
    },
  },
});

export default theme;
