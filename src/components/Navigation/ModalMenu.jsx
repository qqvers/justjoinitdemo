import { forwardRef } from "react";

const ModalMenu = forwardRef(function ModalMenu({ handleSelect }, ref) {
  return (
    <dialog
      ref={ref}
      onClick={() => {
        handleSelect(null);
      }}
    >
      <ul>
        <li onClick={() => handleSelect("My profile")}>My profile</li>
        <li onClick={() => handleSelect("Settings")}>Settings</li>
        <li onClick={() => handleSelect("Log out")}>Log out</li>
        <li onClick={() => handleSelect("Offers")}>Offers</li>
        <li onClick={() => handleSelect("Top Companies")}>Top Companies</li>
        <li onClick={() => handleSelect("i tak dalej")}>i tak dalej</li>
      </ul>
    </dialog>
  );
});

export default ModalMenu;
