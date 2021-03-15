import { Typography, TextField, Paper } from "@material-ui/core";
import { useStyles } from "./styleMenuForm";

const MenuForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.menuFormContainer}>
      <Typography variant="h4" className={classes.menuFormTitle}>
        Formulaire menu
      </Typography>
      <Paper elevation={3} className={classes.formPaper}>
        <TextField
          label="Nom du Menu"
          variant="outlined"
          fullWidth
          className={classes.textField}
        />
      </Paper>
    </div>
  );
};

export default MenuForm;
