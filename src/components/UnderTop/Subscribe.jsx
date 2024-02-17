import { useContext } from "react";
import { MyContext } from "../MyContext";

export default function Subscribe() {
  const {
    selectedCity,
    remoteValue,
    offerType,
    salaryFilter,
    selectedCurrency,
    handleSavedFilters,
  } = useContext(MyContext);
  var checkFilterStatus = false;
  if (
    selectedCity !== "Location" ||
    remoteValue !== false ||
    offerType !== "Default" ||
    salaryFilter !== true
  ) {
    checkFilterStatus = true;
  }

  return (
    checkFilterStatus && (
      <button
        onClick={() =>
          handleSavedFilters(
            selectedCity,
            remoteValue,
            offerType,
            salaryFilter,
            selectedCurrency
          )
        }
      >
        Subscribe
      </button>
    )
  );
}
