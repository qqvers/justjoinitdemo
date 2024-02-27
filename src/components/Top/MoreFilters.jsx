import React, { useState, useRef } from "react";
import ModalMoreFilters from "./ModalMoreFilters";
import { ReactComponent as Icon } from "../../photos3_icons/filter.svg";
import { ReactComponent as IconAfter } from "../../photos3_icons/arrow_profile.svg";

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
      <button type="button" onClick={handleModal} className="location_button">
        <Icon />
        <span>More Filters</span>
        <IconAfter />
      </button>
      <ModalMoreFilters
        ref={dialog}
        handleSelect={handleSelect}
        selected={selectedLocation}
      />
    </>
  );
}
