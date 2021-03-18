import { useState } from "react";
import MenuForm from "./menuForm/MenuForm";
import MenuPreview from "./menuPreview/MenuPreview";
import { useStyles } from "./styleMakeMenu";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const MakeMenu = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles(mobile);

  console.log(mobile);

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

      {!mobile ? (
        <div className={classes.previewContainer}>
          <MenuPreview menuData={menuData} />
        </div>
      ) : null}
    </div>
  );
};

export default MakeMenu;
