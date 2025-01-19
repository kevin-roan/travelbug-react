import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FilterCard = () => {
  // Define states for each dataset
  const [destinationData, setDestinationData] = useState(null);
  const [adventureData, setAdventureData] = useState(null);
  const [categoryData, setCategoryData] = useState(null);

  const [error, setError] = useState(null); // Optional: To track errors
  const [loading, setLoading] = useState(false); // Optional: To show loading state
  const [formData, setFormData] = useState({
    destination: "",
    adventure: "",
    duration: "",
    category: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      try {
        // Define your API endpoints
        const destination =
          "https://iamanas.in/travel_bug/web_api/destination_list";
        const adventure =
          "https://iamanas.in/travel_bug/web_api/adventure_type_list";
        const category =
          "https://iamanas.in/travel_bug/web_api/tour_category_list";

        // Fetch all data concurrently
        const [destinationResponse, adventureResponse, categoryResponse] =
          await Promise.all([
            axios.get(destination),
            axios.get(adventure),
            axios.get(category),
          ]);

        // Set the fetched data to respective states
        setDestinationData(destinationResponse.data?.data);
        setAdventureData(adventureResponse.data?.data);
        setCategoryData(categoryResponse.data?.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message); // Save the error message
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array ensures it runs only once on mount

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (location?.pathname === "/") {
      navigate(
        `/search?destination_id=${formData.destination}&adventure_type_id=${formData.adventure}&duration=${formData.duration}&tour_category_id=${formData.category}`,
      );
    } else {
      navigate(
        `/search?destination_id=${formData.destination}&adventure_type_id=${formData.adventure}&duration=${formData.duration}&tour_category_id=${formData.category}`,
      );
    }
  };

  return (
    <>
      <div className="booking-sec" style={{ padding: "20px 0" }}>
        <div
          className="container"
          style={{
            maxWidth: location?.pathname === "/" ? "1200px" : "1300px",
            margin: "0 auto",
            padding: "0 15px",
            position: "relative",
            zIndex: 10,
            top: location?.pathname === "/" ? "-100px" : "5px",
          }}
        >
          <form
            onSubmit={onSubmit}
            style={{
              background: "white",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <div className="input-wrap">
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  margin: "0 -10px",
                  gap: "20px",
                }}
              >
                {/* Destination Field */}
                <div
                  style={{
                    flex: "1 1 250px",
                    minWidth: "250px",
                    padding: "0 10px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: "10px",
                        top: "45px",
                        color: "#666",
                      }}
                    >
                      <i className="fa-light fa-route"></i>
                    </div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "10px",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#4B5563",
                      }}
                    >
                      Destination
                    </label>
                    <select
                      name="destination"
                      id="subject"
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "12px 12px 12px 35px",
                        border: "1px solid #D1D5DB",
                        borderRadius: "4px",
                        fontSize: "14px",
                        backgroundColor: "white",
                        color: "#4B5563",
                        cursor: "pointer",
                        // appearance: "auto",
                        height: "45px",
                      }}
                    >
                      <option value="" disabled selected>
                        Select Destination
                      </option>

                      {destinationData?.map((item, index) => (
                        <option value={item?.id} key={index}>
                          {item?.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Adventure Type Field */}
                <div
                  style={{
                    flex: "1 1 250px",
                    minWidth: "250px",
                    padding: "0 10px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: "10px",
                        top: "45px",
                        color: "#666",
                      }}
                    >
                      <i className="fa-regular fa-person-hiking"></i>
                    </div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "10px",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#4B5563",
                      }}
                    >
                      Type
                    </label>
                    <select
                      name="adventure"
                      id="Adventure"
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "12px 12px 12px 35px",
                        border: "1px solid #D1D5DB",
                        borderRadius: "4px",
                        fontSize: "14px",
                        backgroundColor: "white",
                        color: "#4B5563",
                        cursor: "pointer",
                        // appearance: "auto",
                        height: "45px",
                      }}
                    >
                      <option value="" disabled selected>
                        Select Adventure Type
                      </option>
                      {adventureData?.map((item, index) => (
                        <option value={item?.id} key={index}>
                          {item?.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Duration Field */}
                <div
                  style={{
                    flex: "1 1 250px",
                    minWidth: "250px",
                    padding: "0 10px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: "10px",
                        top: "45px",
                        color: "#666",
                      }}
                    >
                      <i className="fa-light fa-clock"></i>
                    </div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "10px",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#4B5563",
                      }}
                    >
                      Duration
                    </label>
                    <input
                      id="days"
                      name="duration"
                      type="number"
                      onChange={handleChange}
                      placeholder="Days"
                      min="11"
                      max="30"
                      style={{
                        width: "100%",
                        padding: "12px 12px 12px 35px",
                        border: "1px solid #D1D5DB",
                        borderRadius: "4px",
                        fontSize: "14px",
                        backgroundColor: "white",
                        color: "#4B5563",
                        height: "45px",
                      }}
                      onInvalid={(e) => {
                        e.target.setCustomValidity(
                          "Tours are available for 11 to 30 days. Please select a number within this range.",
                        );
                      }}
                      onInput={(e) => e.target.setCustomValidity("")}
                    />
                  </div>
                </div>

                {/* Tour Category Field */}
                <div
                  style={{
                    flex: "1 1 250px",
                    minWidth: "250px",
                    padding: "0 10px",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: "10px",
                        top: "45px",
                        color: "#666",
                      }}
                    >
                      <i className="fa-light fa-map-location-dot"></i>
                    </div>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "10px",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#4B5563",
                      }}
                    >
                      Tour Category
                    </label>
                    <select
                      name="category"
                      id="category"
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "12px 12px 12px 35px",
                        border: "1px solid #D1D5DB",
                        borderRadius: "4px",
                        fontSize: "14px",
                        backgroundColor: "white",
                        color: "#4B5563",
                        cursor: "pointer",
                        // appearance: "auto",
                        height: "45px",
                      }}
                    >
                      <option value="" disabled selected>
                        Select Category
                      </option>
                      {categoryData?.map((item, index) => (
                        <option value={item?.id} key={index}>
                          {item?.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Search Button */}
                <div
                  style={{
                    flex: "1 1 250px",
                    minWidth: "250px",
                    padding: "0 10px",
                    display: "flex",
                    alignItems: "flex-end",
                  }}
                >
                  <button
                    className="th-btn"
                    style={{
                      width: "100%",
                      height: "45px",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "16px",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    <i className="fa-light fa-search"></i>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FilterCard;
