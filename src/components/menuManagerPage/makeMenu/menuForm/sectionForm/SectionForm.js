import {
  Typography,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from "@material-ui/core";
import { useStyles } from "./styleSectionForm";
import { produce } from "immer";
import DishForm from "./dishForm/DishForm";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { v4 as uuidv4 } from "uuid";
import { Draggable } from "react-beautiful-dnd";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";

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

  const handleSectionDelete = (e, theId) => {
    e.stopPropagation();

    setMenuData(
      produce((draft) => {
        const theIndex = draft.dishes.findIndex((item) => item.id === theId);
        if (theIndex !== -1) draft.dishes.splice(index, 1);
      })
    );
  };

  return (
    <Draggable draggableId={dish.id} index={index}>
      {(provided) => {
        console.log(provided);
        return (
          <div
            className={classes.sectionContainer}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className={classes.sectionHeader}
              >
                <div
                  {...provided.dragHandleProps}
                  className={classes.dragHandleContainer}
                >
                  <DragIndicatorIcon className={classes.dragHandle} />
                </div>
                <div>
                  <Typography
                    variant="subtitle2"
                    className={classes.sectionHeadTitle}
                  >
                    {menuData.dishes[index].sectionName
                      ? menuData.dishes[index].sectionName
                      : "Section"}
                  </Typography>
                </div>
                <div className={classes.deleteIconContainer}>
                  <IconButton onClick={(e) => handleSectionDelete(e, id)}>
                    <HighlightOffIcon />
                  </IconButton>
                </div>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
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
                  + Ajouter un plat
                </Button>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      }}
    </Draggable>
  );
};

export default SectionForm;
