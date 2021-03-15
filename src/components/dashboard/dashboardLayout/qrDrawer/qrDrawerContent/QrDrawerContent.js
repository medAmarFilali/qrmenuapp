import { Typography } from "@material-ui/core";
import { useStyles } from "./styleQrDrawerContent";

const QrDrawerContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.drawerContentContainer}>
      <Typography variant="subtitle2">This is the content</Typography>
    </div>
  );
};

export default QrDrawerContent;
