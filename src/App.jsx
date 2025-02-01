import { useEffect, useState } from "react";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import "./App.css";
import "./Custom.css";
import "./sass/style.scss";
import "./Swiper-Bundle.css";
import Footer from "./components/footer.jsx";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
