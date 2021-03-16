import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  classicContainer: {
    display: "flex",
    flexDirection: "column",
  },
  classicHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    backgroundColor: grey[200],
    flexDirection: "column",
  },
}));
