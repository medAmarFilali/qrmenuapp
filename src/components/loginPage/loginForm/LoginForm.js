import { Paper, Typography, TextField, Button } from "@material-ui/core";
import { useStyles } from "./stylesLoginForm";

const LoginForm = () => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.loginFormContainer}>
      <Typography variant="h5" className={classes.loginTitle}>
        Connexion
      </Typography>
      <TextField
        variant="outlined"
        label="Email"
        fullWidth
        className={classes.textField}
      />
      <TextField
        type="password"
        variant="outlined"
        label="Mot de passe"
        className={classes.textField}
        fullWidth
      />
      <Button color="secondary" variant="contained" fullWidth>
        Se Connecter
      </Button>
    </Paper>
  );
};

export default LoginForm;
