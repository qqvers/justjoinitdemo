import { Link, useLocation, useNavigate } from "react-router-dom";

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
    <div>
      <button onClick={handleClickBack}>Back</button>
      <Link to="/">All offers</Link>
      <span>&gt;</span>
      <Link to={buildPathWithTechnology(selectedItem.technologies[0])}>
        {selectedItem.technologies[0]}
      </Link>
      <span>&gt;</span>
      <Link to={location.pathname}>{selectedItem.position}</Link>
    </div>
  );
}
