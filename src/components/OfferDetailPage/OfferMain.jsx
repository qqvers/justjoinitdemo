import OfferTop from "./OfferTop";
import OfferUnderTop from "./OfferUnderTop";
import OfferTechStack from "./OfferTechStack";
import OfferJobDescription from "./OfferJobDescription";
import OfferSimilar from "./OfferSimilar";
import OfferApply from "./OfferApply";
import OfferNavigation from "./OfferNavigation";
import { useParams } from "react-router-dom";
import { jobData } from "../../data.js";

export default function OfferMain() {
  const { id } = useParams();
  const selectedItem = jobData[id - 1];
  return (
    <div>
      <OfferNavigation selectedItem={selectedItem} />
      <div className="offer_main_wrapper">
        <OfferTop selectedItem={selectedItem} />
        <OfferUnderTop />
        <OfferTechStack selectedItem={selectedItem} />
        <OfferJobDescription selectedItem={selectedItem} />
        <OfferSimilar selectedItem={selectedItem} />
        <OfferApply />
      </div>
    </div>
  );
}
