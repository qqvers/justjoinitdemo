import React, { useContext, useRef } from "react";
import ModalOfferType from "./ModalOfferType";
import { MyContext } from "../MyContext";

export default function OfferType() {
  const { offerType, setOfferType } = useContext(MyContext);
  const dialog = useRef();

  function handleModal() {
    dialog.current.showModal();
  }

  function handleSelect(value) {
    if (value !== null) {
      setOfferType(value);
    }

    dialog.current.close();
  }

  return (
    <div className="offertype_container">
      <button onClick={handleModal}>{offerType}</button>
      <ModalOfferType
        ref={dialog}
        handleSelect={handleSelect}
        selected={offerType}
      />
    </div>
  );
}
