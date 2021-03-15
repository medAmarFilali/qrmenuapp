import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  loginFormContainer: {
    width: 350,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(2, 3, 4, 3),
  },
  loginTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: 600,
    color: grey[800],
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
}));
