import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Tour() {
  const [tourData, setTourData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://iamanas.in/travel_bug/web_api/package_type_details/${id}`)
      .then((res) => {
        console.log("packages array", res.data.data);
        setTourData(res?.data);
      })
      .catch((error) => console.error(error.message));
  }, [id]);

    useEffect(()=>{
      window.scrollTo(0, 0);
    },[])

  if (!tourData) {
    return <div>Loading</div>;
  } else
    return (
      <div>
        <div className="container ">
          <div style={{ padding: "40px 20px" }}>
            {/* Main Titles */}
            <h2
              className="text-center sec-title"
              style={{ marginBottom: "10px" }}
            >
              {tourData.data?.main_title}
            </h2>
            <h2 className="text-center" style={{ marginBottom: "20px" }}>
              {tourData.data?.title}
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#666",
                lineHeight: "1.8",
                textAlign: "center",
                maxWidth: "800px",
                margin: "0 auto 30px auto",
              }}
            >
              {tourData.data.main_content}
            </p>

            {/* Packages Section */}
            <h2
              className="text-center sec-title"
              style={{ marginBottom: "15px" }}
            >
              {tourData.data.package_section_title}
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#666",
                lineHeight: "1.8",
                textAlign: "center",
                maxWidth: "800px",
                margin: "0 auto 30px auto",
              }}
            >
              {tourData.data.package_section_content}
            </p>

            {/* Package Cards */}
            <div
              className="packages-wrapper"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              {tourData.data.packages.map((item) => (
                <div
                  className="custom-tour-box"
                  key={item.id}
                  style={{
                    width: "300px",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                >
                  {/* Image */}
                  <div
                    className="custom-tour-box_img"
                    style={{ height: "200px" }}
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px",
                        transition: "transform 0.3s",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className="custom-tour-content"
                    style={{ padding: "15px" }}
                  >
                    <h4
                      className="custom-box-title"
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        marginBottom: "10px",
                        color: "#333",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#666",
                        lineHeight: "1.6",
                        marginBottom: "15px",
                      }}
                    >
                      {item.description}
                    </p>
                    <h3
                      className="custom-tour-box_price"
                      style={{
                        fontSize: "16px",
                        fontWeight: "700",
                        color: "#000000",
                        marginBottom: "15px",
                      }}
                    >
                      {item.amount}
                    </h3>
                    <div
                      className="custom-tour-action action-item"
                      style={{ textAlign: "center" }}
                    >
                      

                      <Link
                        to={`/package_details/${item.id}`}
                        className="th-btn style4 th-icon .th-btn"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="accordion-area accordion mb-30" id="faqAccordion">
                <div
                  className="items-center"
                  style={{ paddingTop: 50, textAlign: "center" }}
                >
                  <h3>{tourData.data.faq.heading}</h3>
                </div>
                {tourData.data.faq.faqs.map((faq, index) => (
                  <div className="accordion-card style2 " key={index}>
                    <div
                      className="accordion-header"
                      id={`collapse-item-${index}`}
                    >
                      <button
                        className="accordion-button collapsed new-btn-add"
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
      </div>
    );
}

export default Tour;
