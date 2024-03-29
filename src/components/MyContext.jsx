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
  const [jobsTotal, setJobsTotal] = useState();

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

    setSavedFilters((prevState) => {
      const filterExists = prevState.some(
        (filter) =>
          filter.city === newFilter.city &&
          filter.remote === newFilter.remote &&
          filter.offer === newFilter.offer &&
          filter.salary === newFilter.salary &&
          filter.currency === newFilter.currency &&
          filter.technology === newFilter.technology
      );

      if (filterExists) {
        return prevState;
      }

      return prevState.concat(newFilter);
    });
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
    jobsTotal,
    setJobsTotal,
    handleSavedFilters,
    handleDeleteFilter,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
