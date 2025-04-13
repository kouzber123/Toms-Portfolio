import { createBrowserRouter, Navigate } from "react-router";
import App from "./App";
import PortfolioWrapper from "./wrappers/PortfolioWrapper";
import PricingWrapper from "./wrappers/PricingWrapper";
import ContactWrapper from "./wrappers/ContactWrapper";
import LandingWrapper from "./wrappers/LandingWrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <LandingWrapper /> },
      { path: "portfolio", element: <PortfolioWrapper /> },
      { path: "pricing", element: <PricingWrapper /> },
      { path: "contact", element: <ContactWrapper /> },
      {
        path: "*",
        element: <Navigate replace to="/" />,
      },
    ],
  },
]);
