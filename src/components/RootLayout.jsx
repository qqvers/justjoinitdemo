import Navigation from "./Navigation/Navigation";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Navigation></Navigation>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
