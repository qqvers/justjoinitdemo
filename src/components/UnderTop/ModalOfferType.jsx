import { forwardRef } from "react";

const ModalOfferType = forwardRef(function ModalOfferType(
  { selected, handleSelect },
  ref
) {
  return (
    <dialog
      ref={ref}
      onClick={() => {
        handleSelect(null);
      }}
      className="offertype_dialog"
    >
      <div className="offertype_modal_conatiner">
        <button
          onClick={() => handleSelect("Default")}
          style={{ color: selected === "Default" ? "red" : "initial" }}
        >
          Default
        </button>
        <button
          onClick={() => handleSelect("Latest")}
          style={{ color: selected === "Latest" ? "red" : "initial" }}
        >
          Latest
        </button>
        <button
          onClick={() => handleSelect("Highest salary")}
          style={{ color: selected === "Highest salary" ? "red" : "initial" }}
        >
          Highest salary
        </button>
        <button
          onClick={() => handleSelect("Lowest salary")}
          style={{ color: selected === "Lowest salary" ? "red" : "initial" }}
        >
          Lowest salary
        </button>
      </div>
    </dialog>
  );
});

export default ModalOfferType;
