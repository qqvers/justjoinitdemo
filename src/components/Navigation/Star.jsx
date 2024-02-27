import React, { useRef } from "react";
import ModalStar from "./ModalStar";
import { ReactComponent as Icon } from "../../photos3_icons/star.svg";

export default function Star() {
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
    <div className="star_container">
      <button onClick={handleModal} className="navigation_button">
        <Icon />
      </button>
      <ModalStar ref={dialog} handleSelect={handleSelect} />
    </div>
  );
}
