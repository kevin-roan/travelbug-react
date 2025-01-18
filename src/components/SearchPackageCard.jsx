import { useNavigate } from "react-router-dom";

function SearchPackageCard({ destinations }) {
  const navigate = useNavigate();
  return (
    <div className="booking-sec" style={{ padding: "20px 0" }}>
      <div
        className="container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 15px",
          position: "relative",
          zIndex: 10,
          top: "-100px",
        }}
      >
        <form
          action="mail"
          method="POST"
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
                    name="subject"
                    id="subject"
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
                    {destinations?.map((destination, idx) => (
                      <option value={destination.id} key={idx}>
                        {destination.title}
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
                    name="Adventure"
                    id="Adventure"
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
                    type="number"
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
                    <option value="Superior">Superior</option>
                    <option value="Deluxe">Deluxe</option>
                    <option value="Heritage">Heritage</option>
                    <option value="Luxury">Luxury</option>
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
                  onClick={() => navigate("/search")}
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
  );
}

export default SearchPackageCard;
