import SalaryFilter from "./SalaryFilter";
import RemoteSwitch from "./RemoteSwitch";
import OfferType from "./OfferType";
import Subscribe from "./Subscribe";

export default function HomePageUnderTop() {
  return (
    <div className="undertop_wrapper">
      <SalaryFilter />
      <OfferType />
      <RemoteSwitch />
      <Subscribe />
    </div>
  );
}
