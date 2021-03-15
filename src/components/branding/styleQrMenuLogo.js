import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  brandContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: (props) => {
      return props.marginBottom;
    },
    "& svg": {
      marginRight: theme.spacing(1),
      color: deepOrange[600],
      fontSize: 30,
    },
    "& h5": {
      fontWeight: 700,
      color: (props) => (props.dark ? grey[800] : "white"),
    },
  },
}));
