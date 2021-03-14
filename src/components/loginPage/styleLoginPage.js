import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    "& svg": {
      marginRight: theme.spacing(1),
      color: deepOrange[600],
      fontSize: 30,
    },
    "& h5": {
      fontWeight: 700,
      color: grey[800],
    },
  },
}));
