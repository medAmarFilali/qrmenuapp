import { Typography } from "@material-ui/core";
import { useStyles } from "./styleLoginPage";
import CropFreeIcon from "@material-ui/icons/CropFree";
import LoginForm from "./loginForm/LoginForm";

const LoginPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.loginContainer}>
      <div className={classes.brandContainer}>
        <CropFreeIcon />
        <Typography variant="h5">QRMenu</Typography>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
