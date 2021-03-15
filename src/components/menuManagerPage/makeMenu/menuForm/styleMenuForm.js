import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  menuFormContainer: {
    display: "flex",
    flexDirection: "column",
  },
  menuFormTitle: {
    marginBottom: theme.spacing(2),
  },
  formPaper: {
    width: 450,
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
}));
