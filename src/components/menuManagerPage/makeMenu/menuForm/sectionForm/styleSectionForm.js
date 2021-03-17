import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    marginBottom: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0, 1, 0),
  },
  sectionHeader: {
    margin: theme.spacing(2, 0, 2, 0),
  },
  addDishButton: {
    marginTop: theme.spacing(1),
  },
  sectionHead: {
    backgroundColor: grey[300],
    borderRadius: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 2),
  },
  sectionHeadTitle: {
    padding: theme.spacing(1, 0),
    color: grey[800],
  },
  expandIconContainer: {
    display: "flex",
    alignItems: "center",
  },
}));
