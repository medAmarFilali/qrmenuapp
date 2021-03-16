import ClassicTemplate from "../../../menuTemplates/classicTemplate/ClassicTemplate";

const MenuPreview = ({ menuData }) => {
  return (
    <div>
      <ClassicTemplate menuData={menuData} />
    </div>
  );
};

export default MenuPreview;
