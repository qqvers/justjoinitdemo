import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Settings from "./components/Settings";
import HomePage from "./components/HomePage";
import ErrorPage from "./components/ErrorPage";
import OfferMain from "./components/OfferDetailPage/OfferMain";
import { MyContextProvider } from "./components/MyContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "offers/:id", element: <OfferMain /> },
      {
        path: "/:location?/:technology?/:remote?/:salary?/:search?",
        element: <HomePage />,
      },
    ],
  },
  { path: "/settings", element: <Settings /> },
]);

function App() {
  return (
    <MyContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </MyContextProvider>
  );
}

export default App;
