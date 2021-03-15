import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  drawerContainer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerWrapper: {
    overflow: "auto",
  },
}));
