import MainWrapper from "./JobsArea/MainWrapper";
import HomePageTop from "./Top/HomePageTop";
import HomePageUnderTop from "./UnderTop/HomePageUnderTop";
import NavigationHandler from "./NavigationHandler";

export default function HomePage() {
  return (
    <>
      <NavigationHandler />
      <div className="home_page_wrapper">
        <HomePageTop />
        <HomePageUnderTop />
        <MainWrapper />
      </div>
    </>
  );
}
