import React, { useRef, useContext } from "react";
import ModalCurrency from "./ModalCurrency";
import { MyContext } from "../MyContext";

export default function Currency() {
  const { selectedCurrency, setSelectedCurrency } = useContext(MyContext);
  const dialog = useRef();

  function handleModal() {
    dialog.current.showModal();
  }

  function handleSelect(value) {
    if (value !== null) {
      setSelectedCurrency(value);
    }

    dialog.current.close();
  }

  return (
    <div className="currency_container">
      <button onClick={handleModal} className="navigation_button">
        {selectedCurrency}
      </button>
      <ModalCurrency
        ref={dialog}
        handleSelect={handleSelect}
        selected={selectedCurrency}
      />
    </div>
  );
}
