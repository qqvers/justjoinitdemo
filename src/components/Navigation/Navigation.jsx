import logo from "../../photos/logo.png";
import MyProfile from "./MyProfile";
import Sidebar from "./Menu";
import Star from "./Star";
import Currency from "./Currency";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="Navigation_container">
      <div className="logo">
        <Link to="/Location/undefined/false/true">
          <img src={logo} alt="logo img" />
        </Link>
      </div>
      <span className="navigation_container_span_text">
        #1 Job Board for tech industry in Europe
      </span>

      <div className="Navigation_right">
        <MyProfile />
        <Star />
        <Currency />
        <Sidebar />
      </div>
    </nav>
  );
};

export default Navigation;
