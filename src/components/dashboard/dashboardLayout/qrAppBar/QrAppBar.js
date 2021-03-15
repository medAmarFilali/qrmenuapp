import { useSelector } from "react-redux";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import QrMenuLogo from "../../../branding/QrMenuLogo";
import { useStyles } from "./styleQrAppBar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const QrAppBar = () => {
  const classes = useStyles();
  const restoData = useSelector((state) => state.data);
  return (
    <AppBar position="fixed" className={classes.appbarContainer}>
      <Toolbar className={classes.toolbarContainer}>
        <QrMenuLogo dark={false} marginBottom={0} />
        <div className={classes.restoTitleContainer}>
          <Typography variant="h5" className={classes.restoTitle}>
            Restaurant {restoData.name}
          </Typography>
        </div>
        <div className={classes.accountContainer}>
          <AccountCircleIcon className={classes.accountIcon} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default QrAppBar;
