import Technologies from "./Technologies";
import Location from "./Location";
import Search from "./Search";
import MoreFilters from "./MoreFilters";
export default function HomePageTop() {
  return (
    <div className="hmp_wrapper">
      <Search />
      <Location />
      <Technologies />
      <MoreFilters />
    </div>
  );
}
