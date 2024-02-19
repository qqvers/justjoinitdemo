import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { jobData } from "../../data";
import { MyContext } from "../MyContext";

export default function JobsList({ newJobData, currentID }) {
  const {
    salaryFilter,
    selectedCity,
    remoteValue,
    selectedTechnology,
    offerType,
    selectedCurrency,
    userText,
  } = useContext(MyContext);
  var data = newJobData ? newJobData : jobData;

  const exchangeRates = {
    PLN: 1,
    EUR: 4.5,
    USD: 4.0,
    GBP: 5.0,
    CHF: 4.2,
    DEF: 1,
  };

  function convertSalary(salary, currency, exchangeRates) {
    const currencySymbols = {
      PLN: "zł",
      EUR: "€",
      USD: "$",
      GBP: "£",
      CHF: "CHF",
      DEF: "zł",
    };
    const currencySymbol = currencySymbols[currency] || currencySymbols["DEF"];

    if (!salary || salary === "Undisclosed Salary") {
      return salary;
    }

    var salaryRange = salary.match(/\d+/g);
    salaryRange[0] = salaryRange[0] + salaryRange[1];
    salaryRange[1] = salaryRange[2] + salaryRange[3];
    if (!salaryRange) {
      return salary;
    }

    const convertedRange = salaryRange.map((amount) => {
      const amountNumber = Number(amount.replace(/,/g, ""));
      return Math.round(
        amountNumber / exchangeRates[currency]
      ).toLocaleString();
    });

    return `${convertedRange[0]} - ${convertedRange[1]} ${currencySymbol}`;
  }

  const filteredData = data.filter((job) => {
    const matchSalary = salaryFilter
      ? true
      : job.salary !== "Undisclosed Salary";
    const matchCity = selectedCity === "Location" || job.city === selectedCity;
    const matchRemote = remoteValue ? job.fullyRemote : true;
    const matchTechnology =
      selectedTechnology !== "undefined" && selectedTechnology
        ? job.technologies.includes(selectedTechnology)
        : job.technologies;
    const matchUserText = userText
      ? job.position.toLowerCase().includes(userText.toLowerCase()) ||
        job.company.toLowerCase().includes(userText.toLowerCase()) ||
        job.technologies.some((tech) =>
          tech.toLowerCase().includes(userText.toLowerCase())
        )
      : true;

    return (
      matchCity &&
      matchRemote &&
      matchTechnology &&
      matchSalary &&
      matchUserText
    );
  });

  const sortJobs = (jobs, type) => {
    switch (type) {
      case "Latest":
        return [...jobs].sort(
          (a, b) => new Date(b.date_added) - new Date(a.date_added)
        );
      case "Highest salary":
        return [...jobs].sort((a, b) => {
          const salaryA = a.salary.split("-")[1] || a.salary;
          const salaryB = b.salary.split("-")[1] || b.salary;
          return (
            parseInt(salaryB.replace(/\D/g, ""), 10) -
            parseInt(salaryA.replace(/\D/g, ""), 10)
          );
        });
      case "Lowest salary":
        return [...jobs].sort((a, b) => {
          const salaryA = a.salary.split("-")[0] || a.salary;
          const salaryB = b.salary.split("-")[0] || b.salary;
          return (
            parseInt(salaryA.replace(/\D/g, ""), 10) -
            parseInt(salaryB.replace(/\D/g, ""), 10)
          );
        });
      case "Default":
      default:
        return jobs;
    }
  };

  const orderedData = sortJobs(filteredData, offerType);

  return (
    <div>
      {orderedData.map((job) => {
        const convertedSalary = convertSalary(
          job.salary,
          selectedCurrency,
          exchangeRates
        );
        return job.id !== currentID ? (
          <Link
            to={`/offers/${job.id}`}
            key={job.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "20px",
              textDecoration: "none",
              color: "black",
            }}
          >
            <img
              src={job.logo}
              alt="Company Logo"
              style={{
                maxWidth: "100px",
                maxHeight: "100px",
                marginBottom: "10px",
              }}
            />
            <h2>{job.position}</h2>
            <p>{job.company}</p>
            <p>{job.city}</p>
            <p>{job.fullyRemote ? "Fully Remote" : "Not Fully Remote"}</p>
            <p>
              {job.friendly ? "Friendly Workplace" : "Not Friendly Workplace"}
            </p>
            <p>{convertedSalary}</p>
            {job.technologies && job.technologies.length > 0 && (
              <p>Technologies: {job.technologies.join(", ")}</p>
            )}
            <p>{job.date_added}</p>
          </Link>
        ) : null;
      })}
    </div>
  );
}
