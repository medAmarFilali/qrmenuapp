import { TextField, Button } from "@material-ui/core";
import { useStyles } from "./styleIntroForm";

const IntroForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.introFormContainer}>
      <TextField
        label="Nom du restaurant"
        variant="outlined"
        fullWidth
        className={classes.textField}
      />
      <TextField
        label="Addresse"
        variant="outlined"
        fullWidth
        className={classes.textField}
      />
      <TextField
        label="Numéro de téléphone"
        variant="outlined"
        fullWidth
        className={classes.textField}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.textField}
        fullWidth
      >
        Suivant
      </Button>
    </div>
  );
};

export default IntroForm;
