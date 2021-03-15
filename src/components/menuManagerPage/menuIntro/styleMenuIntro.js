import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  menuIntroContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 64px) ",
    flexDirection: "column",
  },
  menuText: {
    paddingBottom: theme.spacing(3),
  },
}));
