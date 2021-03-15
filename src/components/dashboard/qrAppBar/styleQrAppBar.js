import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  appbarContainer: {
    display: "flex",
    alignItems: "center",
  },
  toolbarContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
}));
