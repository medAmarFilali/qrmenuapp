import { AppBar, Toolbar } from "@material-ui/core";
import QrMenuLogo from "../../branding/QrMenuLogo";
import { useStyles } from "./styleQrAppBar";

const QrAppBar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appbarContainer}>
        <Toolbar className={classes.toolbarContainer}>
          <QrMenuLogo dark={false} marginBottom={0} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default QrAppBar;
