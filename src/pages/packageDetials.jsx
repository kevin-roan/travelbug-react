import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import axios from "axios";
import TourPackageBanner from "../components/packageDetailBanner";
import EnquiryForm from "../components/EnquiryForm";
import Card from "../components/Card";
import "./Tour.css";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  ImageListItem,
  useMediaQuery,
  ImageList,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Carousel from "react-material-ui-carousel";

export default function PackageDetails() {
  const [data, setData] = useState("");
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:900px)");

  // Determine columns based on screen size
  const getCols = () => {
    if (isSmallScreen) return 1; // 1 column for small screens
    if (isMediumScreen) return 2; // 2 columns for medium screens
    return 3; // 3 columns for larger screens
  };

  useEffect(() => {
    axios
      .get(`https://iamanas.in/travel_bug/web_api/package_details/${id}`)
      .then((response) => {
        setData(response.data.data);
        console.log("Package details 222", response.data.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  console.log("data ", data);

  if (!data) {
    return <div className="loading-container">Loading...</div>;
  } else {
    return (
      <div className="">
        <div className="">
          {/* Banner Section */}
          <section className="banner-section custom-banner">
            <TourPackageBanner
              id={data.package_details?.id}
              title={data.package_details?.title}
              day={data.package_details?.day}
              night={data.package_details?.night}
              amount={data.package_details?.amount}
              thumbnail={data.package_details?.thumbnail}
              startingPoint={data.package_details?.starting_point}
              endingPoint={data.package_details?.ending_point}
            />

            {/* Tab Navigation */}
            <div className="shadow-conatiner">
              <div
                className="tabs container"
                style={{ margin: "0", padding: "0" }}
              >
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

                {data?.package_details?.accommodation?.length > 0 && (
                  <button
                    className={activeTab === "accommodation" ? "active" : ""}
                    onClick={() => setActiveTab("accommodation")}
                  >
                    Accommodation & Facilities
                  </button>
                )}

                {data?.package_details?.itinerary?.length > 0 && (
                  <button
                    className={activeTab === "itinerary" ? "active" : ""}
                    onClick={() => setActiveTab("itinerary")}
                  >
                    Itinerary
                  </button>
                )}

                {data?.package_details?.other_info !== "" && (
                  <button
                    className={activeTab === "other_info" ? "active" : ""}
                    onClick={() => setActiveTab("other_info")}
                  >
                    Other Info
                  </button>
                )}

                {data?.package_details?.inclutions !== "" && (
                  <button
                    className={activeTab === "inclutions" ? "active" : ""}
                    onClick={() => setActiveTab("inclutions")}
                  >
                    Exclutions & Inclutions
                  </button>
                )}

                {data?.package_details?.gallery?.length > 0 && (
                  <button
                    className={activeTab === "gallery" ? "active" : ""}
                    onClick={() => setActiveTab("gallery")}
                  >
                    Gallery
                  </button>
                )}
              </div>
            </div>

            {/* Tab Content */}
            <div className="tab-content container tab-item-content-wraper">
              <div>
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
                          data.package_details?.other_info,
                        ),
                      }}
                    ></div>
                  </>
                )}
                {activeTab === "inclutions" && (
                  <>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          data.package_details?.inclusions,
                        ),
                      }}
                    ></div>
                  </>
                )}

                {activeTab === "gallery" && (
                  <>
                    <Box
                      sx={{ width: "100%", margin: "0 auto", padding: "10px" }}
                    >
                      <ImageList cols={getCols()} gap={8}>
                        {data?.package_details?.gallery?.map((item, index) => (
                          <ImageListItem key={index}>
                            <img
                              src={item} // Assuming `item` is a URL
                              alt={`Gallery Image ${index + 1}`}
                              loading="lazy"
                              style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "8px",
                              }}
                            />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    </Box>
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
                                        style={{
                                          width: "100%",
                                          height: "auto",
                                        }}
                                      />
                                    ))}
                                  </Carousel>
                                ) : (
                                  <Typography>No images available</Typography>
                                )}
                              </Box>

                              <p style={{ marginTop: "5px" }}>
                                {item?.content}
                              </p>
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
                                {item.sub_content?.trim() !== "" && (
                                  <strong>Sub Content: </strong>
                                )}
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
              <div>
                {/* Form Section */}
                <section className="form-section">
                  <EnquiryForm packageId={data?.package_details?.id} />
                </section>
              </div>
            </div>
          </section>
        </div>

        <div>
          <h1
            className="overSize"
            style={{
              marginTop: "16px",
              textAlign: "center",
              marginBottom: "40px",
            }}
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
            marginBottom: "90px",
            gap: "30px",
          }}
        >
          {data?.package_details?.similar_packages?.map((item, index) => (
            <Card
              key={index}
              id={item.id}
              title={item.title}
              starting_point={item.starting_point}
              ending_point={item.ending_point}
              amount={item.amount}
              standard_amount={item.standard_amount}
              discount={Math.floor(item.discount)}
              short_description={item.short_description}
              destination_title={item.destination_title}
              day={item.day}
              night={item.night}
              thumbnail={item.thumbnail}
            />
          ))}

          {/* {data.package_details.similar_packages.map((item) => (
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
          ))} */}

          {/*
           */}

          {/* 
          <div className="tour-container">
            <div className="package-grid">
              {data.package_details.similar_packages.map((pkg) => (
                <div className="package-card" key={pkg.id}>
                  <img
                    src={pkg.thumbnail}
                    alt={pkg.title}
                    className="package-image"
                  />
                  <div className="package-details">
                    <div>
                      <h4>{pkg.title}</h4>
                      <p style={{ textAlign: "start" }}>
                        <strong>Price:</strong> ${pkg.amount}
                      </p>
                    </div>

                    <div
                      className="tour-action"
                      style={{
                        display: "flex",
                        justifyContent: "start",
                      }}
                    >
                      <Link
                        to={`/package_details/${pkg?.id}`}
                        className="th-btn style4 th-icon"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
*/}
        </section>
      </div>
    );
  }
}

const images = [
  "https://via.placeholder.com/300x200/ff0000",
  "https://via.placeholder.com/300x200/00ff00",
  "https://via.placeholder.com/300x200/0000ff",
  "https://via.placeholder.com/300x200/ffff00",
  "https://via.placeholder.com/300x200/00ffff",
  "https://via.placeholder.com/300x200/ff00ff",
];
