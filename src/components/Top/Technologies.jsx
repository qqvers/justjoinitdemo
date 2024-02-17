import { useRef, useContext } from "react";
import ModalTechnologies from "./ModalTechnologies";
import { technologiesData } from "../../data_technologies";
import { MyContext } from "../MyContext";

export default function Technologies() {
  const slicedData = technologiesData.slice(0, 3);
  const otherSlicedData = technologiesData.slice(3);
  const { setSelectedTechnology } = useContext(MyContext);
  const dialog = useRef();

  function handleModal() {
    dialog.current.showModal();
  }

  function handleSelect(value) {
    if (value !== null) {
      setSelectedTechnology(value);
    }

    dialog.current.close();
  }

  return (
    <>
      <div className="button_lang_wrapper">
        {slicedData.map((tech) => (
          <div key={tech.id} onClick={() => handleSelect(tech.id)}>
            <div className="technology_img_bg">
              <div className="technology_img">
                <img
                  src={tech.logo}
                  className="technology_logo"
                  alt="technology_logo"
                />
              </div>
            </div>
            <div className="technology_name">{tech.name}</div>
          </div>
        ))}
        <button onClick={handleModal}>...</button>
        <ModalTechnologies
          ref={dialog}
          handleSelect={handleSelect}
          data_array={otherSlicedData}
        />
      </div>
    </>
  );
}
