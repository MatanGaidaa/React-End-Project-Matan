import {
  MenuForGuset,
  MenuForBusinessUser,
  MenuForSimpleUser,
} from "../Helpers/MenuData";
import { Menu } from "./Menu";

export default function Header() {
  const User = JSON.parse(localStorage.getItem("user"));
  const UserMenu = User ? (User.Category == "Simple" ? MenuForSimpleUser : MenuForBusinessUser): MenuForGuset;
  return (
    <>
      <Menu  dataForMenu={UserMenu}></Menu>
    </>
  );
}
