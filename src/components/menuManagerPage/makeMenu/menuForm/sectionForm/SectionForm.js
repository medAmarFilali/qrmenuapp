import { Typography, TextField, Divider } from "@material-ui/core";
import { useStyles } from "./styleSectionForm";
import clsx from "clsx";

const SectionForm = ({ dish, setMenuData, menuData }) => {
  const classes = useStyles();
  console.log(dish);
  return (
    <div className={classes.sectionContainer}>
      <Divider variant="middle" className={classes.divider} />
      <div className={classes.sectionHeader}>
        <div>
          <Typography variant="subtitle2">Section 1</Typography>
        </div>
      </div>
      <TextField
        label="Nom de la section"
        variant="outlined"
        fullWidth
        onClick={(e) =>
          setMenuData({
            ...menuData,
            dishes: [...menuData.dishes],
          })
        }
      />
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

export default SectionForm;
