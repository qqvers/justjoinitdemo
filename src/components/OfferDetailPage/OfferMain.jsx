import OfferTop from "./OfferTop";
import OfferUnderTop from "./OfferUnderTop";
import OfferTechStack from "./OfferTechStack";
import OfferJobDescription from "./OfferJobDescription";
import OfferSimilar from "./OfferSimilar";
import OfferApply from "./OfferApply";
import OfferNavigation from "./OfferNavigation";
import OfferFooter from "./OfferFooter.jsx";
import { useParams } from "react-router-dom";
import { jobData } from "../../data.js";

export default function OfferMain() {
  const { id } = useParams();
  const selectedItem = jobData[id - 1];
  return (
    <div>
      <OfferNavigation selectedItem={selectedItem} />
      <OfferTop selectedItem={selectedItem} />
      <OfferUnderTop />
      <OfferTechStack selectedItem={selectedItem} />
      <OfferJobDescription selectedItem={selectedItem} />
      <OfferSimilar selectedItem={selectedItem} />
      <OfferApply />
      <OfferFooter />
    </div>
  );
}
