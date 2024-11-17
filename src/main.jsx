import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Error from "./pages/error.jsx";
import Blog from "./pages/blog";
import FAQ from "./pages/faq";
import About from "./pages/about";
import Destination from "./pages/destination";
import Contact from "./pages/contact";
import Hero from "./pages/hero";
import PrivacyPolicy from "./pages/privacyPolicy.jsx";
import VisaRequirements from "./pages/visaRequirements.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "destination",
        element: <Destination />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "privacy_policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "destination_details/:id",
        element: <destinationdetails />,
      },
      {
        path: "packages/:id",
        element: <packagesPage />,
      },
      {
        path: "visa_requirements",
        element: <VisaRequirements />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
