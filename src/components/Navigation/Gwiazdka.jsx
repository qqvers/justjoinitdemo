import React, { useRef } from "react";
import ModalGwiazdka from "./ModalGwiazdka";

export default function Gwiazdka() {
  const dialog = useRef();

  function handleModal() {
    dialog.current.showModal();
  }

  function handleSelect(value) {
    if (value !== null) {
    }

    dialog.current.close();
  }

  return (
    <>
      <button onClick={handleModal}>⭐</button>
      <ModalGwiazdka ref={dialog} handleSelect={handleSelect} />
    </>
  );
}
