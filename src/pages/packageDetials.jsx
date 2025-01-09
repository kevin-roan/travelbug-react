import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import axios from "axios";
import TourPackageBanner from "../components/packageDetailBanner";
import EnquiryForm from "../components/EnquiryForm";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Carousel from "react-material-ui-carousel";

export default function PackageDetails() {
  const [data, setData] = useState("");
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    axios
      .get(`https://iamanas.in/travel_bug/web_api/package_details/${id}`)
      .then((response) => {
        setData(response.data.data);
        console.log("Package details", response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return <div className="loading-container">Loading...</div>;
  } else {
    return (
      <div className="container">
        <div className="  main-containerrr">
          {/* Banner Section */}
          <section className="banner-section">
            <TourPackageBanner
              id={data.package_details.id}
              title={data.package_details.title}
              day={data.package_details.day}
              night={data.package_details.night}
              amount={data.package_details.amount}
              thumbnail={data.package_details.thumbnail}
              startingPoint={data.package_details.starting_point}
              endingPoint={data.package_details.ending_point}
            />

            {/* Tab Navigation */}
            <div className="tabs">
              <button
                className={activeTab === "overview" ? "active" : ""}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
              {/* <button
                className={activeTab === "other_info" ? "active" : ""}
                onClick={() => setActiveTab("other_info")}
              >
                Other Info
              </button> */}
              <button
                className={activeTab === "accommodation" ? "active" : ""}
                onClick={() => setActiveTab("accommodation")}
              >
                Accommodation & Facilities
              </button>
              <button
                className={activeTab === "itinerary" ? "active" : ""}
                onClick={() => setActiveTab("itinerary")}
              >
                Itinerary
              </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {activeTab === "overview" && (
                <>
                  <h1 className="overSize">Overview</h1>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        data.package_details?.overview,
                      ),
                    }}
                  ></div>

                  <h1 className="overSize">Inclusions</h1>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        data.package_details?.inclusions,
                      ),
                    }}
                  ></div>

                  <h1 className="overSize">Highlights</h1>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        data.package_details?.highlights,
                      ),
                    }}
                  ></div>

                  {/* <h1 className="overSize">Other Info</h1> */}

                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        data.package_details?.other_info,
                      ),
                    }}
                  ></div>
                </>
              )}
              {activeTab === "other_info" && (
                <>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        data.package_details?.accommodation,
                      ),
                    }}
                  ></div>
                </>
              )}
              {activeTab === "accommodation" && (
                <>
                  {/* <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        data.package_details?.other_info
                      ),
                    }}
                  ></div> */}

                  <Box
                    sx={{ width: "100%", margin: "0 auto", padding: "10px" }}
                  >
                    {data?.package_details?.accommodation?.map(
                      (item, index) => (
                        <Accordion key={index}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                          >
                            <Typography variant="h6">{item.title}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Box sx={{ display: "flex", gap: 2 }}>
                              {item?.images?.length > 0 ? (
                                <Carousel
                                  autoPlay
                                  animation="slide"
                                  indicators={true}
                                  navButtonsAlwaysVisible={true}
                                  cycleNavigation={true}
                                >
                                  {item.images.map((image, idx) => (
                                    <Box
                                      key={idx}
                                      component="img"
                                      src={image}
                                      alt={`Image ${idx + 1}`}
                                      style={{ width: "100%", height: "50vh" }}
                                    />
                                  ))}
                                </Carousel>
                              ) : (
                                <Typography>No images available</Typography>
                              )}
                            </Box>

                            <p style={{ marginTop: "5px" }}>{item?.content}</p>
                          </AccordionDetails>
                        </Accordion>
                      ),
                    )}
                  </Box>
                </>
              )}
              {activeTab === "itinerary" && (
                <>
                  <Box
                    sx={{ width: "100%", margin: "0 auto", padding: "10px" }}
                  >
                    {data?.package_details?.itinerary?.map((item, index) => (
                      <Accordion key={index}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls={`panel${index}-content`}
                          id={`panel${index}-header`}
                        >
                          <Typography variant="h6">{item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Box>
                            <p variant="body1">{item.content}</p>
                            <p variant="body2" sx={{ marginTop: 2 }}>
                              <strong>Sub Content: </strong>
                              {item.sub_content}
                            </p>
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </Box>
                </>
              )}
            </div>
          </section>

          {/* Form Section */}
          <section className="form-section">
            <EnquiryForm packageId={data.package_details.id} />
          </section>
        </div>

        <div>
          <h1
            className="overSize"
            style={{ marginTop: "16px", textAlign: "center" }}
          >
            You might also like
          </h1>
        </div>
        <section
          className="similar-packages"
          style={{
            display: "flex",
            alignItems: "flex-start", // Align items at the top
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {data.package_details.similar_packages.map((item) => (
            <div
              key={item.id}
              style={{
                width: 300,
                margin: 10,
                display: "flex",
                flexDirection: "column", // Ensure content is stacked vertically
                height: "100%", // Make sure the container grows to fill the available height
              }}
            >
              <div
                className="tour-box th-ani gsap-cursor"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  maxHeight: "600px", // Maximum height to make all cards uniform in height
                }}
              >
                <div
                  className="tour-box_img global-img"
                  style={{
                    flexShrink: 0,
                    height: 280, // Fixed height for image
                    overflow: "hidden", // To ensure image stays within bounds
                  }}
                >
                  <img
                    src={item.thumbnail}
                    alt="image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // Ensure the image covers the area without stretching
                    }}
                  />
                </div>
                <div
                  className="tour-content"
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between", // Ensures the content is spaced evenly
                    padding: "10px",
                  }}
                >
                  <h4 className="box-title">
                    <a href="tour-tourData.html">{item.title}</a>
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "center",
                      flexWrap: "wrap",
                      marginBottom: 10,
                      flex: 1, // Flex to take up remaining space
                    }}
                  >
                    {item.description}
                  </div>
                  <h3 className="tour-box_price">
                    <span className="box-title">€{item.amount} </span>
                  </h3>
                  <div
                    className="tour-action"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "auto", // Push the button to the bottom
                    }}
                  >
                    <Link
                      to={`/package_details/${item.id}`}
                      className="th-btn style4 th-icon"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
}
