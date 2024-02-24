import React, { useState, useEffect, useContext, useRef } from "react";
import ModalTechnologies from "./ModalTechnologies";
import { technologiesData } from "../../data_technologies";
import { MyContext } from "../MyContext";

export default function Technologies() {
  const [displayCount, setDisplayCount] = useState(3);
  const { selectedTechnology, setSelectedTechnology } = useContext(MyContext);
  const dialog = useRef();

  useEffect(() => {
    const updateDisplayCount = () => {
      const width = window.innerWidth;

      setDisplayCount(width / 100);
    };
    window.addEventListener("resize", updateDisplayCount);
    updateDisplayCount();
    return () => window.removeEventListener("resize", updateDisplayCount);
  }, []);

  const slicedData = technologiesData.slice(0, displayCount);
  const otherSlicedData = technologiesData.slice(displayCount);

  function handleModal() {
    dialog.current.showModal();
  }

  function handleSelect(value) {
    if (value !== null) {
      if (value !== selectedTechnology) {
        setSelectedTechnology(value);
      } else {
        setSelectedTechnology();
      }
    }
    dialog.current.close();
  }

  const generateRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <>
      <div className="button_lang_wrapper">
        {slicedData.map((tech) => (
          <div key={tech.id} onClick={() => handleSelect(tech.name)}>
            <div className="technology_img_bg">
              <div
                className="technology_img"
                style={{ backgroundColor: generateRandomColor() }}
              >
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
        <button onClick={handleModal} className="technologies_button">
          ...
        </button>
        <ModalTechnologies
          ref={dialog}
          handleSelect={handleSelect}
          data_array={otherSlicedData}
          generateRandomColor={generateRandomColor}
        />
      </div>
    </>
  );
}
