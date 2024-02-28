import { forwardRef, useContext } from "react";
import { MyContext } from "../MyContext";

const ModalStar = forwardRef(function ModalStar({ handleSelect }, ref) {
  const { savedFilters, handleDeleteFilter } = useContext(MyContext);
  return (
    <dialog
      ref={ref}
      onClick={() => {
        handleSelect(null);
      }}
      className="star_dialog"
    >
      <div className="modal_star_container">
        <span>Saved searches</span>
        {savedFilters.length > 0 ?? (
          <button className="navigation_button modal_star_close">X</button>
        )}
        <ul>
          {savedFilters.map((filter, index) => (
            <li key={index} onClick={handleSelect}>
              City: {filter.city}, Remote: {filter.remote}, Offer:
              {filter.offer}, Salary: {filter.salary}
              <button onClick={() => handleDeleteFilter(index)}>
                !DELETE!
              </button>
            </li>
          ))}
        </ul>
      </div>
    </dialog>
  );
});

export default ModalStar;
