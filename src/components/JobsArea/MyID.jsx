import { useContext } from "react";
import { MyContext } from "../MyContext";

export default function MyID() {
  const { jobsTotal, salaryFilter } = useContext(MyContext);
  return (
    <>
      <div className="myid_top_container">
        <span>
          Work: {salaryFilter ? " All offers -" : ""} {jobsTotal} offers
        </span>
      </div>
      <div className="myid_bartek">by Bartłomiej Szczepanik</div>
    </>
  );
}
