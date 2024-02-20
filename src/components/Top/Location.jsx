import React, { useRef, useContext } from "react";

import ModalLocation from "./ModalLocation";
import { MyContext } from "../MyContext.jsx";

export default function Location() {
  const { selectedCity, setSelectedCity } = useContext(MyContext);

  const dialog = useRef();

  function handleModal() {
    dialog.current.showModal();
  }

  function handleSelect(value) {
    if (value !== null && value !== "submitted") {
      setSelectedCity(value);
      dialog.current.close();
    }
    if (value === null) {
      dialog.current.close();
    }
  }
  return (
    <>
      <button type="button" onClick={handleModal} className="location_button">
        {selectedCity}
      </button>
      <ModalLocation
        ref={dialog}
        handleSelect={handleSelect}
        selected={selectedCity}
      />
    </>
  );
}
