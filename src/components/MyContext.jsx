import React, { createContext, useState } from "react";

export const MyContext = createContext(null);

export const MyContextProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState("Location");
  const [remoteValue, setRemoteValue] = useState(false);
  const [offerType, setOfferType] = useState("Default");
  const [salaryFilter, setSalaryFilter] = useState(true);
  const [selectedCurrency, setSelectedCurrency] = useState("PLN");
  const [selectedTechnology, setSelectedTechnology] = useState();
  const [userText, setUserText] = useState("empty");
  const [savedFilters, setSavedFilters] = useState([]);

  const latestSearch = {
    currency: selectedCurrency,
    city: selectedCity,
    remote: remoteValue,
    offer: offerType,
    salary: salaryFilter,
    technology: selectedTechnology,
  };
  localStorage.setItem("latestSearch", JSON.stringify(latestSearch));

  function handleSavedFilters(
    city,
    remote,
    offer,
    salary,
    currency,
    technology
  ) {
    const newFilter = {
      currency: currency,
      city: city,
      remote: remote,
      offer: offer,
      salary: salary,
      technology: technology,
    };

    setSavedFilters((prevState) => prevState.concat(newFilter));
  }

  function handleDeleteFilter(indexToDelete) {
    setSavedFilters((prevState) =>
      prevState.filter((filter, index) => index !== indexToDelete)
    );
  }

  const contextValue = {
    selectedCity,
    setSelectedCity,
    remoteValue,
    setRemoteValue,
    offerType,
    setOfferType,
    salaryFilter,
    setSalaryFilter,
    selectedCurrency,
    setSelectedCurrency,
    savedFilters,
    selectedTechnology,
    setSelectedTechnology,
    userText,
    setUserText,
    handleSavedFilters,
    handleDeleteFilter,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
