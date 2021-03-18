import { makeStyles } from "@material-ui/core/styles";
import { red, grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  dishContainer: {
    display: "flex",
    flexDirection: "column",
  },
  dishHeader: {
    display: "flex",
    margin: theme.spacing(2, 0, 0, 0),
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: grey[100],
    borderRadius: theme.spacing(1),
    "& h6": {
      marginLeft: theme.spacing(1),
    },
  },
  delIcon: {
    fontSize: 20,
    color: red[600],
  },
  dishDetails: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
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
