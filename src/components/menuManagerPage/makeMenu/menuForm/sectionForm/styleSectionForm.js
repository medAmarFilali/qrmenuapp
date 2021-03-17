import { makeStyles } from "@material-ui/core/styles";

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
}));
