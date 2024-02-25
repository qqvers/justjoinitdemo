import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { jobData } from "../../data";
import { MyContext } from "../MyContext";

export default function JobsList({ newJobData, currentID, style }) {
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
    const matchUserText =
      userText !== "empty"
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
    <div className="jobs_container" style={style ? style : null}>
      {orderedData.map((job) => {
        const convertedSalary = convertSalary(
          job.salary,
          selectedCurrency,
          exchangeRates
        );
        return job.id !== currentID ? (
          <Link to={`/offers/${job.id}`} key={job.id}>
            <div className="job_list_element_container">
              <img src={job.logo} alt="Company Logo" />
              <div className="job_list_column_two">
                <span>{job.position}</span>
                <p>{job.company}</p>
                <p>{job.city}</p>
                <p className={job.fullyRemote ? "job_list_remote" : null}>
                  {job.fullyRemote ? "Fully Remote" : null}
                </p>
                <p className={job.friendly ? "job_friendly_workplace" : ""}></p>
              </div>
              <div className="job_list_column_three">
                <p className="job_list_element_salary">{convertedSalary}</p>
                <p className="job_list_element_date">{job.date_added}</p>
                {job.technologies && job.technologies.length > 0 && (
                  <div className="job_list_element_technology">
                    {job.technologies.map((technology) => {
                      return <p key={technology}>{technology}</p>;
                    })}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ) : null;
      })}
    </div>
  );
}
