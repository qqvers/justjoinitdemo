import { forwardRef, useState } from "react";

const ModalLocation = forwardRef(function ModalLocation({ handleSelect }, ref) {
  const [selectedCity, setSelectedCity] = useState("");

  function handleCityName(value) {
    setSelectedCity(value);
  }

  return (
    <dialog ref={ref}>
      <div className="ml_wrapper">
        <button
          onClick={() => {
            handleSelect(null);
          }}
        >
          X
        </button>
        <button
          onClick={() => {
            handleSelect("Location");
          }}
        >
          Clear filters
        </button>
        <h2>Location</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Where do you want to work?"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          />
        </div>

        <h3>Top Poland</h3>

        <button onClick={() => handleCityName("Kraków")}>Kraków</button>
        <button onClick={() => handleCityName("Śląsk")}>Śląsk</button>
        <button onClick={() => handleCityName("Trójmiasto")}>Trójmiasto</button>
        <button onClick={() => handleCityName("Warszawa")}>Warszawa</button>
        <button onClick={() => handleCityName("Wrocław")}>Wrocław</button>

        <h3>Top World</h3>

        <button onClick={() => handleCityName("Berlin")}>Berlin</button>
        <button onClick={() => handleCityName("London")}>London</button>
        <button onClick={() => handleCityName("New York")}>New York</button>
        <button onClick={() => handleCityName("San Francisco")}>
          San Francisco
        </button>
        <button onClick={() => handleCityName("Sydney")}>Sydney</button>
        <h3>Other Locations</h3>

        <button onClick={() => handleCityName("Białystok")}>Białystok</button>
        <button onClick={() => handleCityName("Bielsko-Biała")}>
          Bielsko-Biała
        </button>
        <button onClick={() => handleCityName("Bydgoszcz")}>Bydgoszcz</button>
        <button onClick={() => handleCityName("Częstochowa")}>
          Częstochowa
        </button>
        <button onClick={() => handleCityName("Kielce")}>Kielce</button>
        <button onClick={() => handleCityName("Łódź")}>Łódź</button>
        <button onClick={() => handleCityName("Lublin")}>Lublin</button>
        <button onClick={() => handleCityName("Olsztyn")}>Olsztyn</button>
        <button onClick={() => handleCityName("Opole")}>Opole</button>
        <button onClick={() => handleCityName("Poznań")}>Poznań</button>
        <button onClick={() => handleCityName("Rzeszów")}>Rzeszów</button>
        <button onClick={() => handleCityName("Szczecin")}>Szczecin</button>
        <button onClick={() => handleCityName("Toruń")}>Toruń</button>
        <button onClick={() => handleCityName("Zielona Góra")}>
          Zielona Góra
        </button>
      </div>
      <div className="button-show-offers">
        <button onClick={() => handleSelect(selectedCity)}>Show offers</button>
      </div>
    </dialog>
  );
});

export default ModalLocation;
