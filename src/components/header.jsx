export default function Header() {
  return (
    <>
      <div id="preloader" className="preloader ">
        <div className="preloader-inner">
          <img
            src="assets/img/travelbug_logo.png"
            alt=""
            style={{ width: "60%" }}
          />
        </div>

        <div id="loader" className="th-preloader" style={{ marginTop: "75px" }}>
          <div className="animation-preloader">
            <div className="txt-loading">
              <span preloader-text="T" className="characters">
                T{" "}
              </span>

              <span preloader-text="R" className="characters">
                R{" "}
              </span>

              <span preloader-text="A" className="characters">
                A{" "}
              </span>

              <span preloader-text="V" className="characters">
                V{" "}
              </span>

              <span preloader-text="E" className="characters">
                E{" "}
              </span>

              <span preloader-text="L" className="characters">
                L{" "}
              </span>

              <span preloader-text=" " className="characters">
                {" "}
              </span>

              <span preloader-text=" " className="characters">
                {" "}
              </span>

              <span preloader-text="B" className="characters">
                B{" "}
              </span>

              <span preloader-text="U" className="characters">
                U{" "}
              </span>

              <span preloader-text="G" className="characters">
                G{" "}
              </span>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="sidemenu-wrapper sidemenu-info ">
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls">
            <i className="far fa-times"></i>
          </button>
          <div className="widget  ">
            <div className="th-widget-about">
              <div className="about-logo">
                <a href="home-travel.html">
                  <img src="assets/img/logo2.svg" alt="Travel Bug" />
                </a>
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
          <div className="widget  ">
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
      <div className="th-menu-wrapper onepage-nav">
        <div className="th-menu-area text-center">
          <button className="th-menu-toggle">
            <i className="fal fa-times"></i>
          </button>
          <div className="mobile-logo">
            <a href="home-travel.html">
              <img src="assets/img/logo2.svg" alt="Travel Bug" />
            </a>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Holidays</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/destination">Beach Holidays</a>
                  </li>
                  <li>
                    <a href="/destination">Ayurveda Wellness</a>
                  </li>
                  <li>
                    <a href="/destination">Escorted Tour</a>
                  </li>
                </ul>
              </li>

              <li className="menu-item-has-children">
                <a href="#">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="contact">Visa Requirements</a>
              </li>

              <li>
                <a href="contact">FAQ</a>
              </li>

              <li>
                <a href="blog">Blog</a>
              </li>

              <li>
                <a href="contact">Contact us</a>
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
                        <a href="index">Home</a>
                      </li>

                      <li>
                        <a href="about">About Us</a>
                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">Holydays</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="destination">Beach Holidays</a>
                          </li>
                          <li>
                            <a href="destination">Ayurveda Wellness</a>
                          </li>
                          <li>
                            <a href="destination">Escorted Tour</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="contact">Visa Requirements</a>
                      </li>

                      <li>
                        <a href="faq">FAQ</a>
                      </li>

                      <li>
                        <a href="blog">Blog</a>
                      </li>

                      <li>
                        <a href="contact">Contact us</a>
                      </li>
                    </ul>
                  </nav>
                  <button
                    type="button"
                    className="th-menu-toggle d-block d-xl-none"
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
