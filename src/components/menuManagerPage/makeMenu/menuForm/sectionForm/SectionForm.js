import { Typography, TextField, Divider, Button } from "@material-ui/core";
import { useStyles } from "./styleSectionForm";
import { produce } from "immer";
import DishForm from "./dishForm/DishForm";
import { v4 as uuidv4 } from "uuid";

const SectionForm = ({ id, index, dish, setMenuData, menuData }) => {
  const classes = useStyles();

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

  const handleAddDish = () => {
    setMenuData(
      produce((draft) => {
        draft.dishes[index].items.push({
          id: uuidv4(),
          dishName: "",
          dishPrice: "",
          dishDescription: "",
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
      {menuData.dishes[index].items.map((dish, index) => (
        <DishForm
          key={dish.id}
          sectionId={id}
          id={dish.id}
          index={index}
          setMenuData={setMenuData}
          menuData={menuData}
          dish={dish}
        />
      ))}
      <Button
        variant="outlined"
        color="secondary"
        className={classes.addDishButton}
        onClick={handleAddDish}
        fullWidth
      >
        Ajouter un plat
      </Button>
      <Divider variant="middle" className={classes.divider} />
    </div>
  );
};

export default SectionForm;
