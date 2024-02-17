import { Link, useLocation, useNavigate } from "react-router-dom";

export default function OfferNavigation({ selectedItem }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <button onClick={handleClickBack}>Back</button>
      <Link to="/">All offers</Link>
      <span>&gt;</span>
      <Link to={`/${selectedItem.technologies[0]}`}>
        {selectedItem.technologies[0]}
      </Link>
      <span>&gt;</span>
      <Link to={location.pathname}>{selectedItem.position}</Link>
    </div>
  );
}
