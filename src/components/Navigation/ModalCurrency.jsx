import { forwardRef } from "react";

const ModalCurrency = forwardRef(function ModalCurrency({ handleSelect }, ref) {
  return (
    <dialog
      ref={ref}
      onClick={() => {
        handleSelect(null);
      }}
    >
      <ul>
        <li onClick={() => handleSelect("PLN")}>PLN</li>
        <li onClick={() => handleSelect("EUR")}>EUR</li>
        <li onClick={() => handleSelect("USD")}>USD</li>
        <li onClick={() => handleSelect("GBP")}>GBP</li>
        <li onClick={() => handleSelect("CHF")}>CHF</li>
        <li onClick={() => handleSelect("DEF")}>DEF</li>
      </ul>
    </dialog>
  );
});

export default ModalCurrency;
