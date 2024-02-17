import logo from "../../photos/logo.png";
import MyProfile from "./MyProfile";
import DarkMode from "./DarkMode";
import Sidebar from "./Menu";
import Gwiazdka from "./Gwiazdka";
import Currency from "./Currency";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="Navigation_container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo img" />
        </Link>
      </div>

      <DarkMode />
      <div className="Navigation_right">
        <MyProfile />
        <Gwiazdka />
        <Currency />
        <Sidebar />
      </div>
    </nav>
  );
};

export default Navigation;
