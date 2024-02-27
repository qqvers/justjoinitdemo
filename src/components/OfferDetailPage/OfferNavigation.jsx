import { Link, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as IconRight } from "../../photos3_icons/arrow_profile.svg";
import { ReactComponent as IconArrowBack } from "../../photos3_icons/arrow_back.svg";

export default function OfferNavigation({ selectedItem }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickBack = () => {
    if (localStorage.getItem("lastPath")) {
      navigate(localStorage.getItem("lastPath"));
    } else {
      navigate("/");
    }
  };

  const buildPathWithTechnology = (technology) => {
    const lastPath = localStorage.getItem("lastPath") || "";
    const pathSegments = lastPath.split("/");
    if (pathSegments.length > 1) {
      pathSegments[2] = technology; // Zmieniamy indeks na 2, ponieważ segmenty URL liczymy od 1 (0 to pusty segment przed pierwszym "/")
    }
    return pathSegments.join("/");
  };

  return (
    <div className="offer_navigation_container">
      <button onClick={handleClickBack} className="navigation_button">
        <IconArrowBack style={{ transform: "rotate(180deg)" }} />
      </button>
      <Link to="/">All offers</Link>
      <IconRight style={{ transform: "rotate(-90deg)" }} />
      <Link to={buildPathWithTechnology(selectedItem.technologies[0])}>
        {selectedItem.technologies[0]}
      </Link>
      <span>
        <IconRight style={{ transform: "rotate(-90deg)" }} />
      </span>
      <Link to={location.pathname}>{selectedItem.position}</Link>
    </div>
  );
}
