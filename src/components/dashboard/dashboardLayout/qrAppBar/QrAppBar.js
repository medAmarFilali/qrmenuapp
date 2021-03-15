import { useSelector } from "react-redux";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import QrMenuLogo from "../../../branding/QrMenuLogo";
import { useStyles } from "./styleQrAppBar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";

const QrAppBar = ({ handleDrawerToggle, mobileOpen }) => {
  const classes = useStyles();
  const restoData = useSelector((state) => state.data);

  return (
    <AppBar position="fixed" className={classes.appbarContainer}>
      <Toolbar className={classes.toolbarContainer}>
        <QrMenuLogo dark={false} marginBottom={0} />
        <div>
          <IconButton
            color="inherit"
            edge="start"
            className={classes.menuButton}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className={classes.serviceDetails}>
          <div className={classes.restoTitleContainer}>
            <Typography variant="h5" className={classes.restoTitle}>
              Restaurant {restoData.name}
            </Typography>
          </div>
          <div className={classes.accountContainer}>
            <AccountCircleIcon className={classes.accountIcon} />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default QrAppBar;
