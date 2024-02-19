import { useContext } from "react";
import { MyContext } from "../MyContext";
import { useParams } from "react-router-dom";

export default function Search() {
  const { setUserText } = useContext(MyContext);
  const { search } = useParams();

  var textValue = "";
  if (search !== "empty") {
    textValue = search;
  }

  function submitHandler(event) {
    if (event.key === "Enter") {
      setUserText(event.target.value);
    }
  }

  return (
    <input
      type="text"
      placeholder="Search"
      defaultValue={textValue}
      onKeyDown={submitHandler}
    />
  );
}
