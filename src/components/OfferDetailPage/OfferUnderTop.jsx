import { ReactComponent as IconWork } from "../../photos3_icons/work.svg";
import { ReactComponent as IconExperience } from "../../photos3_icons/star.svg";
import { ReactComponent as IconEmployment } from "../../photos3_icons/employment.svg";
import { ReactComponent as IconOperating } from "../../photos3_icons/operating.svg";

export default function OfferUnderTop() {
  return (
    <div className="offerUT_container">
      <div className="offerUT_box">
        <span>
          <IconWork
            style={{
              scale: "1.4",
              backgroundColor: "orange",
              borderRadius: "25%",
            }}
          />
        </span>
        <span>Type of work</span>
        <span>Full time</span>
      </div>

      <div className="offerUT_box">
        <span>
          <IconExperience
            style={{
              scale: "1.4",
              backgroundColor: "pink",
              borderRadius: "25%",
            }}
          />
        </span>
        <span>Experience</span>
        <span>Senior</span>
      </div>

      <div className="offerUT_box">
        <span>
          <IconEmployment
            style={{
              scale: "1.4",
              backgroundColor: "lightgreen",
              borderRadius: "25%",
            }}
          />
        </span>
        <span>Employment Type</span>
        <span>Permanent</span>
      </div>

      <div className="offerUT_box">
        <span>
          <IconOperating
            style={{
              scale: "1.4",
              backgroundColor: "lightblue",
              borderRadius: "25%",
            }}
          />
        </span>
        <span>Operating mode</span>
        <span>Remote/Hybrid</span>
      </div>
    </div>
  );
}
