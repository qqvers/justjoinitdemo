import { jobData } from "../../data.js";
import JobsList from "../JobsArea/JobsList.jsx";
export default function OfferSimilar({ selectedItem }) {
  function randomSort() {
    return Math.random() - 0.5;
  }
  const shuffledJobData = jobData.slice().sort(randomSort);
  const slicedData = shuffledJobData.slice(0, 3);
  return (
    <div className="offer_similar_container">
      <h3>Check similar offers</h3>
      <JobsList
        style={{
          backgroundColor: "white",
          margin: "0 1rem",
          width: "calc(100% - 2rem)",
          borderBottomLeftRadius: "2rem",
          borderBottomRightRadius: "2rem",
        }}
        newJobData={slicedData}
        currentID={selectedItem.id}
      ></JobsList>
    </div>
  );
}
