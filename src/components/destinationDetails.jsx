import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import axios from "axios";
export default function DestinationDetails() {
  const [details, setDetails] = useState();
  const [error, setError] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://iamanas.in/travel_bug/web_api/package_details/${id}`)
      .then((response) => {
        const data = response.data.data;
        setDetails(data);
        console.log("Details ", data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [id]);
  if (error) {
    throw new Error(error);
  }
  return (
    <>
      <div
        className="breadcumb-wrapper "
        data-bg-src="assets/img/bg/breadcumb-bg.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">
              {details && details.package_details.title}
            </h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="home-travel.html">Home</a>
              </li>
              <li>Destination Details</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="space">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="page-single">
                <div className="service-img">
                  <img
                    src={details && details.package_details.thumbnail}
                    alt=""
                  />
                </div>
                <div className="page-content d-block">
                  <div className="page-meta mt-50 mb-45">
                    <a className="page-tag" href="tour.html">
                      Featured
                    </a>
                    <span className="ratting">
                      <i className="fa-sharp fa-solid fa-star" />
                      <span>4.8</span>
                    </span>
                  </div>
                  <h2 className="box-title">
                    {details && details.package_details.title}
                  </h2>
                  <div
                    className="package-overview"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        details && details.package_details.overview,
                      ),
                    }}
                  />
                  <div
                    className="package-overview"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        details && details.package_details.inclusions,
                      ),
                    }}
                  />
                  <div
                    className="package-overview"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        details && details.package_details.highlights,
                      ),
                    }}
                  />
                  <div
                    className="package-overview"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        details && details.package_details.itinerary,
                      ),
                    }}
                  />
                  {/* 
                  <p className="blog-text mb-35">
                    ‍Whether you work from home or commute to a nearby office,
                    the energy-efficient features of your home contribute to a
                    productive and eco-conscious workday. Smart home systems
                    allow you to monitor and control energy usage, ensuring that
                    your environmental impact remains minimal.
                  </p>
                  <h2 className="box-title">Basic Information</h2>
                  <div className="destination-checklist">
                    <div className="checklist style2">
                      <ul>
                        <li>Destination</li>
                        <li>Visa Requirements</li>
                        <li>Language</li>
                        <li>Currency Used</li>
                        <li>Area (km2)</li>
                        <li>Destination</li>
                        <li>Per Person</li>
                      </ul>
                    </div>
                    <div className="checklist style2">
                      <ul>
                        <li>Netherlands</li>
                        <li>On Arrival Visa</li>
                        <li>English</li>
                        <li>Euro</li>
                        <li>25,859km2</li>
                        <li>25 Tour Places</li>
                        <li>$890.00</li>
                      </ul>
                    </div>
                  </div>
                  <blockquote>
                    <p>
                      Join your neighbors for an eco-friendly social gathering
                      as the day comes to a conclusion. Savor refreshments made
                      with sustainable ingredients and have discussions on
                      sustainable life. By fostering a sense of community.
                    </p>
                    <cite>Michel Clarck</cite>
                  </blockquote>
                  <p className="blog-text mb-35">
                    Dinning: Prepare a dinner using fresh ingredients from your
                    own garden or the local CSA program. The energy-efficient
                    appliances in your kitchen make cooking a breeze while
                    minimizing your overall energy consumption. Share a meal
                    with neighbors, The quiet night offers a peaceful ambiance,
                    reinforcing the community's commitment to a sustainable,
                    low-impact lifestyle.
                  </p>
                  <p className="blog-text mb-35">
                    Living sustainably at Realar Residence is more than a
                    choice; it's an immersive experience that shapes every
                    moment of your day. From the moment you wake up in your
                    solar-powered home to the evening gatherings with
                    like-minded neighbors
                  </p>
                  <h3 className="">
                    The sustainable traveller These 6 hotels epitomise ethical
                    luxury
                  </h3>
                                       <div className="service-inner-img mb-40">
                    <img
                      src="assets/img/destination/destination-inner-1.jpg"
                      alt=""
                    />
                  </div>
                  <h2 className="box-title">Highlights</h2>
                  <div className="checklist">
                    <ul>
                      <li>Visit most popular location of Maldives</li>
                      <li>
                        Buffet Breakfast for all traveler with good quality.
                      </li>
                      <li>
                        Expert guide always guide you and give informations.
                      </li>
                      <li>Best Hotel for all also great food.</li>
                      <li>Helping all traveler for Money Exchange.</li>
                      <li>
                        Buffet Breakfast for all traveler with good quality..
                      </li>
                      <li>
                        Buffet Breakfast for all traveler with good quality.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="destination-gallery-wrapper">
                  <h3 className="page-title mt-30 mb-30">From our gallery</h3>
                  <div className="row gy-4 gallery-row filter-active">
                    <div className="col-xxl-auto filter-item">
                      <div className="gallery-box style3">
                        <div className="gallery-img global-img">
                          <img
                            src="assets/img/gallery/gallery_6_1.jpg"
                            alt="gallery image"
                          />
                          <a
                            href="assets/img/gallery/gallery_6_1.jpg"
                            className="icon-btn popup-image"
                          >
                            <i className="fal fa-magnifying-glass-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-auto filter-item">
                      <div className="gallery-box style3">
                        <div className="gallery-img global-img">
                          <img
                            src="assets/img/gallery/gallery_6_2.jpg"
                            alt="gallery image"
                          />
                          <a
                            href="assets/img/gallery/gallery_6_2.jpg"
                            className="icon-btn popup-image"
                          >
                            <i className="fal fa-magnifying-glass-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-auto filter-item">
                      <div className="gallery-box style3">
                        <div className="gallery-img global-img">
                          <img
                            src="assets/img/gallery/gallery_6_3.jpg"
                            alt="gallery image"
                          />
                          <a
                            href="assets/img/gallery/gallery_6_3.jpg"
                            className="icon-btn popup-image"
                          >
                            <i className="fal fa-magnifying-glass-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-auto filter-item">
                      <div className="gallery-box style3">
                        <div className="gallery-img global-img">
                          <img
                            src="assets/img/gallery/gallery_6_4.jpg"
                            alt="gallery image"
                          />
                          <a
                            href="assets/img/gallery/gallery_6_4.jpg"
                            className="icon-btn popup-image"
                          >
                            <i className="fal fa-magnifying-glass-plus" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="th-comments-wrap style2 ">
                  <h2 className="blog-inner-title h4">Reviews (3)</h2>
                  <ul className="comment-list">
                    <li className="th-comment-item">
                      <div className="th-post-comment">
                        <div className="comment-avater">
                          <img
                            src="assets/img/blog/comment-author-1.jpg"
                            alt="Comment Author"
                          />
                        </div>
                        <div className="comment-content">
                          <h3 className="name">Adam Jhon</h3>
                          <div className="commented-wrapp">
                            <span className="commented-on">20 Jun, 2024</span>
                            <span className="commented-time">08:56pm </span>
                            <span className="comment-review">
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                              <i className="fa-solid fa-star" />
                            </span>
                          </div>
                          <p className="text">
                            Credibly pontificate transparent quality vectors
                            with quality mindshare. Efficiently architect
                            worldwide strategic theme areas after user.
                          </p>
                          <div className="reply_and_edit">
                            <i className="fa-solid fa-thumbs-up" />
                          </div>
                        </div>
                      </div>
                      <ul className="children">
                        <li className="th-comment-item">
                          <div className="th-post-comment">
                            <div className="comment-avater">
                              <img
                                src="assets/img/blog/comment-author-4.jpg"
                                alt="Comment Author"
                              />
                            </div>
                            <div className="comment-content">
                              <div className="">
                                <h3 className="name">Maria Willson</h3>
                                <div className="commented-wrapp">
                                  <span className="commented-on">
                                    23 Jun, 2024
                                  </span>
                                  <span className="commented-time">
                                    08:56pm{" "}
                                  </span>
                                  <span className="comment-review">
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                    <i className="fa-solid fa-star" />
                                  </span>
                                </div>
                              </div>
                              <p className="text">
                                It is different from airport transfer or port
                                transfer, which are services that pick you up
                              </p>
                              <div className="reply_and_edit">
                                <i className="fa-solid fa-thumbs-up" />
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="th-comment-item">
                      <div className="th-post-comment">
                        <div className="comment-avater">
                          <img
                            src="assets/img/blog/comment-author-5.jpg"
                            alt="Comment Author"
                          />
                        </div>
                        <div className="comment-content">
                          <div className="">
                            <h3 className="name">Michel Edwards</h3>
                            <div className="commented-wrapp">
                              <span className="commented-on">27 Jun, 2024</span>
                              <span className="commented-time">08:56pm </span>
                              <span className="comment-review">
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                              </span>
                            </div>
                          </div>
                          <p className="text">
                            Credibly pontificate transparent quality vectors
                            with quality mindshare. Efficiently architect
                            worldwide strategic theme areas after user.
                          </p>
                          <div className="reply_and_edit">
                            <i className="fa-solid fa-thumbs-up" />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
*/}
                </div>
                <div className="th-comment-form ">
                  <div className="row">
                    <h3 className="blog-inner-title h4 mb-2">Leave a Reply</h3>
                    <p className="mb-25">
                      Your email address will not be published. Required fields
                      are marked
                    </p>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Full Name*"
                        className="form-control"
                        required=""
                      />
                      <i className="far fa-user" />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Your Email*"
                        className="form-control"
                        required=""
                      />
                      <i className="far fa-envelope" />
                    </div>
                    <div className="col-12 form-group">
                      <input
                        type="text"
                        placeholder="Website"
                        className="form-control"
                        required=""
                      />
                      <i className="far fa-globe" />
                    </div>
                    <div className="col-12 form-group">
                      <textarea
                        placeholder="Comment*"
                        className="form-control"
                        defaultValue={""}
                      />
                      <i className="far fa-pencil" />
                    </div>
                    <div className="col-12 form-group">
                      <input type="checkbox" id="html" />
                      <label htmlFor="html">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>
                    <div className="col-12 form-group mb-0">
                      <button className="th-btn">
                        Send Message
                        <img src="assets/img/icon/plane2.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area style3">
                <div className="widget widget_search  ">
                  <form className="search-form">
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                      <i className="far fa-search" />
                    </button>
                  </form>
                </div>
                <div className="widget widget_categories  ">
                  <h3 className="widget_title">Categories</h3>
                  <ul>
                    <li>
                      <a href="blog.html">
                        <img src="assets/img/theme-img/map.svg" alt="" />
                        City Tour
                      </a>
                      <span>(8)</span>
                    </li>
                    <li>
                      <a href="blog.html">
                        <img src="assets/img/theme-img/map.svg" alt="" />
                        Beach Tours
                      </a>
                      <span>(6)</span>
                    </li>
                    <li>
                      <a href="blog.html">
                        <img src="assets/img/theme-img/map.svg" alt="" />
                        Wildlife Tours
                      </a>
                      <span>(2)</span>
                    </li>
                    <li>
                      <a href="blog.html">
                        <img src="assets/img/theme-img/map.svg" alt="" />
                        News &amp; Tips
                      </a>
                      <span>(7)</span>
                    </li>
                    <li>
                      <a href="blog.html">
                        <img src="assets/img/theme-img/map.svg" alt="" />
                        Adventure Tours
                      </a>
                      <span>(9)</span>
                    </li>
                    <li>
                      <a href="blog.html">
                        <img src="assets/img/theme-img/map.svg" alt="" />
                        Mountain Tours
                      </a>
                      <span>(10)</span>
                    </li>
                  </ul>
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
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            Exploring The Green Spaces Of the island maldives
                          </a>
                        </h4>
                        <div className="recent-post-meta">
                          <a href="blog.html">
                            <i className="fa-regular fa-calendar" />
                            22/6/ 2024
                          </a>
                        </div>
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
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            Harmony With Nature Of Belgium Tour and travle
                          </a>
                        </h4>
                        <div className="recent-post-meta">
                          <a href="blog.html">
                            <i className="fa-regular fa-calendar" />
                            25/6/ 2024
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="blog-details.html">
                          <img
                            src="assets/img/blog/recent-post-1-3.jpg"
                            alt="Blog Image"
                          />
                        </a>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <a className="text-inherit" href="blog-details.html">
                            Exploring The Green Spaces Of Realar Residence
                          </a>
                        </h4>
                        <div className="recent-post-meta">
                          <a href="blog.html">
                            <i className="fa-regular fa-calendar" />
                            27/6/ 2024
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget widget_tag_cloud  ">
                  <h3 className="widget_title">Popular Tags</h3>
                  <div className="tagcloud">
                    <a href="blog.html">Tour</a>
                    <a href="blog.html">Adventure</a>
                    <a href="blog.html">Rent</a>
                    <a href="blog.html">Innovate</a>
                    <a href="blog.html">Hotel</a>
                    <a href="blog.html">Modern</a>
                    <a href="blog.html">Luxury</a>
                    <a href="blog.html">Travel</a>
                  </div>
                </div>
                <div
                  className="widget widget_offer  "
                  data-bg-src="assets/img/bg/widget_bg_1.jpg"
                >
                  <div className="offer-banner">
                    <div className="offer">
                      <h6 className="box-title">
                        Need Help? We Are Here To Help You
                      </h6>
                      <div className="banner-logo">
                        <img src="assets/img/logo2.svg" alt="Tourm" />
                      </div>
                      <div className="offer">
                        <h6 className="offer-title">You Get Online support</h6>
                        <a className="offter-num" href={+256214203215}>
                          +256 214 203 215
                        </a>
                      </div>
                      <a href="contact.html" className="th-btn style2 th-icon">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
        <div
          className="shape-mockup shape1 d-none d-xxl-block"
          data-bottom="35%"
          data-right="12%"
        >
          <img src="assets/img/shape/shape_1.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape2 d-none d-xl-block"
          data-bottom="31%"
          data-right="8%"
        >
          <img src="assets/img/shape/shape_2.png" alt="shape" />
        </div>
        <div
          className="shape-mockup shape3 d-none d-xxl-block"
          data-bottom="33%"
          data-right="5%"
        >
          <img src="assets/img/shape/shape_3.png" alt="shape" />
        </div>
      </section>
    </>
  );
}
