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
    <>
      <div onClick={handleModal}>{selectedCurrency}</div>
      <ModalCurrency
        ref={dialog}
        handleSelect={handleSelect}
        selected={selectedCurrency}
      />
    </>
  );
}
