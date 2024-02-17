import React, { useState, useRef } from "react";
import ModalMoreFilters from "./ModalMoreFilters";
export default function MoreFilters() {
  const [selectedLocation, setSelectedLocation] = useState("More filters");
  const dialog = useRef();

  function handleModal() {
    dialog.current.showModal();
  }

  function handleSelect(value) {
    if (value !== null) {
      setSelectedLocation(value);
    }

    dialog.current.close();
  }
  return (
    <>
      <button type="button" onClick={handleModal}>
        {selectedLocation}
      </button>
      <ModalMoreFilters
        ref={dialog}
        handleSelect={handleSelect}
        selected={selectedLocation}
      />
    </>
  );
}
