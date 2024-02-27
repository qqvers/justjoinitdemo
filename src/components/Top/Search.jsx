import { useContext } from "react";
import { MyContext } from "../MyContext";
import { useParams } from "react-router-dom";
import { ReactComponent as Icon } from "../../photos3_icons/search.svg"; // Upewnij się, że ścieżka jest poprawna

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
    <div className="input-container">
      <Icon className="input-icon" />
      <input
        type="text"
        placeholder="Search"
        defaultValue={textValue}
        onKeyDown={submitHandler}
        className="search_input"
      />
    </div>
  );
}
