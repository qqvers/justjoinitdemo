import MainWrapper from "./JobsArea/MainWrapper";
import HomePageTop from "./Top/HomePageTop";
import HomePageUnderTop from "./UnderTop/HomePageUnderTop";
import NavigationHandler from "./NavigationHandler";
//import { useParams } from "react-router-dom";

export default function HomePage() {
  //const { location, technology, remote, salary } = useParams();
  return (
    <>
      <NavigationHandler />
      <HomePageTop />
      <HomePageUnderTop />
      <MainWrapper />
    </>
  );
}
