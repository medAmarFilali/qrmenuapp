import { makeStyles } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  classicContainer: {
    display: "flex",
    flexDirection: "column",
  },
  classicHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    backgroundColor: lightBlue[200],
    flexDirection: "column",
  },
}));
