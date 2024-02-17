import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "./MyContext";

const NavigationHandler = () => {
  const navigate = useNavigate();
  const { location, technology, remote, salary } = useParams();
  const {
    selectedCity,
    setSelectedCity,
    remoteValue,
    setRemoteValue,
    salaryFilter,
    setSalaryFilter,
    selectedTechnology,
    setSelectedTechnology,
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

      const newPath = `${checkedLocation}${checkedTechnology}${checkedRemote}${checkedSalary}`;
      if (window.location.pathname !== newPath) {
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
    navigate,
    triggeredByURLChange,
  ]);

  useEffect(() => {
    setTriggeredByURLChange(true);

    const remoteBoolean = remote === "true";
    const salaryBoolean = salary === "true";

    if (remoteValue !== remoteBoolean) {
      updateUserInteractionState(setRemoteValue, remoteBoolean);
    }
    if (salaryFilter !== salaryBoolean) {
      updateUserInteractionState(setSalaryFilter, salaryBoolean);
    }
    if (location && location !== selectedCity) {
      updateUserInteractionState(setSelectedCity, location);
    }
    if (technology && technology !== selectedTechnology) {
      updateUserInteractionState(setSelectedTechnology, technology);
    } // eslint-disable-next-line
  }, [location, technology, remote, salary]);

  return null;
};

export default NavigationHandler;
