import React, { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import Error from "./error";

const Tour = () => {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    console.log("mounted");
    const fetchData = () => {
      axios
        .get(`${import.meta.VITE_API_URL}/package_type_details/1`)
        .then((res) => {
          setDetails(res.data);
          console.log(res.data, "consolle");
        })
        .catch((err) => {
          setError(err);
          console.log("error", err);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="container ">
      <h1 className="sub-title text-center">{details.data.main_title}</h1>
      <h2 className="text-center">{details.data.title.title}</h2>
      <p>{details.data.title.content}</p>
      <h2 className="text-center">{details.data.destinations.heading}</h2>

      <div
        className="wrapper"
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {details.data.destinations.destinations.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              backgroundColor: "#ffffff",
              margin: "20px auto",
              width: "300px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <h4 style={{ color: "#333", marginBottom: "10px" }}>{item.name}</h4>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            />
            <div className="destinations" style={{ textAlign: "left" }}>
              <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                Beaches in {item.name}:
              </p>
              <ul style={{ paddingLeft: "20px", margin: "0" }}>
                {item.beaches.map((beach, i) => (
                  <li
                    key={i}
                    style={{
                      color: "#555",
                      fontSize: "14px",
                      marginBottom: "5px",
                    }}
                  >
                    {beach}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <h2>{details.data.packages.heading}</h2>
      <p>{details.data.packages.content}</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {details.data.packages.packages.map((item) => (
          <div
            className=""
            key={item.id}
            style={{
              width: 300,
              margin: 10,
            }}
          >
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
                  {item.description}
                </div>
                <h3 className="tour-box_price">
                  <span className="box-title">{item.amount}</span>
                </h3>
                <div
                  className="tour-action"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Link
                    to={`package_details/${item.id}`}
                    className="th-btn style4 th-icon"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3>{details.data.activities.heading}</h3>

      <div>
        <ul>
          {details.data.activities.categories.map((category, categoryIndex) => (
            <li key={categoryIndex}>
              <strong>{category.title}:</strong>{" "}
              {category.activities.join(", ")}
            </li>
          ))}
        </ul>
      </div>

      <h2>{details.data.best_time_to_visit.heading}</h2>

      <div>
        <ul>
          {details.data.best_time_to_visit.seasons.map(
            (season, seasonIndex) => (
              <li key={seasonIndex}>
                <strong>{season.name}:</strong> {season.highlights?.join(", ")}
              </li>
            ),
          )}
        </ul>
      </div>

      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="accordion-area accordion mb-30" id="faqAccordion">
            <div
              className="items-center"
              style={{ paddingTop: 50, textAlign: "center" }}
            >
              <h3>{details.data.faq.heading}</h3>
            </div>
            {details.data.faq.faqs.map((faq, index) => (
              <div className="accordion-card style2 " key={index}>
                <div className="accordion-header" id={`collapse-item-${index}`}>
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
    </div>
  );
};

export default Tour;
