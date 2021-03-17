import { makeStyles } from "@material-ui/core";
// import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: "white",
  },
  sectionHeader: {
    backgroundColor: "black",
    padding: theme.spacing(1, 0),
    width: "100%",
  },
  sectionTitle: {
    color: "white",
    textAlign: "center",
  },
  sectionBody: {
    padding: theme.spacing(2, 0),
  },
}));
