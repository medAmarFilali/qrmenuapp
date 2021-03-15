// import { Typography } from "@material-ui/core";
import { useStyles } from "./styleQrDrawer";
import { Drawer, Toolbar } from "@material-ui/core";
import QrDrawerContent from "./qrDrawerContent/QrDrawerContent";

const QrDrawer = () => {
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      className={classes.drawerContainer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerWrapper}>
        <QrDrawerContent />
      </div>
    </Drawer>
  );
};

export default QrDrawer;
