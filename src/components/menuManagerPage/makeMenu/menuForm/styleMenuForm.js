import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  menuFormContainer: {
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 72px)",
    overflowY: "scroll",
  },
  menuFormTitle: {
    marginBottom: theme.spacing(2),
  },
  formPaper: {
    width: "100%",
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));
