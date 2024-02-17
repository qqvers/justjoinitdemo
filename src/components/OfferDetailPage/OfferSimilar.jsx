import { jobData } from "../../data.js";
import JobsList from "../JobsArea/JobsList.jsx";
export default function OfferSimilar({ selectedItem }) {
  function randomSort() {
    return Math.random() - 0.5;
  }
  const shuffledJobData = jobData.slice().sort(randomSort);
  const slicedData = shuffledJobData.slice(0, 3);
  return (
    <div>
      <h3>Check similar offers</h3>
      <JobsList newJobData={slicedData} currentID={selectedItem.id}></JobsList>
    </div>
  );
}
