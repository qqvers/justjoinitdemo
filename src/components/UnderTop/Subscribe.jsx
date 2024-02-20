import { useContext } from "react";
import { MyContext } from "../MyContext";

export default function Subscribe() {
  const {
    selectedCity,
    remoteValue,
    offerType,
    salaryFilter,
    selectedCurrency,
    selectedTechnology,
    handleSavedFilters,
  } = useContext(MyContext);

  var checkFilterStatus = false;
  if (
    selectedTechnology !== "undefined" ||
    selectedCity !== "Location" ||
    remoteValue ||
    offerType !== "Default" ||
    !salaryFilter
  ) {
    checkFilterStatus = true;
  }

  return (
    <button
      className="subscribe_button"
      style={{ visibility: checkFilterStatus ? "visible" : "hidden" }}
      onClick={() =>
        handleSavedFilters(
          selectedCity,
          remoteValue,
          offerType,
          salaryFilter,
          selectedCurrency,
          selectedTechnology
        )
      }
    >
      Subscribe
    </button>
  );
}
