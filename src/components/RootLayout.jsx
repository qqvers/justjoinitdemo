import Navigation from "./Navigation/Navigation";
import { Outlet } from "react-router-dom";
import NavigationHandler from "./NavigationHandler";

export default function RootLayout() {
  return (
    <>
      <Navigation></Navigation>
      <main>
        <Outlet></Outlet>
      </main>
      <NavigationHandler />
    </>
  );
}
