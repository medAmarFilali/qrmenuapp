import { useDispatch } from "react-redux";
import { Typography, Button } from "@material-ui/core";
import { useStyles } from "./styleMenuIntro";
import { createNewMenu } from "../../../store/actions/dataAction";

const MenuIntro = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleCreateMenu = (e) => {
    e.preventDefault();
    dispatch(createNewMenu());
  };

  return (
    <div className={classes.menuIntroContainer}>
      <Typography variant="h6" className={classes.menuText}>
        Vous n'avez pas encore créer de menu
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleCreateMenu}>
        Créez votre premier menu
      </Button>
    </div>
  );
};

export default MenuIntro;
