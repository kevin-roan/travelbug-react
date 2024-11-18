import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PackageDetails() {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/package_type_details/${id}`)
      .then((response) => {
        setDetails(response.data);
        console.log("response", response.data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
        setError(error);
      });
  }, []);
  if (!details) {
    return <div>Loading</div>;
  }

  return (
    <div className="container ">
      <h1>{details.data.main_title}</h1>
      <h2>{details.data.title.title}</h2>
      <p>{details.data.title.content}</p>
      <h2>{details.data.destinations.heading}</h2>

      <div>
        {details.data.destinations.destinations.map((item, index) => (
          <div
            key={index}
            style={{
              borderWidth: 1,
              borderRadius: 20,
              padding: 20,
              backgroundColor: "#1CA8CB",
              margin: 10,
            }}
          >
            <h4>{item.name}</h4>
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: 400,
                height: 100,
              }}
            />
            <div className="destsaiantions">
              {item.beaches.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
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
        {details.data.packages.packages.map((item, _) => (
          <div className="" key={item.id} style={{ width: 300, margin: 10 }}>
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
}
