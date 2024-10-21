import Header from "./components/header";
import { Outlet } from "react-router-dom";
import "./App.css";
import "./sass/style.scss";
import "./Swiper-Bundle.css";
import Footer from "./components/footer.jsx";
import AnimatedCursor from "react-animated-cursor";

function App() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "assets/js/vendor/jquery-3.6.0.min.js";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src = "assets/js/main.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);
  return (
    <>
      <Header />
      <AnimatedCursor
        innerSize={14}
        outerSize={32}
        color="28, 168, 203"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Outlet /> {/* This renders the matched child route */}
      <Footer />
    </>
  );
}

export default App;
