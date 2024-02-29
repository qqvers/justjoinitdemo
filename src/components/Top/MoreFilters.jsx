import React, { useRef } from "react";
import ModalMoreFilters from "./ModalMoreFilters";
import { ReactComponent as Icon } from "../../photos3_icons/filter.svg";
import { ReactComponent as IconAfter } from "../../photos3_icons/arrow_profile.svg";

export default function MoreFilters() {
  const dialog = useRef();

  function handleModal() {
    dialog.current.showModal();
  }

  function handleSelect(value) {
    if (value === null) {
    } else {
      dialog.current.close();
    }
  }
  return (
    <>
      <button type="button" onClick={handleModal} className="location_button">
        <Icon />
        <span>More Filters</span>
        <IconAfter />
      </button>
      <ModalMoreFilters ref={dialog} handleSelect={handleSelect} />
    </>
  );
}
