import { forwardRef } from "react";

const ModalOfferType = forwardRef(function ModalOfferType(
  { handleSelect },
  ref
) {
  return (
    <dialog
      ref={ref}
      onClick={() => {
        handleSelect(null);
      }}
    >
      <ul>
        <li onClick={() => handleSelect("Default")}>Default</li>
        <li onClick={() => handleSelect("Latest")}>Latest</li>
        <li onClick={() => handleSelect("Highest salary")}>Highest salary</li>
        <li onClick={() => handleSelect("Lowest salary")}>Lowest salary</li>
      </ul>
    </dialog>
  );
});

export default ModalOfferType;
