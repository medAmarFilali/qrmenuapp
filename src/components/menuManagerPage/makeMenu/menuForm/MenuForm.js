import { useState } from "react";
import { Typography, TextField, Paper, Button } from "@material-ui/core";
import { useStyles } from "./styleMenuForm";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../../../../store/actions/dataAction";

const MenuForm = () => {
  const classes = useStyles();
  const restoData = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [menuName, setMenuName] = useState("");
  const [platdujour, setPlatdujour] = useState("");

  const handleDataAdd = (e) => {
    e.preventDefault();
    dispatch(addData({ name: menuName, platdujour }));
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
          value={menuName}
          onChange={(e) => setMenuName(e.target.value)}
        />
        <TextField
          label="Plat du jour"
          variant="outlined"
          fullWidth
          className={classes.textField}
          value={platdujour}
          onChange={(e) => setPlatdujour(e.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={handleDataAdd}>
          Ajouter infos
        </Button>
      </Paper>
    </div>
  );
};

export default MenuForm;
