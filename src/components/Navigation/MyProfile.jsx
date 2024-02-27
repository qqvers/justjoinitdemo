import React, { useRef, useState } from "react";
import ModalProfile from "./ModalProfile";
import { ReactComponent as Icon } from "../../photos3_icons/arrow_profile.svg";

export default function MyProfile() {
  const [isShown, setIsShown] = useState("false");
  const dialog = useRef();

  function handleModal() {
    dialog.current.showModal();
    setIsShown(!isShown);
  }

  function handleSelect() {
    dialog.current.close();
    setIsShown(!isShown);
  }

  return (
    <div className="myprofile_container">
      <button
        onClick={handleModal}
        className="navigation_button"
        style={{ width: "auto" }}
      >
        <span>My profile</span>
        <Icon style={{ transform: isShown ? "rotate(180deg)" : null }} />
      </button>
      <ModalProfile ref={dialog} handleSelect={handleSelect} />
    </div>
  );
}
