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

  return (
    <div>
      <h1>Tech stack</h1>
      {selectedItem.technologies.map((item) => {
        const randomNumber = generateRandom();
        const skillLevel = getSkillLevel(randomNumber);
        return (
          <div key={item}>
            {item} {randomNumber}- {skillLevel}
          </div>
        );
      })}
    </div>
  );
}
