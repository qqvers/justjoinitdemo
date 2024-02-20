import React, { useState, useRef } from "react";
import ModalMenu from "./ModalMenu";
export default function Menu() {
  const [selected, setSelected] = useState("Menu");
  const dialog = useRef();

  function handleModal() {
    dialog.current.showModal();
  }

  function handleSelect(value) {
    if (value !== null) {
      setSelected(value);
    }

    dialog.current.close();
  }

  return (
    <>
      <button onClick={handleModal} className="navigation_button">
        {selected}
      </button>
      <ModalMenu ref={dialog} handleSelect={handleSelect} selected={selected} />
    </>
  );
}
