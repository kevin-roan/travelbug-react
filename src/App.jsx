import Header from "./components/header";
import Hero from "./pages/hero";
import "./App.css";
import "./sass/style.scss";
import "./Swiper-Bundle.css";
import { useEffect } from "react";
import Destination from "./pages/destination";
import About from "./pages/about";
import FAQ from "./pages/faq";
import Contact from "./pages/contact";
import Blog from "./pages/blog";

function App() {
  useEffect(() => {
    // Create script elements
    const script1 = document.createElement("script");
    script1.src = "assets/js/vendor/jquery-3.6.0.min.js";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src = "assets/js/main.js"; // Include your main.js here
    script2.async = true;

    // Append scripts to the document
    document.body.appendChild(script1);
    document.body.appendChild(script2);

    // Clean up scripts when component unmounts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);
  return (
    <div>
      <Header />
      <Blog />
    </div>
  );
}

export default App;
