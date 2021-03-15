import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  dashboardContainer: {
    display: "flex",
  },
  contentContainer: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.spacing(6),
  },
}));
