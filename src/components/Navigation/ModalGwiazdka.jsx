import { forwardRef, useContext } from "react";
import { MyContext } from "../MyContext";

const ModalGwiazdka = forwardRef(function ModalGwiazdka({ handleSelect }, ref) {
  const { savedFilters, handleDeleteFilter } = useContext(MyContext);
  return (
    <dialog
      ref={ref}
      onClick={() => {
        handleSelect(null);
      }}
    >
      <h2>Saved Filters</h2>
      <ul>
        {savedFilters.map((filter, index) => (
          <li key={index} onClick={handleSelect}>
            City: {filter.city}, Remote: {filter.remote}, Offer:
            {filter.offer}, Salary: {filter.salary}
            <button onClick={() => handleDeleteFilter(index)}>!DELETE!</button>
          </li>
        ))}
      </ul>
    </dialog>
  );
});

export default ModalGwiazdka;
