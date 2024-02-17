import { useState } from "react";

export default function Search() {
  const [userText, setUserText] = useState("");

  function handleChange(event) {
    setUserText(event.target.value);
  }

  function submitHandler(event) {
    if (event.key === "Enter") {
      console.log("Wyszukiwanie dla:", userText);
    }
  }

  return (
    <input
      type="text"
      placeholder="Search"
      value={userText}
      onChange={handleChange}
      onKeyDown={submitHandler}
    />
  );
}
