import React, { useRef } from "react";
//import { useNavigate } from "react-router-dom";
import ModalProfile from "./ModalProfile";

export default function MyProfile() {
  const dialog = useRef();
  //const navigate = useNavigate();

  function handleModal() {
    dialog.current.showModal();
  }

  function handleSelect(value) {
    dialog.current.close();
  }

  return (
    <>
      <div onClick={handleModal}>My profile</div>
      <ModalProfile ref={dialog} handleSelect={handleSelect} />
    </>
  );
}
