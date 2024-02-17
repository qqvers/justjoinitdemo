export default function OfferTop({ selectedItem }) {
  return (
    <div className="offer_wrapper">
      <div className="offer_logo">
        <img src={selectedItem.logo} alt="logo" />
      </div>

      <div>
        <div>
          <h1>{selectedItem.position}</h1>
        </div>
        <div>
          <span>{selectedItem.company}</span>
        </div>
        <div>
          <span>{selectedItem.salary}</span>
        </div>
      </div>
    </div>
  );
}
