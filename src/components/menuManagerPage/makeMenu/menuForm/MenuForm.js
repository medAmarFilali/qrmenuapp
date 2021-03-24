import { Typography, TextField, Paper, Button } from "@material-ui/core";
import { useStyles } from "./styleMenuForm";
import { useDispatch } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { addData } from "../../../../store/actions/dataAction";
import SectionForm from "./sectionForm/SectionForm";
import { v4 as uuidv4 } from "uuid";
import { produce } from "immer";

const MenuForm = ({ menuData, setMenuData }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDataAdd = (e) => {
    e.preventDefault();
    dispatch(
      addData({
        name: menuData.name,
        platdujour: menuData.platdujour,
        dishes: menuData.dishes,
      })
    );
  };

  const handleAddSection = () => {
    setMenuData(
      produce((draft) => {
        draft.dishes.push({
          id: uuidv4(),
          sectionName: "",
          items: [],
        });
      })
    );
  };

  console.log(menuData)

  const reOrder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);

    result.splice(endIndex, 0, removed);

    return result;
  };

  const handleOnDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    setMenuData(
      produce((draft) => {
        draft.dishes = reOrder(
          draft.dishes,
          result.source.index,
          result.destination.index
        );
      })
    );
  };

  return (
    <div className={classes.menuFormContainer}>
      <Paper elevation={3} className={classes.formPaper}>
        <Typography variant="h5" className={classes.menuFormTitle}>
          Votre menu
        </Typography>
        <TextField
          label="Nom du Menu"
          variant="outlined"
          fullWidth
          className={classes.textField}
          value={menuData.name}
          onChange={(e) => setMenuData({ ...menuData, name: e.target.value })}
        />
        <TextField
          label="Plat du jour"
          variant="outlined"
          fullWidth
          className={classes.textField}
          value={menuData.platdujour}
          onChange={(e) =>
            setMenuData({ ...menuData, platdujour: e.target.value })
          }
        />
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="123456">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {menuData.dishes.map((el, index) => {
                  return (
                    <SectionForm
                      key={el.id}
                      index={index}
                      id={el.id}
                      dish={el}
                      setMenuData={setMenuData}
                      menuData={menuData}
                    />
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className={classes.textField}
          onClick={handleAddSection}
        >
          Ajouter une section
        </Button>
        <div className={classes.buttonContainer}>
          <Button variant="contained" color="secondary" onClick={handleDataAdd}>
            Mettre a jour le menu
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default MenuForm;
