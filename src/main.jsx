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
import DestinationDetails from "./components/destinationDetails.jsx";

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
        path: "destinationdetails",
        element: <DestinationDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
