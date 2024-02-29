import { forwardRef, useContext } from "react";
import { MyContext } from "../MyContext";
import { ReactComponent as Icon } from "../../photos3_icons/delete.svg";

const ModalStar = forwardRef(function ModalStar({ handleSelect }, ref) {
  const { savedFilters, handleDeleteFilter } = useContext(MyContext);
  return (
    <dialog
      ref={ref}
      onClick={() => {
        handleSelect(null);
      }}
      className="star_dialog  demo-warning"
    >
      <div className="modal_star_container ">
        <span className="modal_star_top_text">Saved searches</span>
        {savedFilters.length > 0 ?? (
          <button className="navigation_button modal_star_close">X</button>
        )}
        <ul>
          {savedFilters.map((filter, index) => (
            <li key={index} onClick={handleSelect}>
              <div>
                <span>
                  City: {filter.city === "Location" ? "default" : filter.city}
                </span>
                <span>Remote: {filter.remote ? "yes" : "no"}</span>
              </div>
              <div className="modal_star_buttons">
                <button>Go to offers</button>
                <button onClick={() => handleDeleteFilter(index)}>
                  <Icon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </dialog>
  );
});

export default ModalStar;
