import { forwardRef } from "react";

const ModalMoreFilters = forwardRef(function ModalMoreFilters(
  { handleSelect },
  ref
) {
  return (
    <dialog
      ref={ref}
      onClick={() => {
        handleSelect(null);
      }}
    >
      <div className="top_wrapper">
        <button>X</button>
        <p>More filters</p>
        <button>Clear filters</button>
      </div>
      <div className="salary_wrapper">
        <h4>Salary</h4>
        <label>Salary min</label>
        <input type="text" defaultValue="0 PLN" />
        <label>Salary max</label>
        <input type="text" defaultValue="100 000 PLN" />
        <h5>SUWAK DODAJ</h5>
      </div>

      <div className="friendly_wrapper">
        <h4>Friendly Offer</h4>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <span>Show only Friendly Offers</span>
      </div>
      <div className="exp_emp_wrapper">
        <h4>Experience</h4>
        <input type="checkbox" id="junior" />
        <label htmlFor="junior">Junior</label>
        <input type="checkbox" id="mid" />
        <label htmlFor="mid">Mid</label>
        <input type="checkbox" id="senior" />
        <label htmlFor="senior">Senior</label>
        <input type="checkbox" id="clevel" />
        <label htmlFor="clevel">C-level</label>
      </div>
      <div className="exp_emp_wrapper">
        <h4>Employment type</h4>
        <input type="checkbox" id="b2b" />
        <label htmlFor="b2b">B2B</label>
        <input type="checkbox" id="permanent" />
        <label htmlFor="permanent">Permanent</label>
        <input type="checkbox" id="internship" />
        <label htmlFor="internship">Internship</label>
        <input type="checkbox" id="mandatecontract" />
        <label htmlFor="mandatecontract">Mandate contract</label>
        <input type="checkbox" id="specifictaskcontract" />
        <label htmlFor="specifictaskcontract">Specific-task contract</label>
      </div>
      <div className="exp_emp_wrapper">
        <h4>Type of work</h4>
        <input type="checkbox" id="fulltime" />
        <label htmlFor="fulltime">Full-time</label>
        <input type="checkbox" id="parttime" />
        <label htmlFor="parttime">Part-time</label>
        <input type="checkbox" id="internshipwork" />
        <label htmlFor="internshipwork">Internship</label>
        <input type="checkbox" id="practiceinternship" />
        <label htmlFor="practiceinternship">Practice / Internship</label>
        <input type="checkbox" id="freelance" />
        <label htmlFor="freelance">Freelance</label>
      </div>

      <li onClick={() => handleSelect("PLN")}>PLN</li>
    </dialog>
  );
});

export default ModalMoreFilters;
