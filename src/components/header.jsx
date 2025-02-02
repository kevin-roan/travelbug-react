import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Package } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [packageTypeList, setPackageTypeList] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const scriptSources = [
      "/assets/js/vendor/jquery-3.6.0.min.js",
      "/assets/js/bootstrap.min.js",
      "/assets/js/swiper-bundle.min.js",
      "/assets/js/jquery.magnific-popup.min.js",
      "/assets/js/jquery.counterup.min.js",
      "/assets/js/jquery-ui.min.js",
      "/assets/js/imagesloaded.pkgd.min.js",
      "/assets/js/isotope.pkgd.min.js",
      "/assets/js/gsap.min.js",
      "/assets/js/circle-progress.js",
      "/assets/js/matter.min.js",
      "/assets/js/matterjs-custom.js",
      "/assets/js/nice-select.min.js",
      "/assets/js/main.js",
    ];

    const scripts = scriptSources.map((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
      return script;
    });

    console.log("Scripts loaded");

    return () => {
      scripts.forEach((script) => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      });
      console.log("Scripts removed");
    };
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    if (window.innerWidth <= 1024) {
      // Check if the screen is mobile-sized
      setIsMobileMenuOpen(!isMobileMenuOpen);
      document.body.classList.toggle("th-body-visible");
    }
  }; // Add cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove("th-body-visible");
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("th-body-visible");
  }, [location]);

  useEffect(() => {
    const initializeMenu = () => {
      if (window.jQuery) {
        // Initialize mobile menu
        window.jQuery(".th-menu-wrapper").thmobilemenu({
          menuToggleBtn: ".th-menu-toggle",
          bodyToggleClass: "th-body-visible",
          subMenuClass: "th-submenu",
          subMenuParent: "menu-item-has-children",
          subMenuParentToggle: "th-active",
          meanExpandClass: "th-mean-expand",
          subMenuToggleClass: "th-open",
          toggleSpeed: 400,
        });

        // Initialize one page nav
        window.jQuery(".onepage-nav").each(function () {
          const link = window.jQuery(this).find("a");
          window
            .jQuery(this)
            .find(link)
            .each(function () {
              window.jQuery(this).on("click", function (e) {
                const target = window.jQuery(this.getAttribute("href"));
                if (target.length) {
                  e.preventDefault();
                  window
                    .jQuery("html, body")
                    .stop()
                    .animate(
                      {
                        scrollTop: target.offset().top - 10,
                      },
                      1000,
                    );
                }
              });
            });
        });
      } else {
        // Retry after a short delay if jQuery isn't loaded yet
        setTimeout(initializeMenu, 100);
      }
    };

    // Start initialization process
    initializeMenu();

    return () => {
      // Cleanup if needed
      if (window.jQuery) {
        window.jQuery(".th-menu-wrapper").off();
        window.jQuery(".onepage-nav").off();
      }
    };
  }, []);

  useEffect(() => {
    axios
      .get("https://iamanas.in/travel_bug/web_api/package_type_list")
      .then((res) => {
        setPackageTypeList(res.data.data);
      })
      .catch((error) => console.error("Package type list error", error));
  }, []);

  return (
    <>
      <div className="sidemenu-wrapper sidemenu-info ">
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls">
            <i className="far fa-times"></i>
          </button>
          <div className="widget  ">
            <div className="th-widget-about">
              <div className="about-logo">
                <Link to="/">
                  <img src="assets/img/logo2.svg" alt="Travel Bug" />
                </Link>
              </div>
              <p className="about-text">
                Discover new horizons with tailored travel experiences. Your
                adventure awaits—start exploring with us
              </p>
              <div className="th-social">
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.whatsapp.com/">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="widget  ">
            <h3 className="widget_title">Recent Posts</h3>
            <div className="recent-post-wrap">
              <div className="recent-post">
                <div className="media-img">
                  <a href="blog-details.html">
                    <img
                      src="assets/img/blog/recent-post-1-1.jpg"
                      alt="Blog Image"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <div className="recent-post-meta">
                    <a href="blog.html">
                      <i className="far fa-calendar"></i>24 Jun , 2024
                    </a>
                  </div>
                  <h4 className="post-title">
                    <a className="text-inherit" href="blog-details.html">
                      Where Vision Meets Concrete Reality
                    </a>
                  </h4>
                </div>
              </div>
              <div className="recent-post">
                <div className="media-img">
                  <a href="blog-details.html">
                    <img
                      src="assets/img/blog/recent-post-1-2.jpg"
                      alt="Blog Image"
                    />
                  </a>
                </div>
                <div className="media-body">
                  <div className="recent-post-meta">
                    <a href="blog.html">
                      <i className="far fa-calendar"></i>22 Jun , 2024
                    </a>
                  </div>
                  <h4 className="post-title">
                    <a className="text-inherit" href="blog-details.html">
                      Raising the Bar in Construction.
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="widget">
            <h3 className="widget_title">Get In Touch</h3>
            <div className="th-widget-contact">
              <div className="info-box_text">
                <div className="icon">
                  <img src="assets/img/icon/phone.svg" alt="img" />
                </div>
                <div className="details">
                  <p>
                    <a href="tel:+01234567890" className="info-box_link">
                      +01 234 567 890
                    </a>
                  </p>
                  <p>
                    <a href="tel:+09876543210" className="info-box_link">
                      +09 876 543 210
                    </a>
                  </p>
                </div>
              </div>
              <div className="info-box_text">
                <div className="icon">
                  <img src="assets/img/icon/envelope.svg" alt="img" />
                </div>
                <div className="details">
                  <p>
                    <a
                      href="mailto:mailinfo00@example.com"
                      className="info-box_link"
                    >
                      mailinfo.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:support24@example.com"
                      className="info-box_link"
                    >
                      support.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="info-box_text">
                <div className="icon">
                  <img src="assets/img/icon/location-dot.svg" alt="img" />
                </div>
                <div className="details">
                  <p>Kochi, Kerala</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popup-search-box">
        <button className="searchClose">
          <i className="fal fa-times"></i>
        </button>
        <form action="#">
          <input type="text" placeholder="What are you looking for?" />
          <button type="submit">
            <i className="fal fa-search"></i>
          </button>
        </form>
      </div>{" "}
      <div
        className={`th-menu-wrapper onepage-nav ${isMobileMenuOpen ? "th-body-visible" : ""}`}
      >
        <div className="th-menu-area text-center" style={{ border: "none" }}>
          {/*
          <button
            className="th-menu-toggle"
            onClick={toggleMobileMenu}
            style={{
              zIndex: "1000 !important",
            }}
          >
            <i className="fal fa-times"></i>
          </button>
          */}
          <div className="mobile-logo">
            <Link to="/">
              <img
                src="assets/img/travelbug_logo.png"
                alt="Travel Bug"
                style={{
                  height: "5rem",
                  width: "10rem",
                }}
              />
            </Link>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li>
                <Link to="/" onClick={toggleMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMobileMenu}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={toggleMobileMenu}>
                  Gallery
                </Link>
              </li>
              <li className="menu-item-has-children">
                <Link href="/holiday_packages">Holidays</Link>
                {packageTypeList &&
                  packageTypeList.map((item, _) => (
                    <li key={item.id}>
                      <Link
                        to={`/tour_packages/${item.id}`}
                        style={{ color: "gray", padding: 10 }}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
              </li>
              <li>
                <Link to="/blog">Blogs</Link>
              </li>
              <li>
                <Link to="/visa_requirements" onClick={toggleMobileMenu}>
                  Visa Requirements
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={toggleMobileMenu}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMobileMenu}>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header className="th-header header-layout1">
        <div className="header-top">
          <div className="container th-container">
            <div className="row justify-content-center justify-content-xl-between align-items-center">
              <div className="col-auto d-none d-md-block">
                <div className="header-links">
                  <ul>
                    <li className="d-none d-xl-inline-block">
                      <i className="fa-sharp fa-regular  fa-location-dot"></i>
                      <span>Calicut, India, Kerala</span>
                    </li>
                    <li className="d-none d-xl-inline-block">
                      <i className="fa-regular fa-clock"></i>
                      <span>Sun to Friday: 8.00 am - 7.00 pm</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container th-container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a href="">
                      <img
                        src="assets/img/travelbug_logo.png"
                        alt="Travel Bug"
                        style={{ width: "120px" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-auto me-xl-auto">
                  <nav className="main-menu d-none d-xl-inline-block">
                    <ul>
                      <li>
                        <Link to="/" onClick={toggleMobileMenu}>
                          Home
                        </Link>
                      </li>

                      <li>
                        <Link to="/about" onClick={toggleMobileMenu}>
                          About Us
                        </Link>
                      </li>
                      {/* make this dynamic */}
                      <li className="menu-item-has-children">
                        <Link to="/holiday_packages" onClick={toggleMobileMenu}>
                          Holidays
                        </Link>
                        <ul className="sub-menu">
                          {packageTypeList &&
                            packageTypeList.map((item) => (
                              <li key={item.id}>
                                <Link to={`/tour_packages/${item.id}`}>
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </li>

                      <li>
                        <Link
                          to="/visa_requirements"
                          onClick={toggleMobileMenu}
                        >
                          Visa Requirements
                        </Link>
                      </li>

                      <li>
                        <Link to="/faq" onClick={toggleMobileMenu}>
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link to="/gallery" onClick={toggleMobileMenu}>
                          Gallery
                        </Link>
                      </li>

                      <li>
                        <Link to="/blog" onClick={toggleMobileMenu}>
                          Blog
                        </Link>
                      </li>

                      <li>
                        <Link to="/contact" onClick={toggleMobileMenu}>
                          Contact us
                        </Link>
                      </li>
                    </ul>
                  </nav>

                  <button
                    type="button"
                    className="th-menu-toggle d-inline-block d-xl-none"
                    onClick={toggleMobileMenu}
                    style={{
                      display: "flex", // Use flexbox for better centering
                      justifyContent: "center", // Center horizontally
                      alignItems: "center", // Center vertically
                      background: "var(--theme-color)",
                      border: "none !important",
                      width: "40px",
                      height: "40px",
                      fontSize: "20px",
                      color: "#fff",
                      zIndex: 10000,
                      marginTop: 15,
                      cursor: "pointer",
                      padding: 0, // Remove extra padding to keep icon centered
                    }}
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="menu-overlay"
          onClick={toggleMobileMenu}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 998,
          }}
        />
      )}
    </>
  );
}
