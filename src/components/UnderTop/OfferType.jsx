import React, { useContext, useRef, useState } from "react";
import ModalOfferType from "./ModalOfferType";
import { MyContext } from "../MyContext";
import { ReactComponent as Icon } from "../../photos3_icons/arrow_profile.svg";

export default function OfferType() {
  const { offerType, setOfferType } = useContext(MyContext);
  const [isShown, setIsShown] = useState(false);
  const dialog = useRef();

  function handleModal() {
    dialog.current.showModal();
    setIsShown(!isShown);
  }

  function handleSelect(value) {
    if (value !== null) {
      setOfferType(value);
    }

    dialog.current.close();
    setIsShown(!isShown);
  }

  return (
    <div className="offertype_container">
      <button onClick={handleModal}>
        {offerType}
        <Icon style={{ transform: isShown ? "rotate(180deg)" : null }} />
      </button>

      <ModalOfferType
        ref={dialog}
        handleSelect={handleSelect}
        selected={offerType}
      />
    </div>
  );
}
