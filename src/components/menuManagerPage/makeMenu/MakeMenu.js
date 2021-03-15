import MenuForm from "./menuForm/MenuForm";
import MenuPreview from "./menuPreview/MenuPreview";
import { useStyles } from "./styleMakeMenu";

const MakeMenu = () => {
  const classes = useStyles();
  return (
    <div className={classes.makeMenuContainer}>
      <div>
        <MenuForm />
      </div>
      <div>
        <MenuPreview />
      </div>
    </div>
  );
};

export default MakeMenu;
