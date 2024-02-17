import { useContext } from "react";
import { MyContext } from "../MyContext.jsx";

export default function SalaryFilter() {
  const { salaryFilter, setSalaryFilter } = useContext(MyContext);
  function handleSelect(value) {
    if (salaryFilter !== value) {
      setSalaryFilter(value);
    }
  }
  return (
    <>
      <button
        onClick={() => {
          handleSelect(false);
        }}
        className={!salaryFilter ? "first_selected" : "second_selected"}
      >
        With Salary
      </button>
      <button
        onClick={() => {
          handleSelect(true);
        }}
        className={salaryFilter ? "first_selected" : "second_selected"}
      >
        All offers
      </button>
    </>
  );
}
