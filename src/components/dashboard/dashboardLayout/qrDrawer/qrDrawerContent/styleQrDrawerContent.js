import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  drawerContentContainer: {
    // padding: theme.spacing(2),
  },
  menuIcon: {
    color: deepOrange[600],
  },
}));
