import { Typography, TextField, Paper, Button } from "@material-ui/core";
import { useStyles } from "./styleMenuForm";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../../../../store/actions/dataAction";

const MenuForm = ({ menuData, setMenuData }) => {
  const classes = useStyles();
  const restoData = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleDataAdd = (e) => {
    e.preventDefault();
    dispatch(addData({ name: menuData.name, platdujour: menuData.platdujour }));
  };

  console.log(restoData);

  return (
    <div className={classes.menuFormContainer}>
      <Typography variant="h5" className={classes.menuFormTitle}>
        Formulaire menu
      </Typography>
      <Paper elevation={3} className={classes.formPaper}>
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
        <div className={classes.buttonContainer}>
          <Button variant="contained" color="secondary" onClick={handleDataAdd}>
            Ajouter infos
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default MenuForm;
