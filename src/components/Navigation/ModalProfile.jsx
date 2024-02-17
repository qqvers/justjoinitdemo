import { forwardRef } from "react";
import { Link } from "react-router-dom";

const ModalProfile = forwardRef(function ModalProfile({ handleSelect }, ref) {
  return (
    <dialog
      ref={ref}
      onClick={() => {
        handleSelect(null);
      }}
    >
      <ul>
        <li onClick={() => handleSelect("My profile")}>
          <Link to="/profile">My profile</Link>
        </li>
        <li onClick={() => handleSelect("Saved searches")}>
          <Link to="/savedsearches">Saved searches</Link>
        </li>
        <li onClick={() => handleSelect("Settings")}>
          <Link to="/settings">Settings</Link>
        </li>
        <li onClick={() => handleSelect("Log out")}>
          <Link to="/profile">Log out</Link>
        </li>
      </ul>
    </dialog>
  );
});

export default ModalProfile;
