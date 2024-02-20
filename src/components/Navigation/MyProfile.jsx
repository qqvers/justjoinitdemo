import React, { useRef } from "react";
import ModalProfile from "./ModalProfile";

export default function MyProfile() {
  const dialog = useRef();

  function handleModal() {
    dialog.current.showModal();
  }

  function handleSelect() {
    dialog.current.close();
  }

  return (
    <div className="myprofile_container">
      <button onClick={handleModal} className="navigation_button">
        My profile
      </button>
      <ModalProfile ref={dialog} handleSelect={handleSelect} />
    </div>
  );
}
