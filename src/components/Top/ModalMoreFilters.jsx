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
      className="modal_more_filters_dialog demo-warning"
    >
      <div className="modal_more_filters_container">
        <div className="modal_location_top">
          <button onClick={handleSelect}>X</button>
          <h2>More filters</h2>
          <div>Clear filters</div>
        </div>
        <h3>Salary</h3>
        <div className="salary_wrapper">
          <div className="modal_more_filters_min">
            <label htmlFor="salary_min">Salary min</label>
            <input type="text" id="salary_min" defaultValue="0 PLN" />
          </div>
          <div className="modal_more_filters_max">
            <label htmlFor="salary_max">Salary max</label>
            <input type="text" id="salary_max" defaultValue="100 000 PLN" />
          </div>
        </div>
        <div>
          <label htmlFor="salary_range" />
          <input
            type="range"
            id="salary_range"
            min="0"
            max="100000"
            defaultValue="50000"
          />
          <div className="modal_more_filters_zip">
            <span>0 PLN</span>
            <span>100 000 PLN</span>
          </div>
        </div>

        <div className="friendly_wrapper">
          <h3>Friendly Offer</h3>

          <label
            className="switch"
            style={{ scale: "1.5", marginLeft: "0.5rem" }}
          >
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <span>Show only Friendly Offers</span>
          <div
            className="job_friendly_workplace"
            style={{
              display: "inline-block",
              marginLeft: "1rem",
              scale: "1.5",
            }}
          />
        </div>
        <div className="exp_emp_wrapper">
          <h2>Experience</h2>
          <div className="modal_more_filters_checkbox_wrapper">
            <input type="checkbox" id="junior" />
            <label htmlFor="junior">Junior</label>
          </div>
          <div className="modal_more_filters_checkbox_wrapper">
            <input type="checkbox" id="mid" />
            <label htmlFor="mid">Mid</label>
          </div>
          <div className="modal_more_filters_checkbox_wrapper">
            <input type="checkbox" id="senior" />
            <label htmlFor="senior">Senior</label>
          </div>
          <div className="modal_more_filters_checkbox_wrapper">
            <input type="checkbox" id="clevel" />
            <label htmlFor="clevel">C-level</label>
          </div>
        </div>
        <div className="exp_emp_wrapper">
          <h2>Employment type</h2>
          <div className="modal_more_filters_checkbox_wrapper">
            <input type="checkbox" id="b2b" />
            <label htmlFor="b2b">B2B</label>
          </div>
          <div className="modal_more_filters_checkbox_wrapper">
            <input type="checkbox" id="permanent" />
            <label htmlFor="permanent">Permanent</label>
          </div>
          <div className="modal_more_filters_checkbox_wrapper">
            <input type="checkbox" id="internship" />
            <label htmlFor="internship">Internship</label>
          </div>
          <div className="modal_more_filters_checkbox_wrapper">
            <input type="checkbox" id="mandatecontract" />
            <label htmlFor="mandatecontract">Mandate contract</label>
          </div>
          <div className="modal_more_filters_checkbox_wrapper">
            <input type="checkbox" id="specifictaskcontract" />
            <label htmlFor="specifictaskcontract">Specific-task contract</label>
          </div>
        </div>
        <div className="exp_emp_wrapper">
          <h2>Type of work</h2>
          <div className="modal_more_filters_checkbox_wrapper">
            <input type="checkbox" id="fulltime" />
            <label htmlFor="fulltime">Full-time</label>
          </div>
          <div className="modal_more_filters_checkbox_wrapper">
            <input type="checkbox" id="parttime" />
            <label htmlFor="parttime">Part-time</label>
          </div>
          <div className="modal_more_filters_checkbox_wrapper">
            <input type="checkbox" id="internshipwork" />
            <label htmlFor="internshipwork">Internship</label>
          </div>
          <div className="modal_more_filters_checkbox_wrapper">
            <input type="checkbox" id="practiceinternship" />
            <label htmlFor="practiceinternship">Practice / Internship</label>
          </div>
          <div className="modal_more_filters_checkbox_wrapper">
            <input type="checkbox" id="freelance" />
            <label htmlFor="freelance">Freelance</label>
          </div>
        </div>
      </div>
      <div className="button-show-offers">
        <button
          onClick={handleSelect}
          style={{ width: "15rem", height: "3rem" }}
        >
          Show offers
        </button>
      </div>
    </dialog>
  );
});

export default ModalMoreFilters;
