import { TextField, Typography, IconButton } from "@material-ui/core";
import { useStyles } from "./styleDishForm";
import { produce } from "immer";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
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

  const handleDishDelete = (e, id) => {
    setMenuData(
      produce((draft) => {
        const sectionIndex = draft.dishes.findIndex(
          (item) => item.id === sectionId
        );
        if (sectionIndex !== -1) {
          const dishIndex = draft.dishes[sectionIndex].items.findIndex(
            (item) => item.id === id
          );
          if (dishIndex !== -1)
            draft.dishes[sectionIndex].items.splice(dishIndex, 1);
        }
      })
    );
  };

  return (
    <div>
      <div className={classes.dishContainer}>
        <div className={classes.dishHeader}>
          <Typography variant="subtitle2">
            {dish.dishName ? dish.dishName : "Plat"}
          </Typography>
          <svg width="120" height="2" xmlns="http://www.w3.org/2000/svg">
            <path d="M 2 2 L 120 2" stroke="#333333" />
          </svg>
          <IconButton onClick={(e) => handleDishDelete(e, id)}>
            <HighlightOffIcon className={classes.delIcon} />
          </IconButton>
        </div>
        <div className={classes.dishDetails}>
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
      </div>
    </div>
  );
};

export default DishForm;
