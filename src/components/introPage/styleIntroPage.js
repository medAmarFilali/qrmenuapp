import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  introContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  paperContainer: {
    display: "flex",
    justifyContent: "center",
    width: 450,
    padding: theme.spacing(),
  },
}));
