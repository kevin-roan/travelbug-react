import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Modal from "react-modal";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import DOMPurify from "dompurify";
import Card from "../components/Card";
import Accordion from "../components/Accordion";
import FilterCard from "../components/Filtercard";
import TestMonelImage from '../../src/assets/img/testimonial/placeholder.jpg'

export default function Hero() {
  const location = useLocation();
  const [homeData, setHomeData] = useState(null);
  const [faq, setFaq] = useState(null);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


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

  useEffect(() => {
    const loadScripts = async () => {
      // Wait for jQuery to be available
      while (!window.jQuery) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      // Initialize plugins only after jQuery is ready
      const $ = window.jQuery;

      // Initialize nice select
      if (typeof $.fn.niceSelect === "function") {
        $(".nice-select").niceSelect();
      }

      // Initialize Swiper if available
      if (window.Swiper) {
        new window.Swiper(".hero-slider-1", {
          effect: "fade",
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });

        new window.Swiper(".categorySlider", {
          slidesPerView: 3,
          spaceBetween: 24,
          centeredSlides: true,
          loop: true,
          breakpoints: {
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          },
        });
      }
    };

    loadScripts();

    return () => {
      // Cleanup
      if (window.jQuery && typeof window.jQuery.fn.niceSelect === "function") {
        window.jQuery(".nice-select").niceSelect("destroy");
      }
    };
  }, [location.pathname]);

  useEffect(() => {
    console.log("apiurl", import.meta.env.VITE_API_URL);
    axios
      .get(`https://iamanas.in/travel_bug/web_api/home`)
      .then((response) => {
        setHomeData(response.data.data);
        console.log("homedata", response.data?.data);
        setFaq(response.data?.data?.faqs);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handelClik = (slug) => {
    navigate(`/blog-details/${slug}`)
  }

  return (
    <div>
      <div className="th-hero-wrapper hero-1" id="hero">
        <div
          className="swiper th-slider hero-slider-1"
          id="heroSlide1"
          data-slider-options='{"effect":"fade","menu": ["", "", ""],"heroSlide1": {"swiper-container": {"pagination": {"el": ".swiper-pagination", "clickable": true }}}}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="hero-inner">
                <div
                  className="th-hero-bg"
                  data-bg-src={
                    homeData && homeData.banners
                      ? homeData.banners[0]?.image
                      : ""
                  }
                  style={{
                    backgroundImage: `url(${homeData && homeData.banners
                        ? homeData.banners[0].image
                        : ""
                      })`,
                  }}
                ></div>
                <div className="container">
                  <div className="hero-style1">
                    <span
                      className="sub-title style1"
                      data-ani="slideinup"
                      data-ani-delay="0.2s"
                    >
                      Get unforgetable pleasure with us
                    </span>
                    <h1
                      className="hero-title"
                      data-ani="slideinup"
                      data-ani-delay="0.4s"
                    >
                      {homeData && homeData.banners[0]?.title}
                    </h1>
                    <div
                      className="btn-group"
                      data-ani="slideinup"
                      data-ani-delay="0.6s"
                    >
                      <a
                        className="th-btn th-icon"
                        onClick={() => navigate(`/holiday_packages`)}
                      >
                        Explore Tours
                      </a>
                      <Link to="/contact" className="th-btn style2 th-icon">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="hero-inner">
                <div
                  className="th-hero-bg"
                  data-bg-src={
                    homeData && homeData.banners
                      ? homeData.banners[1].image
                      : ""
                  }
                  style={{
                    backgroundImage: `url(${homeData && homeData.banners
                        ? homeData.banners[1].image
                        : ""
                      })`,
                  }}
                ></div>
                <div className="container">
                  <div className="hero-style1">
                    <span
                      className="sub-title style1"
                      data-ani="slideinup"
                      data-ani-delay="0.2s"
                    >
                      Get unforgetable pleasure with us
                    </span>
                    <h1
                      className="hero-title"
                      data-ani="slideinup"
                      data-ani-delay="0.4s"
                    >
                      {homeData && homeData.banners[1]?.title}
                    </h1>
                    <div
                      className="btn-group"
                      data-ani="slideinup"
                      data-ani-delay="0.6s"
                    >
                      <a
                        className="th-btn th-icon"
                        onClick={() => navigate(`/holiday_packages`)}
                      >
                        Explore Tours
                      </a>
                      <Link to="/contact" className="th-btn style2 th-icon">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="hero-inner">
                <div
                  className="th-hero-bg"
                  data-bg-src={
                    homeData && homeData.banners
                      ? homeData.banners[2].image
                      : ""
                  }
                  style={{
                    backgroundImage: `url(${homeData && homeData.banners
                        ? homeData.banners[2].image
                        : ""
                      })`,
                  }}
                ></div>
                <div className="container">
                  <div className="hero-style1">
                    <span
                      className="sub-title style1"
                      data-ani="slideinup"
                      data-ani-delay="0.2s"
                    >
                      Get unforgetable pleasure with us
                    </span>
                    <h1
                      className="hero-title"
                      data-ani="slideinup"
                      data-ani-delay="0.4s"
                    >
                      {homeData && homeData.banners[2]?.title}
                    </h1>
                    <div
                      className="btn-group"
                      data-ani="slideinup"
                      data-ani-delay="0.6s"
                    >
                      <a
                        className="th-btn th-icon"
                        onClick={() => navigate(`/holiday_packages`)}
                      >
                        Explore Tours
                      </a>
                      <Link to="/contact" className="th-btn style2 th-icon">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="th-swiper-custom">
            <button
              data-slider-prev="#heroSlide1"
              className="slider-arrow slider-prev"
            >
              <img src="assets/img/icon/right-arrow.svg" alt="Previous Slide" />
            </button>
            <div className="slider-pagination"></div>
            <button
              data-slider-next="#heroSlide1"
              className="slider-arrow slider-next"
            >
              <img src="assets/img/icon/left-arrow.svg" alt="Next Slide" />
            </button>
          </div>
        </div>
      </div>
      <FilterCard />

      <section className="catergory-area bg-top-center">
        <div className="container th-container">
          <div className="title-area text-center">
            <span
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: "500",
              }}
              className="poppins-item"
            >
              Exclusive Offers for you
            </span>
            <h4
              className="libre-font-item"
              style={{
                fontFamily: "Poppins",
                fontSize: "35px !important",
                fontWeight: "700",
              }}
            >
              Our Popular Packages
            </h4>
          </div>
          <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
            {" "}
            {/* Container with max-width */}
            <Swiper
              className="custom-category-slider"
              modules={[Navigation, Pagination]}
              spaceBetween={24} // Default space between slides
              slidesPerView={1} // Default number of slides per view
              centeredSlides={true} // Center the slides
              pagination={{
                clickable: true,
                dynamicBullets: true, // Makes pagination dots responsive
              }}
              navigation={{
                prevEl: ".swiper-button-prev", // Customize the left button
                nextEl: ".swiper-button-next", // Customize the right button
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                  centeredSlides: true, // Ensure centering on small screens
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  centeredSlides: false, // Not centered on larger screens
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                  centeredSlides: false, // Not centered on larger screens
                },
              }}
            >
              {homeData &&
                homeData.packages.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Card
                      id={item?.id}
                      url={item?.url}
                      title={item.title}
                      starting_point={item.starting_point}
                      ending_point={item.ending_point}
                      amount={item.amount}
                      standard_amount={item.standard_amount}
                      discount={Math.floor(item.discount)}
                      persons={item.persons}
                      destination_title={item.destination_title}
                      short_description={item.short_descrption}
                      day={item.day}
                      night={item.night}
                      thumbnail={item.thumbnail}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>
      <section className="category-area bg-top-center">
        <div className="container th-container">
          <div className="title-area text-center">
            <span
              className="poppins-item"
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: 500,
              }}
            >
              Wonderful Place For You
            </span>
            <h2
              className="libre-font-item"
              style={{
                fontSize: "35px !important",
                fontFamily: "Poppins",
                fontWeight: 700,
              }}
            >
              {homeData && homeData.home_page_data.title}
            </h2>
            <p
              className="decription-tag-area container"
              style={{
                fontFamily: "Poppins",
                fontSize: "18px !important",
                fontWeight: 400,
              }}
            >
              {homeData && homeData.home_page_data.description}
            </p>
          </div>

          <div className="custom-container">
            <Swiper
              className="custom-category-slider"
              modules={[Navigation, Pagination]}
              spaceBetween={16} // Default spacing between slides
              slidesPerView={1}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 8 }, // Mobile: 1 card with smaller spacing
                576: { slidesPerView: 2, spaceBetween: 16 }, // Tablet: 2 cards
                992: { slidesPerView: 3, spaceBetween: 24 }, // Desktop: 3 cards
              }}
            >
              {homeData &&
                homeData.categories.map((category) => (
                  <SwiperSlide key={category.id}>
                    <div className="cta">
                      <img src={category?.image} alt="Cta Background" />
                      <div className="add-my">
                        <h2>{category?.title}</h2>
                      </div>
                      <div className="cta-text">
                        <h2>{category?.title}</h2>
                        <p
                          style={{
                            maxHeight: "150px",
                            overflowY: "auto",
                            paddingRight: "8px",
                          }}
                        >
                          {category?.description}
                        </p>
                        <Link
                          to={`/tour_packages/${category.id}`}
                          className="th-btn style4 th-icon"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* 
      <div className="destination-area position-relative overflow-hidden ">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Top Destination</span>
            <h2 className="sec-title">Popular Destination</h2>
          </div>
          <div
            className="swiper th-slider destination-slider slider-drag-wrap"
            id="aboutSlider1"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"3"}},"effect":"coverflow","coverflowEffect":{"rotate":"0","stretch":"95","depth":"212","modifier":"1"},"centeredSlides":"true"}'
          >
            <div className="swiper-wrapper">
              {homeData &&
                homeData.popular_destinations.map((destination, _) => (
                  <div className="swiper-slide" key={destination.id}>
                    <div className="destination-box gsap-cursor">
                      <div className="destination-img">
                        <img
                          src={destination.image}
                          alt="destination image"
                          style={{
                            height: "506px",
                            width: "450px",
                          }}
                        />
                        <div className="destination-content">
                          <div className="media-left">
                            <h4 className="box-title">
                              <a href="destination-details.html">
                                {destination.title}
                              </a>
                            </h4>
                            <span className="destination-subtitle">
                              15 Listing
                            </span>
                          </div>
                          <div className="">
                            <a
                              href="destination-details.html"
                              className="th-btn style2 th-icon"
                            >
                              View All
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

        * */}
      <div
        className="about-area position-relative overflow-hidden "
        id="about-sec"
      >
        <div className="container">
          <div className="ps-xl-4 ms-xl-2">
            <div className="title-area mb-20 text-center">
              <span
                className="poppins-item"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: 500,
                }}
              >
                Let's Go Together
              </span>
              <h2
                style={{
                  marginBottom: "60px",
                  fontFamily: "Poppins",
                  fontSize: "35px !important",
                  fontWeight: 700,
                }}
              >
                Why Choose Us?
              </h2>
            </div>
            <div
              className="about-item-wrap-new"
              style={{
                display: "flex",
                flexWrap: "wrap",
                grid: "col ",
              }}
            >
              {homeData &&
                homeData.why_choose_us.map((item, index) => (
                  <div
                    className="about-item"
                    key={index}
                    style={{ borderWidth: 1 }}
                  >
                    <div className="about-item_img">
                      <img src="assets/img/icon/guide.svg" alt="" />
                    </div>
                    <div className="about-item_content">
                      <h5 className="box-title">{item.title}</h5>
                      <p className="about-item_text">{item.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div
          className="shape-mockup shape1 d-none d-xl-block"
          data-top="12%"
          data-left="2%"
        >
          <img src="assets/img/shape/shape_1.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape2 d-none d-xl-block"
          data-top="20%"
          data-left="3%"
        >
          <img src="assets/img/shape/shape_2.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape3 d-none d-xl-block"
          data-top="14%"
          data-left="8%"
        >
          <img src="assets/img/shape/shape_3.png" alt="shape" />
        </div>

        <div
          className="shape-mockup about-shape movingX d-none d-xxl-block"
          data-bottom="0%"
          data-right="8%"
        >
          <img src="assets/img/normal/about-slide-img.png" alt="shape" />
        </div>
        <div
          className="shape-mockup about-rating d-none d-xxl-block"
          data-bottom="45%"
          data-right="2%"
        >
          <i className="fa-sharp fa-solid fa-star"></i>
          <span>4.9k</span>
        </div>
        <div
          className="shape-mockup about-emoji d-none d-xxl-block"
          data-bottom="25%"
          data-right="22%"
        >
          <img src="assets/img/icon/emoji.png" alt="" />
        </div>
      </div>
      {/* 
      <section
        className="position-relative bg-top-center overflow-hidden space"
        id="service-sec"
        data-bg-src="assets/img/bg/tour_bg_1.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="title-area text-center">
                <span className="sub-title">Best Place For You</span>
                <h2 className="sec-title">Most Popular Tour</h2>
                <p className="sec-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="slider-area tour-slider ">
            <div
              className="swiper th-slider has-shadow slider-drag-wrap"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"},"1300":{"slidesPerView":"4"}}}'
            >
              <div className="swiper-wrapper">
                {homeData &&
                  homeData.packages.map((item, _) => (
                    <div className="swiper-slide" key={item.id}>
                      <div className="tour-box th-ani gsap-cursor">
                        <div className="tour-box_img global-img">
                          <img
                            src={item.thumbnail}
                            alt="image"
                            style={{
                              height: 280,
                            }}
                          />
                        </div>
                        <div className="tour-content">
                          <h4 className="box-title">
                            <a href="tour-details.html">{item.title}</a>
                          </h4>
                          <div
                            style={{
                              display: "flex",
                              gap: 10,
                              alignItems: "center",
                              flexWrap: "wrap",
                              marginBottom: 10,
                            }}
                          >
                            Starting Point:
                            <span
                              style={{
                                padding: 10,
                                paddingTop: 2,
                                paddingBottom: 2,
                                backgroundColor: "#1CA8CB",
                                color: "white",
                                borderRadius: 20,
                              }}
                            >
                              {item.starting_point}
                            </span>
                            <br />
                            Ending Point:
                            <span
                              style={{
                                padding: 10,
                                paddingTop: 2,
                                paddingBottom: 2,
                                backgroundColor: "#1CA8CB",
                                color: "white",
                                borderRadius: 20,
                              }}
                            >
                              {item.ending_point}
                            </span>
                          </div>
                          <h3 className="tour-box_price">
                            <span className="box-title">{item.amount}</span>
                          </h3>
                          <div className="tour-action">
                            <span>
                              {item.day} Days <br /> {item.night} Nights
                            </span>
                            <a
                              href="contact.html"
                              className="th-btn style4 th-icon"
                            >
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
*/}
      <div className="gallery-area">
        <div className="container th-container">
          <div className="title-area text-center">
            <span
              className="poppins-item"
              style={{ fontFamily: "Poppins", marginTop: "90px" }}
            >
              {homeData && homeData.gallery_title}
            </span>
            <h2 className="libre-font-item"
              style={{
                fontFamily: "Poppins",

                fontWeight: "700",
              }}>
              {homeData && homeData.gallery_heading}
            </h2>
          </div>
          <div className="row gy-10 gx-10 justify-content-center align-items-center" style={{ maxWidth: '1300px', margin: '0 auto' }}>
            {homeData &&
              homeData.gallery.map((image, index) => (
                <div className="col-md-6 col-lg-2" key={index}>
                  <div className="gallery-card">
                    <div className="box-img global-img">
                      <a
                        href={image.image}
                        className="popup-image"
                        onClick={(e) => {
                          e.preventDefault();
                          openModal(index);
                        }}
                      >
                        <div className="icon-btn">
                          <i className="fal fa-magnifying-glass-plus"></i>
                        </div>
                        <img
                          src={image.image}
                          alt="gallery image"
                          className="hero-gallary"

                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div
        className="shape-mockup  d-none d-xl-block"
        data-top="-25%"
        data-left="0%"
      >
        <img src="assets/img/shape/line.png" alt="shape" />
      </div>
      <div
        className="shape-mockup movingX d-none d-xl-block"
        data-top="30%"
        data-left="3%"
      >
        <img
          className="gmovingX"
          src="assets/img/shape/shape_4.png"
          alt="shape"
        />
      </div>
      <div className="counter-area space">
        <div className="container">
          <div className="row">
            {homeData &&
              homeData.experience_data.map((item, index) => (
                <div
                  className="col-sm-6 col-xl-3 counter-card-wrap"
                  key={index}
                >
                  <div className="counter-card">
                    <div className="counter-shape">
                      <span></span>
                    </div>
                    <div className="media-body">
                      <h3 className="box-number">
                        <span className="counter-number">{item.value}</span>
                      </h3>
                      <h6 className="counter-title">{item.title}</h6>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div
          className="shape-mockup shape1 d-none d-xl-block"
          data-top="30%"
          data-left="2%"
        >
          <img src="assets/img/shape/shape_1.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape2 d-none d-xl-block"
          data-top="45%"
          data-left="2%"
        >
          <img src="assets/img/shape/shape_2.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape3 d-none d-xl-block"
          data-top="32%"
          data-left="7%"
        >
          <img src="assets/img/shape/shape_3.png" alt="shape" />
        </div>
        <div
          className="shape-mockup d-none d-xl-block"
          data-bottom="0%"
          data-left="3%"
        >
          <img src="assets/img/shape/shape_6.png" alt="shape" />
        </div>
        <div
          className="shape-mockup jump d-none d-xl-block"
          data-top="5%"
          data-right="5%"
        >
          <img src="assets/img/shape/shape_5.png" alt="shape" />
        </div>
      </div>
      {/*
         * 
      // <section
      //   className="bg-smoke space"
      //   data-bg-src="assets/img/bg/team_bg_1.png"
      // >
      // //   <div className="container z-index-common">
      // //     <div className="title-area text-center">
      // //       <span className="sub-title">Meet with Guide</span>
      // //       <h2 className="sec-title">Tour Guide</h2>
      // //     </div>
      // //     <div className="slider-area">
      // //       <div
      // //         className="swiper th-slider teamSlider1 has-shadow"
      // //         id="teamSlider1"
      // //         data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'
      //       >
      //         <div className="swiper-wrapper">
      //           <div className="swiper-slide">
      //             <div className="th-team team-box">
      //               <div className="team-img">
      //                 <img src="assets/img/team/team_1_1.jpg" alt="Team" />
      //               </div>
      //               <div className="team-content">
      //                 <div className="media-body">
      //                   <h3 className="box-title">
      //                     <a href="tour-guider-details.html">Jacob Jones</a>
      //                   </h3>
      //                   <span className="team-desig">Tourist Guide</span>
      //                   <div className="th-social">
      //                     <a target="_blank" href="https://facebook.com/">
      //                       <i className="fab fa-facebook-f"></i>
      //                     </a>
      //                     <a target="_blank" href="https://twitter.com/">
      //                       <i className="fab fa-twitter"></i>
      //                     </a>
      //                     <a target="_blank" href="https://instagram.com/">
      //                       <i className="fab fa-instagram"></i>
      //                     </a>
      //                     <a target="_blank" href="https://linkedin.com/">
      //                       <i className="fab fa-linkedin-in"></i>
      //                     </a>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //           {homeData &&
      //             homeData.guide.map((guide, index) => (
      //               <div className="swiper-slide" key={index}>
      //                 <div className="th-team team-box">
      //                   <div className="team-img">
      //                     <img src={guide.image} alt="Team" />
      //                   </div>
      //                   <div className="team-content">
      //                     <div className="media-body">
      //                       <h3 className="box-title">
      //                         <a href="tour-guider-details.html">
      //                           {guide.name}
      //                         </a>
      //                       </h3>
      //                       <span className="team-desig">
      //                         {guide.designation}
      //                       </span>
      //                       <div className="th-social">
      //                         <a target="_blank" href="https://facebook.com/">
      //                           <i className="fab fa-facebook-f"></i>
      //                         </a>
      //                         <a target="_blank" href="https://twitter.com/">
      //                           <i className="fab fa-twitter"></i>
      //                         </a>
      //                         <a target="_blank" href="https://instagram.com/">
      //                           <i className="fab fa-instagram"></i>
      //                         </a>
      //                         <a target="_blank" href="https://linkedin.com/">
      //                           <i className="fab fa-linkedin-in"></i>
      //                         </a>
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>
      //             ))}
      //         </div>
      //         <div className="slider-pagination"></div>
      //       </div>
      //     </div>
      //   </div>
      // </section>
         * */}
      <section className="testi-area overflow-hidden space" id="testi-sec">
        <div className="container-fluid p-0">
          <div className="title-area mb-20 text-center">
            <span
              className="poppins-item"
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              Testimonial
            </span>
            <h4
              className="libre-font-item"
              style={{
                fontFamily: "Poppins",

                fontWeight: "700",
              }}
            >
              {homeData && homeData.review_head}
            </h4>
            <p
              className="decription-tag-area container"
              style={{
                fontFamily: "Poppins",
                marginBottom: "20px",
                fontSize: "18px !important",
                fontWeight: "400",
              }}
            >
              {homeData && homeData?.review_description}
            </p>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider has-shadow"
              id="testiSlider1"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"767":{"slidesPerView":"2","centeredSlides":"true"},"992":{"slidesPerView":"2","centeredSlides":"true"},"1200":{"slidesPerView":"2","centeredSlides":"true"},"1400":{"slidesPerView":"3","centeredSlides":"true"}}}'
            >
              <div className="swiper-wrapper">
                <Swiper
                  spaceBetween={30} // Space between slides
                  slidesPerView={1} // Default number of slides to show
                  // loop={true} // Infinite loop
                  breakpoints={{
                    // Responsive breakpoints
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 },
                  }}
                  pagination={{ clickable: true }} // Enable pagination
                  className="testi-slider"
                >
                  {homeData &&
                    homeData.reviews.map((review, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className="testi-card"
                          style={{
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            backgroundColor: "#fff",
                            margin: "20px",
                            minHeight: "16rem",
                          }}
                        >
                          {/* Profile Section */}
                          <div
                            className="testi-card_wrapper"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "15px",
                            }}
                          >
                            <div
                              className="testi-card_avater"
                              style={{
                                marginRight: "15px",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                justifyContent: "center",
                              }}
                            >
                              <img
                                src={TestMonelImage}
                                alt="testimonial"
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  borderRadius: "50%",
                                  objectFit: "cover",
                                }}
                              />
                              <div>
                                <h3
                                  className="box-title"
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "600",
                                    margin: 0,
                                  }}
                                >
                                  {review.author}
                                </h3>
                                <span
                                  className="testi-card_desig"
                                  style={{ fontSize: "14px", color: "#999" }}
                                >
                                  Traveller
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* Review Stars */}
                          <div
                            className="testi-card_review"
                            style={{ marginBottom: "10px", color: "#FFD700" }}
                          >
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <i key={i} className="fa-solid fa-star"></i>
                              ))}
                          </div>

                          {/* Review Text */}
                          <p
                            className="testi-card_text"
                            style={{
                              fontSize: "14px",
                              color: "#666",
                              lineHeight: "1.6",
                              marginBottom: "15px",
                            }}
                          >
                            {review.review}
                          </p>

                          {/* Quote Icon */}
                          <div
                            className="testi-card-quote"
                            style={{ textAlign: "center" }}
                          >
                            <img
                              src="assets/img/icon/testi-quote.svg"
                              alt="quote"
                              style={{ width: "30px", opacity: "0.8" }}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
              <div className="slider-pagination"></div>
            </div>
          </div>
        </div>
        <div
          className="shape-mockup d-none d-xl-block"
          data-bottom="-2%"
          data-right="0%"
        >
          <img src="assets/img/shape/line2.png" alt="shape" />
        </div>
        <div
          className="shape-mockup movingX d-none d-xl-block"
          data-top="30%"
          data-left="5%"
        >
          <img src="assets/img/shape/shape_7.png" alt="shape" />
        </div>
      </section>
      {/* 
<div className="brand-area overflow-hidden space-bottom">
        <div className="container th-container">
          <div
            className="swiper th-slider brandSlider1"
            id="brandSlider1"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"6"},"1400":{"slidesPerView":"8"}}}'
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_1.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_1.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_2.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_2.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_3.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_3.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_4.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_4.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_5.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_5.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_6.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_6.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_7.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_7.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_8.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_8.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_4.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_4.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_3.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_3.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_2.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_2.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="brand-box">
                  <a href="">
                    <img
                      className="original"
                      src="assets/img/brand/brand_1_1.svg"
                      alt="Brand Logo"
                    />
                    <img
                      className="gray"
                      src="assets/img/brand/brand_1_1.svg"
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}

      <section className="bg-smoke overflow-hidden space" id="blog-sec">
        <div className="container">
          <div className="mb-30 text-center text-md-start">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-7">
                <div className="title-area mb-md-0">
                  <span className="sub-title">Travel Blogs</span>
                  <h2 className="sec-title">Our Latest Travel Stories</h2>
                </div>
              </div>
              <div className="col-md-auto">
                <Link to="/blog" className="th-btn style4 th-icon">
                  See More Articles
                </Link>
              </div>
            </div>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider has-shadow"
              id="blogSlider1"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'
            >
              <div className="swiper-wrapper">
                <div>
                  {homeData &&
                    homeData.blogs.map((item, index) => (
                      <div className="swiper-sli" style={{ maxWidth: '390px' }} key={index}>
                        <div
                          onClick={() => handelClik(item?.slug)}
                          className="blog-box th-ani"
                          style={{
                            background: "#fff",
                            borderRadius: "10px",
                            overflow: "hidden",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                            transition: "transform 0.3s, box-shadow 0.3s",
                          }}
                        >
                          {/* Image Section */}
                          <div
                            className="blog-img global-img"
                            style={{ overflow: "hidden" }}
                          >
                            <img
                              src={item.image}
                              alt="blog image"
                              style={{
                                height: "300px",
                                width: "100%",
                                objectFit: "cover",
                                transition: "transform 0.3s",
                              }}
                            />
                          </div>

                          {/* Content Section */}
                          <div
                            className="blog-box_content"
                            style={{
                              padding: "20px",
                              display: "flex",
                              flexDirection: "column",
                              gap: "1px",
                            }}
                          >
                            {/* Meta Information */}
                            <div
                              className="blog-meta"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                color: "#888",
                                fontSize: "14px",
                              }}
                            >
                              <Link className="author" to="/blog">
                                {item.published_on}
                              </Link>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "1px",
                                }}
                              >
                                <img
                                  src={item.author_image}
                                  alt="Author"
                                  style={{
                                    height: "30px",
                                    width: "30px",
                                    borderRadius: "50%",
                                  }}
                                />
                                <span style={{ margin: 0, fontWeight: "500" }}>
                                  {item.author}
                                </span>
                              </div>
                            </div>

                            {/* Blog Title */}
                            <h3
                              className="box-title"
                              style={{
                                fontSize: "18px",
                                fontWeight: "bold",
                                color: "#333",
                                margin: "0",
                                lineHeight: "1.4",
                              }}
                            >
                              <a
                                href={item.link}
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
                              >
                                {item.title}
                              </a>
                            </h3>

                            {/* Description */}
                            <div
                              className="package-overview"
                              style={{
                                fontSize: "14px",
                                color: "#666",
                                marginTop: "0px",
                                lineHeight: "1.6",
                              }}
                              dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                  item.short_description,
                                ),
                              }}
                            />

                            {/* Read More Button */}
                            {/* <a
                              href={item.link}
                              className="th-btn style4 th-icon"
                              style={{
                                display: "inline-block",
                                marginTop: "10px",
                                padding: "10px 20px",
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "#fff",
                                background: "#007BFF",
                                borderRadius: "5px",
                                textAlign: "center",
                                textDecoration: "none",
                                transition: "background 0.3s",
                              }}
                              onMouseEnter={(e) =>
                                (e.target.style.background = "#0056b3")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.background = "#007BFF")
                              }
                            >
                              Read More
                            </a> */}

                            <Link
                              // to={`/package_details/${item.id}`}
                              className="th-btn style4 th-icon .th-btn"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="shape-mockup shape1 d-none d-xxl-block"
          data-bottom="20%"
          data-left="2%"
        >
          <img src="assets/img/shape/shape_1.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape2 d-none d-xl-block"
          data-bottom="5%"
          data-left="2%"
        >
          <img src="assets/img/shape/shape_2.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape3 d-none d-xxl-block"
          data-bottom="12%"
          data-left="7%"
        >
          <img src="assets/img/shape/shape_3.png" alt="shape" />
        </div>
      </section>
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div
            style={{ marginBottom: "90px" }}
            className="accordion-area accordion mb-30 mx-3"
            id="faqAccordion"
          >
            <div
              className="items-center"
              style={{ paddingTop: 50, textAlign: "center" }}
            >
              <h4
                className="libre-font-item"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "700",
                }}
              >
                {homeData?.faq_head}
              </h4>
              <p
                className="decription-tag-area"
                style={{
                  fontFamily: "Poppins",
                  color: "#4A4A4A",
                  padding: "0 5vmax",
                  paddingBottom: 10,

                }}
              >
                {homeData?.fag_description}
              </p>
            </div>
            {/* FAQ Start */}
            {faq &&
              faq.map((item, index) => (
                <Accordion
                  key={index}
                  index={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="scroll-top">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          // style="transition: stroke-dashoffset 10ms linear 0s; stroke-dasharray: 307.919, 307.919; stroke-dashoffset: 307.919;"
          ></path>
        </svg>
      </div>
      <div id="login-form" className="popup-login-register mfp-hide">
        <ul className="nav" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-menu"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="false"
            >
              Login
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-menu active"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="true"
            >
              Register
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <h3 className="box-title mb-30">Sign in to your account</h3>
            <div className="th-login-form">
              <form
                action="mail.php"
                method="POST"
                className="login-form ajax-contact"
              >
                <div className="row">
                  <div className="form-group col-12">
                    <label>Username or email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      id="email"
                      required="required"
                    />
                  </div>
                  <div className="form-group col-12">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="pasword"
                      id="pasword"
                      required="required"
                    />
                  </div>

                  <div className="form-btn mb-20 col-12">
                    <button className="th-btn btn-fw th-radius2 ">
                      Send Message
                    </button>
                  </div>
                </div>
                <div id="forgot_url">
                  <Link to="/#">Forgot password?</Link>
                </div>
                <p className="form-messages mb-0 mt-3"></p>
              </form>
            </div>
          </div>
          <div
            className="tab-pane fade active show"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <h3 className="th-form-title mb-30">Sign in to your account</h3>
            <form
              action="mail.php"
              method="POST"
              className="login-form ajax-contact"
            >
              <div className="row">
                <div className="form-group col-12">
                  <label>Username*</label>
                  <input
                    type="text"
                    className="form-control"
                    name="usename"
                    id="usename"
                    required="required"
                  />
                </div>
                <div className="form-group col-12">
                  <label>First name*</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    id="firstname"
                    required="required"
                  />
                </div>
                <div className="form-group col-12">
                  <label>Last name*</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    id="lastname"
                    required="required"
                  />
                </div>
                <div className="form-group col-12">
                  <label htmlFor="new_email">Your email*</label>
                  <input
                    type="text"
                    className="form-control"
                    name="new_email"
                    id="new_email"
                    required="required"
                  />
                </div>
                <div className="form-group col-12">
                  <label htmlFor="new_email_confirm">Confirm email*</label>
                  <input
                    type="text"
                    className="form-control"
                    name="new_email_confirm"
                    id="new_email_confirm"
                    required="required"
                  />
                </div>
                <div className="statement">
                  <span className="register-notes">
                    A password will be emailed to you.
                  </span>
                </div>

                <div className="form-btn mt-20 col-12">
                  <button className="th-btn btn-fw th-radius2 ">Sign up</button>
                </div>
              </div>
              <p className="form-messages mb-0 mt-3"></p>
            </form>
          </div>
        </div>
      </div>

      {/* Modal for displaying the larger image */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{ overlay: { zIndex: 1000 } }}
      >
        <div
          className="popup-slider"
          onClick={closeModal}
          style={{
            position: "relative",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
           src={homeData && homeData.gallery[currentImageIndex]?.image}
           alt={`Slide ${currentImageIndex + 1}`}
            style={{
              width: "80%",
              height: "auto",
              maxHeight: "80vh",
              objectFit: "contain",
            }}
          />
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "none",
              border: "none",
              color: "white",
              fontSize: "24px",
            }}
          >
            ✖
          </button>
        </div>
      </Modal>
    </div>
  );
}
