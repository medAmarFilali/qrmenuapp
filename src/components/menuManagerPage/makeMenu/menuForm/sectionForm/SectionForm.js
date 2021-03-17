import { Typography, TextField, Divider, Button } from "@material-ui/core";
import { useStyles } from "./styleSectionForm";
import { produce } from "immer";
import DishForm from "./dishForm/DishForm";

const SectionForm = ({ id, index, dish, setMenuData, menuData }) => {
  const classes = useStyles();

  console.log(menuData);

  const handleSectionNameChange = (e) => {
    setMenuData(
      produce((draft) => {
        draft.dishes.forEach((dish) => {
          if (dish.id === id) {
            dish.sectionName = e.target.value;
          }
        });
      })
    );
  };

  return (
    <div className={classes.sectionContainer}>
      <Divider variant="middle" className={classes.divider} />
      <div className={classes.sectionHeader}>
        <div>
          <Typography variant="subtitle2">
            {menuData.dishes[index].sectionName
              ? menuData.dishes[index].sectionName
              : "Section"}
          </Typography>
        </div>
      </div>
      <TextField
        label="Nom de la section"
        variant="outlined"
        fullWidth
        value={dish.sectionName}
        onChange={handleSectionNameChange}
      />
      <DishForm />
      <Button
        variant="outlined"
        color="secondary"
        className={classes.addDishButton}
        fullWidth
      >
        Ajouter un plat
      </Button>
      <Divider variant="middle" className={classes.divider} />
    </div>
  );
};

export default SectionForm;
