import { forwardRef, useState } from "react";

const ModalLocation = forwardRef(function ModalLocation({ handleSelect }, ref) {
  const [selectedCity, setSelectedCity] = useState("");

  const citiesPoland = ["Kraków", "Śląsk", "Trójmiasto", "Warszawa", "Wrocław"];
  const citiesWorld = [
    "Berlin",
    "London",
    "New York",
    "San Francisco",
    "Sydney",
  ];
  const otherCities = [
    "Białystok",
    "Bielsko-Biała",
    "Bydgoszcz",
    "Częstochowa",
    "Kielce",
    "Łódź",
    "Lublin",
    "Olsztyn",
    "Opole",
    "Poznań",
    "Rzeszów",
    "Szczecin",
    "Toruń",
    "Zielona Góra",
  ];

  function handleCityName(value) {
    setSelectedCity(value);
  }

  const renderCityButtons = (citiesArray) =>
    citiesArray.map((city) => (
      <button
        key={city}
        className="location_button_modal"
        onClick={() => handleCityName(city)}
      >
        {city}
      </button>
    ));

  return (
    <dialog ref={ref} className="modal_location_dialog">
      <div className="ml_wrapper">
        <div className="modal_location_top">
          <button
            onClick={() => {
              handleSelect(null);
            }}
          >
            X
          </button>

          <h2>Location</h2>
          <div
            onClick={() => {
              handleSelect("Location");
            }}
          >
            Clear filters
          </div>
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Where do you want to work?"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          />
        </div>

        <h3>Top Poland</h3>

        {renderCityButtons(citiesPoland)}

        <h3>Top World</h3>
        {renderCityButtons(citiesWorld)}

        <h3>Other Locations</h3>
        {renderCityButtons(otherCities)}
      </div>
      <div className="button-show-offers">
        <button onClick={() => handleSelect(selectedCity)}>Show offers</button>
      </div>
    </dialog>
  );
});

export default ModalLocation;
