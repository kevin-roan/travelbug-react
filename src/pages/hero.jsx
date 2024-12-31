import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import DOMPurify from "dompurify";
export default function Hero() {
  const [homeData, setHomeData] = useState(null);
  const [faq, setFaq] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("apiurl", import.meta.env.VITE_API_URL);
    axios
      .get(`${import.meta.env.VITE_API_URL}/home`)
      .then((response) => {
        setHomeData(response.data.data);
        setFaq(response.data.data.faqs);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  if (error) {
    throw new Error(error);
  }
  if (homeData) {
    console.log(homeData.popular_destinations);
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
                    backgroundImage: `url(${homeData && homeData.banners ? homeData.banners[0].image : ""})`,
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
                        href="/tour/#/tour_packages"
                        className="th-btn th-icon"
                      >
                        Explore Tours
                      </a>
                      <a href="/#/contact" className="th-btn style2 th-icon">
                        Contact Us
                      </a>
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
                    backgroundImage: `url(${homeData && homeData.banners ? homeData.banners[1].image : ""})`,
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
                      <a href="/tour" className="th-btn th-icon">
                        Explore Tours
                      </a>
                      <a href="/contact" className="th-btn style2 th-icon">
                        Contact Us
                      </a>
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
                    backgroundImage: `url(${homeData && homeData.banners ? homeData.banners[2].image : ""})`,
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
                      <a href="/tour" className="th-btn th-icon">
                        Explore Tours
                      </a>
                      <a href="/contact" className="th-btn style2 th-icon">
                        Contact Us
                      </a>
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
      <div className="booking-sec">
        <div className="container">
          <form
            action="mail"
            method="POST"
            className="booking-form ajax-contact"
          >
            <div className="input-wrap">
              <div className="row align-items-center justify-content-between">
                <div className="form-group col-md-6 col-lg-auto">
                  <div className="icon">
                    <i className="fa-light fa-route"></i>
                  </div>
                  <div className="search-input">
                    <label>Destination</label>
                    <select
                      name="subject"
                      id="subject"
                      className="form-select nice-select"
                    >
                      <option value="Select Destination" selected disabled>
                        Select Destination
                      </option>
                      {homeData &&
                        homeData.popular_destinations.map((destination, _) => (
                          <option value={destination.id} key={_}>
                            {destination.title}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="form-group col-md-6 col-lg-auto">
                  <div className="icon">
                    <i className="fa-regular fa-person-hiking"></i>
                  </div>
                  <div className="search-input">
                    <label>Type</label>
                    <select
                      className=" nice-select"
                      name="Adventure"
                      id="Adventure"
                    >
                      <option value="Adventure" selected disabled>
                        Adventure
                      </option>
                      <option value="Beach">Beach</option>
                      <option value="Group Tour">Group Tour</option>
                      <option value="Couple Tour">Couple's Tour</option>
                      <option value="Family Tour">Family Tour</option>
                      <option value="Multi Center">Multicenter</option>
                      <option value="Long-Haul Tour">Long-Haul Tour</option>
                      <option value="Ayurveda Tour">Ayurveda Tour</option>
                    </select>
                  </div>
                </div>
                <div className="form-group col-md-6 col-lg-auto">
                  <div className="icon">
                    <i className="fa-light fa-clock"></i>
                  </div>
                  <div className="search-input">
                    <label>Duration</label>
                    <select
                      className="form-select nice-select"
                      name="Duration"
                      id="Duration"
                    >
                      <option value="Normal" selected disabled>
                        Duration
                      </option>
                      <option value="1">1 days</option>
                      <option value="2">2 days</option>
                      <option value="3">3 days</option>
                      <option value="4">4 days</option>
                      <option value="5">5 days</option>
                      <option value="6">6 days</option>
                      <option value="7">7 days</option>
                    </select>
                  </div>
                </div>
                <div className="form-group col-md-6 col-lg-auto">
                  <div className="icon">
                    <i className="fa-light fa-map-location-dot"></i>
                  </div>
                  <div className="search-input">
                    <label>Tour Category</label>
                    <select
                      name="subject"
                      id="category"
                      className="form-select nice-select"
                    >
                      <option value="Normal" selected disabled>
                        Superior
                      </option>
                      <option value="1">Deluxe</option>
                      <option value="2">Heritage</option>
                      <option value="2">Luxury</option>
                    </select>
                  </div>
                </div>
                <div className="form-btn col-md-12 col-lg-auto">
                  <button className="th-btn">
                    <div src="assets/img/icon/search.svg" alt="">
                      Search
                    </div>
                  </button>
                </div>
              </div>
              <p className="form-messages mb-0 mt-3"></p>
            </div>
          </form>
        </div>
      </div>
      <section
        className="category-area bg-top-center"
        data-bg-src={
          homeData && homeData.banners ? homeData.banners[1].image : ""
        }
        style={{
          backgroundImage: `url(${homeData && homeData.banners ? homeData.banners[1] : ""})`,
        }}
      >
        <div className="container th-container">
          <div className="title-area text-center">
            <span className="sub-title">Wornderful Place For You</span>
            <h2 className="sec-title">Explore India's TOP Destinations</h2>
            <p className="sec-text">
              India is a land of diverse landscapes, rich history, and vibrant
              cultures. From peaceful beaches and lush mountains to bustling
              cities and royal palaces, every region offers a unique experience
              that leaves an everlasting impression. For those seeking
              adventure, spiritual rejuvenation, or a glimpse into India's royal
              heritage, our selected destinations promise an unforgettable
              journey. Explore the beauty of India with our top packages
              featuring must-visit destinations.
            </p>
          </div>
          <div className="swiper categorySlider" id="categorySlide">
            <div className="swiper-wrapper">
              {homeData &&
                homeData.categories.map((catergory) => (
                  <div
                    className="swiper-slide"
                    key={catergory.id}
                    onClick={() =>
                      navigate(`/tour_packages/package_details/${catergory.id}`)
                    }
                  >
                    <div className="category-card single">
                      <div className="box-img global-img">
                        <img src={catergory.image} alt="Image" />
                      </div>
                      <h3 className="box-title">
                        <Link to="/tour_packages/package_details/${category.id}">
                          {catergory.title}
                        </Link>
                      </h3>
                      <Link
                        className="line-btn"
                        to="/destination_details/${category.id}"
                      >
                        See more
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
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

      <div
        className="about-area position-relative overflow-hidden space"
        id="about-sec"
      >
        <div className="container">
          <div className="ps-xl-4 ms-xl-2">
            <div className="title-area mb-20 pe-xl-5 me-xl-5">
              <span className="sub-title style1 ">Let’s Go Together</span>
              <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                Why Choose Us ?
              </h2>
            </div>
            <div
              className="about-item-wrap"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              {homeData &&
                homeData.why_choose_us.map((item, index) => (
                  <div
                    className="about-item"
                    key={index}
                    style={{
                      backgroundColor: "#E9F6F9",
                      padding: 20,
                      borderRadius: 20,
                      minHeight: 400,
                    }}
                  >
                    <div className="about-item_img">
                      <img src="assets/img/icon/guide.svg" alt="" />
                    </div>
                    <div className="about-item_centent">
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
      <div className="gallery-area ">
        <div className="container th-container">
          <div className="title-area text-center">
            <span className="sub-title">Moments from Our Journeys</span>
            <h2 className="sec-title">Latest Travel Highlights</h2>
          </div>
          <div className="row gy-10 gx-10 justify-content-center align-items-center">
            <div className="col-md-6 col-lg-2">
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a
                    href={
                      homeData && homeData.gallery ? homeData.gallery[0] : ""
                    }
                    className="popup-image"
                  >
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img
                      src={
                        homeData && homeData.gallery ? homeData.gallery[0] : ""
                      }
                      alt="gallery image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a
                    href={
                      homeData && homeData.gallery ? homeData.gallery[1] : ""
                    }
                    className="popup-image"
                  >
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img
                      src={
                        homeData && homeData.gallery ? homeData.gallery[1] : ""
                      }
                      alt="gallery image"
                    />
                  </a>
                </div>
              </div>
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a
                    href={
                      homeData && homeData.gallery ? homeData.gallery[2] : ""
                    }
                    className="popup-image"
                  >
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img
                      src={
                        homeData && homeData.gallery ? homeData.gallery[2] : ""
                      }
                      alt="gallery image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a
                    href={
                      homeData && homeData.gallery ? homeData.gallery[3] : ""
                    }
                    className="popup-image"
                  >
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img
                      src={
                        homeData && homeData.gallery ? homeData.gallery[3] : ""
                      }
                      alt="gallery image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a
                    href={
                      homeData && homeData.gallery ? homeData.gallery[4] : ""
                    }
                    className="popup-image"
                  >
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img
                      src={
                        homeData && homeData.gallery ? homeData.gallery[4] : ""
                      }
                      alt="gallery image"
                    />
                  </a>
                </div>
              </div>
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a
                    href={
                      homeData && homeData.gallery ? homeData.gallery[1] : ""
                    }
                    className="popup-image"
                  >
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img
                      src={
                        homeData && homeData.gallery ? homeData.gallery[1] : ""
                      }
                      alt="gallery image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="gallery-card">
                <div className="box-img global-img">
                  <a
                    href={
                      homeData && homeData.gallery ? homeData.gallery[2] : ""
                    }
                    className="popup-image"
                  >
                    <div className="icon-btn">
                      <i className="fal fa-magnifying-glass-plus"></i>
                    </div>
                    <img
                      src={
                        homeData && homeData.gallery ? homeData.gallery[2] : ""
                      }
                      alt="gallery image"
                    />
                  </a>
                </div>
              </div>
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
      //         data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'
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
            <span className="sub-title">Testimonial</span>
            <h2 className="sec-title">What Our Customers Say</h2>
            <p className="sec-text">
              At Travel Bug India, we take pride in create memorable travel
              experiences for our clients. Here’s what some of our satisfied
              travellers have to say about their journeys with us
            </p>
          </div>
          <div className="slider-area">
            <div
              className="swiper th-slider testiSlider1 has-shadow"
              id="testiSlider1"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"767":{"slidesPerView":"2","centeredSlides":"true"},"992":{"slidesPerView":"2","centeredSlides":"true"},"1200":{"slidesPerView":"2","centeredSlides":"true"},"1400":{"slidesPerView":"3","centeredSlides":"true"}}}'
            >
              <div className="swiper-wrapper">
                {homeData &&
                  homeData.reviews.map((review) => (
                    <div className="swiper-slide">
                      <div className="testi-card">
                        <div className="testi-card_wrapper">
                          <div className="testi-card_profile">
                            <div className="testi-card_avater">
                              <img
                                src="assets/img/testimonial/testi_1_1.jpg"
                                alt="testimonial"
                              />
                            </div>
                            <div className="media-body">
                              <h3 className="box-title">{review.author}</h3>
                              <span className="testi-card_desig">
                                Traveller
                              </span>
                            </div>
                          </div>
                          <div className="testi-card_review">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>

                        <p className="testi-card_text">{review.review}</p>
                        <div className="testi-card-quote">
                          <img
                            src="assets/img/icon/testi-quote.svg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
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
                <a href="blog.html" className="th-btn style4 th-icon">
                  See More Articles
                </a>
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
                      <div className="swiper-slide" key={index}>
                        <div className="blog-box th-ani">
                          <div className="blog-img global-img">
                            <img
                              src={item.image}
                              alt="blog image"
                              style={{ height: 300, width: 500 }}
                            />
                          </div>
                          <div className="blog-box_content">
                            <div
                              className="blog-meta"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <a className="author" href="blog.html">
                                {item.published_on}
                              </a>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  gap: "8px",
                                }}
                              >
                                <img
                                  src={item.author_image}
                                  alt="Author"
                                  style={{
                                    height: 20,
                                    width: 20,
                                    borderRadius: "50%",
                                  }}
                                />
                                <p className="box-desc" style={{ margin: 0 }}>
                                  {item.author}
                                </p>
                              </div>
                            </div>
                            <h3 className="box-title">
                              <a href={item.link}>{item.title}</a>
                            </h3>
                            <div></div>
                            <div
                              className="package-overview"
                              dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                  item.short_description,
                                ),
                              }}
                            />

                            <a
                              href={item.link} // should navigate to blog details page
                              className="th-btn style4 th-icon"
                            >
                              Read More
                            </a>
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
          <div className="accordion-area accordion mb-30" id="faqAccordion">
            <div
              className="items-center"
              style={{ paddingTop: 50, textAlign: "center" }}
            >
              <h3>{homeData && homeData.faq_head}</h3>
              <p>{homeData && homeData.fag_description}</p>
            </div>
            {/* faq start */}
            {faq &&
              faq.map((faq, index) => (
                <div className="accordion-card style2 " key={index}>
                  <div
                    className="accordion-header"
                    id={`collapse-item-${index}`}
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${index}`}
                      aria-expanded="false"
                      aria-controls={`collapse-${index}`}
                    >
                      Q{index + 1}.{faq.question}
                    </button>
                  </div>
                  <div
                    id={`collapse-${index}`}
                    className="accordion-collapse collapse "
                    aria-labelledby={`collapse-item-${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body style2">
                      <p className="faq-text"> {faq.answer}</p>
                    </div>
                  </div>
                </div>
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
                  <a href="my-account.html">Forgot password?</a>
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
    </div>
  );
}
