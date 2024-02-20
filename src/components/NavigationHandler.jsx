import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "./MyContext";

const NavigationHandler = () => {
  const navigate = useNavigate();
  const { location, technology, remote, salary, search } = useParams();
  const {
    selectedCity,
    setSelectedCity,
    remoteValue,
    setRemoteValue,
    salaryFilter,
    setSalaryFilter,
    selectedTechnology,
    setSelectedTechnology,
    userText,
    setUserText,
  } = useContext(MyContext);

  const [triggeredByURLChange, setTriggeredByURLChange] = useState(true);

  // Dodajemy stan do śledzenia ostatniej aktualizacji niezwiązanej z URL

  // eslint-disable-next-line
  const [lastUserInteractionTimestamp, setLastUserInteractionTimestamp] =
    useState(0);

  // Funkcja pomocnicza do aktualizacji stanu, która również ustawia timestamp
  const updateUserInteractionState = (updateFunction, value) => {
    updateFunction(value);
    setLastUserInteractionTimestamp(Date.now());
  };

  useEffect(() => {
    if (!triggeredByURLChange) {
      const checkedLocation = `/${selectedCity}`;
      const checkedTechnology = `/${selectedTechnology}`;
      const checkedRemote = `/${remoteValue}`;
      const checkedSalary = `/${salaryFilter}`;
      const checkedSearch = `/${userText}`;

      const newPath = `${checkedLocation}${checkedTechnology}${checkedRemote}${checkedSalary}${checkedSearch}`;
      if (window.location.pathname !== newPath) {
        localStorage.setItem("lastPath", newPath);
        navigate(newPath);
      }
    }

    // Reset triggeredByURLChange to wait for next user interaction
    setTriggeredByURLChange(false);
  }, [
    selectedCity,
    selectedTechnology,
    remoteValue,
    salaryFilter,
    userText,
    navigate,
    triggeredByURLChange,
  ]);

  useEffect(() => {
    setTriggeredByURLChange(true);

    const remoteBoolean = remote === "true";
    const salaryBoolean = salary === "true";

    const checkedLocationParam = location || "Location";
    const checkedTechnologyParam = technology || undefined;

    const newPath = `/${checkedLocationParam}/${checkedTechnologyParam}/${remoteBoolean}/${salaryBoolean}/${search}`;
    localStorage.setItem("lastPath", newPath);

    if (remoteValue !== remoteBoolean) {
      updateUserInteractionState(setRemoteValue, remoteBoolean);
    }
    if (salary && salaryFilter !== salaryBoolean) {
      updateUserInteractionState(setSalaryFilter, salaryBoolean);
    }
    if (location && location !== selectedCity) {
      updateUserInteractionState(setSelectedCity, location);
    }
    if (technology && technology !== selectedTechnology) {
      updateUserInteractionState(setSelectedTechnology, technology);
    }
    if (userText !== "empty" && search !== userText) {
      updateUserInteractionState(setUserText, search);
    }

    // eslint-disable-next-line
  }, [location, technology, remote, salary, search]);

  return null;
};

export default NavigationHandler;
