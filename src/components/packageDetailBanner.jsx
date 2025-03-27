import React from "react";
import { CalendarDays, MapPin, Euro, DollarSign } from "lucide-react";

const defaultImage = "/placeholder.svg?height=600&width=1200";

export default function TourPackageBanner({
  id,
  title,
  day,
  night,
  amount,
  thumbnail,
  startingPoint,
  endingPoint,
}) {
  const bannerStyle = {
    position: "relative",
    width: "100%",
    height: "70vh",
    minHeight: "400px",
    overflow: "hidden",
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    transition: "opacity 0.3s",
  };

  const contentStyle = {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "24px",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "white",
    marginBottom: "8px",
  };

  const infoContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    gap: "16px",
    color: "white",
    marginBottom: "16px",
  };

  const infoItemStyle = {
    display: "flex",
    alignItems: "center",
  };

  const iconStyle = {
    width: "20px",
    height: "20px",
    marginRight: "8px",
  };

  const buttonStyle = {
    backgroundColor: "white",
    color: "black",
    padding: "8px 24px",
    borderRadius: "9999px",
    fontWeight: "600",
    transition: "background-color 0.3s",
    cursor: "pointer",
    border: "none",
  };

  return (
    <div style={bannerStyle}>
      <img
        src={thumbnail}
        alt={title}
        style={{
          transition: "transform 0.3s",
          objectFit: "cover",
          height: "100%",
          width: "100%",
        }}
      />
      <div style={overlayStyle} />
      <div style={contentStyle} className="container">
        <div style={{ maxWidth: "56rem" }}>
          <h2 style={titleStyle}>{title}</h2>
          <div style={infoContainerStyle}>
            <div style={infoItemStyle}>
              <CalendarDays style={iconStyle} />
              <span style={{ fontSize: 20 }}>
                {day} Days / {night} Nights
              </span>
            </div>
            {/* 
<div style={infoItemStyle}>
              <MapPin style={iconStyle} />
              <span>
                {startingPoint} to {endingPoint}
              </span>
            </div>

              */}
            <div style={infoItemStyle}>
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <DollarSign style={iconStyle} />
                {amount}
              </span>
            </div>
          </div>
          <button
            style={buttonStyle}
            onMouseEnter={(e) => (
              (e.target.style.backgroundColor = "white"),
              (e.target.style.color = "black")
            )}
            onMouseLeave={(e) => (
              (e.target.style.backgroundColor = "#1DA8CB"),
              (e.target.style.color = "white")
            )}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
