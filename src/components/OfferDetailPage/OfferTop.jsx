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
        <div>
          <span>{selectedItem.company}</span>
          <span>{selectedItem.city}</span>
        </div>
        <div className="offer_top_salary">
          <span>{selectedItem.salary}</span>
          <p>Net/month - B2B</p>
        </div>
      </div>
    </div>
  );
}
