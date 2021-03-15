import { useSelector } from "react-redux";
import MakeMenu from "./makeMenu/MakeMenu";
import MenuIntro from "./menuIntro/MenuIntro";

const MenuManagerPage = () => {
  const data = useSelector((state) => state.data);

  return (
    <div>
      <div>{!data.menu ? <MenuIntro /> : <MakeMenu />}</div>
    </div>
  );
};

export default MenuManagerPage;
