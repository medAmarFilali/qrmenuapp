import { Paper, Typography } from "@material-ui/core";
import { useStyles } from "./stylesLoginForm";

const LoginForm = () => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.loginFormContainer}>
      <Typography variant="h6">This is the login Form</Typography>
    </Paper>
  );
};

export default LoginForm;
