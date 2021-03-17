import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
}));
