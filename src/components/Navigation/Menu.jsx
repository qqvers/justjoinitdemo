import { useRef } from "react";
import ModalMenu from "./ModalMenu";
import { ReactComponent as Icon } from "../../photos3_icons/menu.svg";

export default function Menu() {
  const dialog = useRef();

  function handleModal() {
    dialog.current.showModal();
  }

  function handleSelect() {
    dialog.current.close();
  }

  return (
    <div className="menu_container">
      <button onClick={handleModal} className="navigation_button">
        <Icon />
      </button>
      <ModalMenu ref={dialog} handleSelect={handleSelect} />
    </div>
  );
}
//
