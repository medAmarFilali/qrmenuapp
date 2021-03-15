import { useStyles } from "./styleQrMenuLogo";
import CropFreeIcon from "@material-ui/icons/CropFree";
import { Typography } from "@material-ui/core";

const QrMenuLogo = ({ dark, marginBottom }) => {
  const classes = useStyles({ dark, marginBottom });

  return (
    <div className={classes.brandContainer}>
      <CropFreeIcon />
      <Typography variant="h5">QRMenu</Typography>
    </div>
  );
};

export default QrMenuLogo;
