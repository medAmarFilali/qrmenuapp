import { TextField } from "@material-ui/core";
import { useStyles } from "./styleDishForm";
import clsx from "clsx";

const DishForm = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.dishContainer}>
        <TextField
          label="Plat"
          variant="outlined"
          fullWidth
          className={clsx(classes.textField, classes.dish)}
        />
        <TextField
          label="Prix"
          variant="outlined"
          fullWidth
          className={clsx(classes.textField, classes.price)}
        />
      </div>
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        className={classes.textFieldDescription}
        rows={4}
      />
    </div>
  );
};

export default DishForm;
