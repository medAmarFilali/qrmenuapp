import { TextField } from "@material-ui/core";
import { useStyles } from "./styleDishForm";
import { produce } from "immer";
import clsx from "clsx";

const DishForm = ({ id, sectionId, index, setMenuData, menuData, dish }) => {
  const classes = useStyles();

  const handleDishNameChange = (e) => {
    setMenuData(
      produce((draft) => {
        draft.dishes.forEach((section) => {
          if (section.id === sectionId) {
            section.items.forEach((theDish) => {
              if (theDish.id === id) {
                theDish.dishName = e.target.value;
              }
            });
          }
        });
      })
    );
  };

  const handleDishPriceChange = (e) => {
    setMenuData(
      produce((draft) => {
        draft.dishes.forEach((section) => {
          if (section.id === sectionId) {
            section.items.forEach((theDish) => {
              if (theDish.id === id) {
                theDish.dishPrice = e.target.value;
              }
            });
          }
        });
      })
    );
  };

  const handleDishDescriptionChange = (e) => {
    setMenuData(
      produce((draft) => {
        draft.dishes.forEach((section) => {
          if (section.id === sectionId) {
            section.items.forEach((theDish) => {
              if (theDish.id === id) {
                theDish.dishDescription = e.target.value;
              }
            });
          }
        });
      })
    );
  };

  return (
    <div>
      <div className={classes.dishContainer}>
        <TextField
          label="Plat"
          variant="outlined"
          value={dish.dishName}
          onChange={handleDishNameChange}
          fullWidth
          className={clsx(classes.textField, classes.dish)}
        />
        <TextField
          label="Prix"
          variant="outlined"
          value={dish.dishPrice}
          onChange={handleDishPriceChange}
          fullWidth
          className={clsx(classes.textField, classes.price)}
        />
      </div>
      <TextField
        label="Description"
        variant="outlined"
        value={dish.dishDescription}
        onChange={handleDishDescriptionChange}
        fullWidth
        className={classes.textFieldDescription}
        rows={4}
      />
    </div>
  );
};

export default DishForm;
