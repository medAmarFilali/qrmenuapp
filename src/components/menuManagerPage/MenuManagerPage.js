import { useSelector } from "react-redux";
import MenuIntro from "./menuIntro/MenuIntro";

const MenuManagerPage = () => {
  const data = useSelector((state) => state.data);

  return (
    <div>
      <div>{!data.menu ? <MenuIntro /> : null}</div>
    </div>
  );
};

export default MenuManagerPage;
