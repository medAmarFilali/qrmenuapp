import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    marginBottom: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0, 1, 0),
  },
  dishContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  textField: {
    margin: theme.spacing(2, 0, 1, 0),
  },
  textFieldDesription: {
    marginBottom: theme.spacing(2),
  },
  dish: {
    width: "67%",
  },
  price: {
    width: "30%",
  },
  sectionHeader: {
    margin: theme.spacing(2, 0, 2, 0),
  },
}));
