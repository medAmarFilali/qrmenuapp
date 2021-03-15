// import { Typography } from "@material-ui/core";
import { useStyles } from "./styleQrDrawer";
import { Drawer, Toolbar, Hidden } from "@material-ui/core";
import QrDrawerContent from "./qrDrawerContent/QrDrawerContent";

const QrDrawer = ({ handleDrawerToggle, mobileOpen }) => {
  const classes = useStyles();
  return (
    <>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{ keepMounted: true }}
        >
          <QrDrawerContent />
        </Drawer>
      </Hidden>
      <Hidden mdDown implementation="css">
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
      </Hidden>
    </>
  );
};

export default QrDrawer;
