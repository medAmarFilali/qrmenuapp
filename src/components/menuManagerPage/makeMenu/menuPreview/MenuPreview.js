import ClassicTemplate from "../../../menuTemplates/classicTemplate/ClassicTemplate";
import { useSelector } from "react-redux";

const MenuPreview = ({ menuData }) => {
  const restoData = useSelector((state) => state.data);
  return (
    <div>
      <ClassicTemplate menuData={menuData} restoData={restoData} />
    </div>
  );
};

export default MenuPreview;
