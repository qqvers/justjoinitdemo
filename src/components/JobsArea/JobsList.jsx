import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { jobData } from "../../data";
import { MyContext } from "../MyContext";

export default function JobsList({ newJobData, currentID }) {
  const { salaryFilter } = useContext(MyContext);
  var data = newJobData ? newJobData : jobData;

  function test(value) {
    console.log(value);
  }
  return (
    <div>
      {data.map((job) => {
        return job.id !== currentID &&
          ((job.salary !== "Undisclosed Salary" && salaryFilter) ||
            (job.salary === "Undisclosed Salary" && !salaryFilter)) ? (
          <Link
            to={`/offers/${job.id}`}
            key={job.id}
            onClick={() => test(job.id)}
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
            <p>{job.salary}</p>
            {job.technologies && job.technologies.length > 0 && (
              <p>Technologies: {job.technologies.join(", ")}</p>
            )}
          </Link>
        ) : null;
      })}
    </div>
  );
}
