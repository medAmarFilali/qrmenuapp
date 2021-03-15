import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  appbarContainer: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbarContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  restoTitleContainer: {
    display: "flex",
    justifyContent: "center",
    flex: 1,
  },
  restoTitle: {
    color: "white",
  },
  accountContainer: {
    display: "flex",
    alignItems: "center",
  },
  accountIcon: {
    color: "white",
    fontSize: 30,
  },
}));
