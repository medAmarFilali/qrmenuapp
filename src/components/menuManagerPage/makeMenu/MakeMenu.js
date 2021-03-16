import { useState } from "react";
import MenuForm from "./menuForm/MenuForm";
import MenuPreview from "./menuPreview/MenuPreview";
import { useStyles } from "./styleMakeMenu";

const MakeMenu = () => {
  const classes = useStyles();
  const [menuData, setMenuData] = useState({
    name: "",
    platdujour: "",
    dishes: [],
  });
  return (
    <div className={classes.makeMenuContainer}>
      <div className={classes.formContainer}>
        <MenuForm menuData={menuData} setMenuData={setMenuData} />
      </div>
      <div className={classes.previewContainer}>
        <MenuPreview menuData={menuData} />
      </div>
    </div>
  );
};

export default MakeMenu;
