import ClassicTemplate from "../../../menuTemplates/classicTemplate/ClassicTemplate";
import { useSelector } from "react-redux";
import { useStyles } from "./styleMenuPreview";

const MenuPreview = ({ menuData }) => {
  const classes = useStyles();
  const restoData = useSelector((state) => state.data);
  return (
    <div className={classes.menuPreviewContainer}>
      <ClassicTemplate menuData={menuData} restoData={restoData} />
    </div>
  );
};

export default MenuPreview;
