import { useStyles } from "./styleLoginPage";
import LoginForm from "./loginForm/LoginForm";
import QrMenuLogo from "../branding/QrMenuLogo";

const LoginPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.loginContainer}>
      <QrMenuLogo dark={true} marginBottom={24} />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
