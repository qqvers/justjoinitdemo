import { ReactComponent as IconCompany } from "../../photos3_icons/company_white.svg";
import { ReactComponent as IconLocation } from "../../photos3_icons/location_white.svg";
import { ReactComponent as IconMoney } from "../../photos3_icons/money.svg";

export default function OfferTop({ selectedItem }) {
  return (
    <div className="offer_wrapper">
      <div className="offer_logo">
        <img src={selectedItem.logo} alt="logo" />
      </div>

      <div className="offer_top">
        <div>
          <h1>{selectedItem.position}</h1>
        </div>
        <div style={{ marginLeft: "1rem" }}>
          <IconCompany />
          <span>{selectedItem.company}</span>
          <IconLocation />
          <span>{selectedItem.city}</span>
        </div>
        <div className="offer_top_salary">
          <div className="offer_top_salary_icon">
            <IconMoney />
          </div>
          <div className="offer_top_salary_value">
            <p>{selectedItem.salary}</p>
            <p>Net/month - B2B</p>
          </div>
        </div>
      </div>
    </div>
  );
}
