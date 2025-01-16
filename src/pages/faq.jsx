import { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function FAQ() {
  const [faq, setFaq] = useState([]);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionRefs = useRef([]);

  useEffect(() => {
    axios
      .get(`https://iamanas.in/travel_bug/web_api/faq`)
      .then((response) => {
        setFaq(response.data.data.faqs);
      })
      .catch((error) => {
        setError(error);
        console.error("There was an error fetching the data", error);
      });
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div
        className="breadcumb-wrapper "
        data-bg-src="assets/img/bg/breadcumb-bg.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">FAQs</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="/#/">Home</a>
              </li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </div>{" "}
      <div className="space-top space-extra-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="title-area text-center">
                <span className="sub-title">FAQ</span>
                <h2 className="sec-title">frequently Ask Questions</h2>
                <p>Have questions you want answers to?</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="accordion-area accordion mb-30">
                {faq.map((item, index) => (
                  <div
                    className="accordion-card style2 mx-4"
                    key={index}
                    style={{ borderRadius: 10 }}
                  >
                    <div
                      className="accordion-header"
                      id={`collapse-item-${index}`}
                    >
                      <button
                        className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
                        type="button"
                        onClick={() => toggleAccordion(index)}
                        style={{
                          backgroundColor:
                            activeIndex === index ? "#E8EFFA" : "",
                          transition: "background-color 0.5s ease",
                        }}
                      >
                        {item.question}
                      </button>
                    </div>
                    <div
                      ref={(el) => (accordionRefs.current[index] = el)}
                      className="accordion-collapse"
                      style={{
                        maxHeight:
                          activeIndex === index
                            ? `${accordionRefs.current[index]?.scrollHeight}px`
                            : "0",

                        backgroundColor: activeIndex === index ? "#E8EFFA" : "",
                        overflow: "hidden",
                        transition: "max-height 0.5s ease",
                      }}
                    >
                      <div className="accordion-body style2">
                        <p className="faq-text">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="elements-sec bg-white overflow-hidden">
        <div className="container-fluid">
          <div className="tags-container relative"></div>
        </div>
      </div>{" "}
      <div
        className="bg-top-center space overflow-hidden"
        data-bg-src="assets/img/bg/tour_bg_3.jpg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="">
                <div className="title-area text-center mb-30">
                  <span className="sub-title style1">Meet with Our Guide</span>
                  <h2 className="sec-title">Do You Have Any More Questions?</h2>
                </div>
                <form
                  action="mail.php"
                  method="POST"
                  className="contact-form ajax-contact"
                >
                  <h3 className="sec-title mb-30">Book a tour</h3>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name3"
                        placeholder="First Name"
                      />
                      <img src="assets/img/icon/user.svg" alt="" />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email3"
                        id="email3"
                        placeholder="Your Mail"
                      />
                      <img src="assets/img/icon/mail.svg" alt="" />
                    </div>
                    <div className="form-group col-12">
                      <select
                        name="subject"
                        id="subject"
                        className="form-select nice-select"
                      >
                        <option
                          value="Select Tour Destination"
                          selected
                          disabled
                        >
                          Select Tour Destination
                        </option>
                        <option value="Africa Adventure">
                          Africa Adventure
                        </option>
                        <option value="Africa Wild">Africa Wild</option>
                        <option value="Asia">Asia</option>
                        <option value="Scandinavia">Scandinavia</option>
                        <option value="Western Europe">Western Europe</option>
                      </select>
                    </div>
                    <div className="form-group col-12">
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="3"
                        className="form-control"
                        placeholder="Your Message"
                      ></textarea>
                      <img src="assets/img/icon/chat.svg" alt="" />
                    </div>
                    <div className="form-btn col-12 mt-24">
                      <button type="submit" className="th-btn style3">
                        Send message{" "}
                        <img src="assets/img/icon/plane.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <p className="form-messages mb-0 mt-3"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
