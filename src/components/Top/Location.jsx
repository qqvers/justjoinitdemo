import React, { useRef, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModalLocation from "./ModalLocation";
import { MyContext } from "../MyContext.jsx";
import { useParams } from "react-router-dom";

export default function Location() {
  const { selectedCity, setSelectedCity } = useContext(MyContext);
  const { technology, remote, salary } = useParams();

  const dialog = useRef();

  const navigate = useNavigate();
  var checkedTech = technology ? "/" + technology : "";
  var checkedRem = remote ? "/" + remote : "";
  var checkedSal = salary ? "/" + salary : "";

  useEffect(() => {
    if (selectedCity !== "Location") {
      navigate(`/${selectedCity}${checkedTech}${checkedRem}${checkedSal}`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity]);

  function handleModal() {
    dialog.current.showModal();
  }

  function handleSelect(value) {
    if (value !== null && value !== "submitted") {
      setSelectedCity(value);
      dialog.current.close();
    }
    if (value === null) {
      dialog.current.close();
    }
  }
  return (
    <>
      <button type="button" onClick={handleModal}>
        {selectedCity}
      </button>
      <ModalLocation
        ref={dialog}
        handleSelect={handleSelect}
        selected={selectedCity}
      />
    </>
  );
}
