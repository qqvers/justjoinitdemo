import React, { useRef, useContext, useState } from "react";

import ModalLocation from "./ModalLocation";
import { MyContext } from "../MyContext.jsx";
import { ReactComponent as Icon } from "../../photos3_icons/location.svg";
import { ReactComponent as IconAfter } from "../../photos3_icons/arrow_profile.svg";

export default function Location() {
  const { selectedCity, setSelectedCity } = useContext(MyContext);
  const [isShown, setIsShown] = useState(false);

  const dialog = useRef();

  function handleModal() {
    setIsShown(!isShown);
    dialog.current.showModal();
  }

  function handleSelect(value) {
    if (value === "") {
      setSelectedCity("Location");
      setIsShown(!isShown);
      dialog.current.close();
    }
    if (value !== null && value !== "submitted" && value !== "") {
      setSelectedCity(value);
      setIsShown(!isShown);
      dialog.current.close();
    }
    if (value === null) {
      setIsShown(!isShown);
      dialog.current.close();
    }
  }
  return (
    <div className="position_modal_location_wrapper">
      <button type="button" onClick={handleModal} className="location_button">
        <Icon />
        <span>{selectedCity}</span>
        <IconAfter style={{ transform: isShown ? "rotate(180deg)" : null }} />
      </button>
      <ModalLocation
        ref={dialog}
        handleSelect={handleSelect}
        selected={selectedCity}
      />
    </div>
  );
}
