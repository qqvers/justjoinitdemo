export default function OfferTechStack({ selectedItem }) {
  function generateRandom() {
    return Math.floor(Math.random() * 5) + 1;
  }

  function getSkillLevel(number) {
    switch (number) {
      case 1:
        return "Nice To Have";
      case 2:
        return "Junior";
      case 3:
        return "Regular";
      case 4:
        return "Advanced";
      case 5:
        return "Master";
      default:
        return "Unknown";
    }
  }

  function renderDots(numberOfPink) {
    let dots = [];
    for (let i = 1; i <= 5; i++) {
      dots.push(
        <span
          key={i}
          style={{ color: i <= numberOfPink ? "rgb(238, 81, 107)" : "gray" }}
        >
          &bull;
        </span>
      );
    }
    return <span>{dots}</span>;
  }

  return (
    <div className="job_container">
      <h1>Tech stack</h1>
      <div className="offer_tech_stack_technology_container">
        {selectedItem.technologies.map((item, index) => {
          const randomNumber = generateRandom();
          const skillLevel = getSkillLevel(randomNumber);
          return (
            <div key={index} className="tech_stack_items">
              <p>{item}</p>
              <p className="offer_tech_stack_dots">
                {renderDots(randomNumber)}
              </p>
              <p>{skillLevel}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
