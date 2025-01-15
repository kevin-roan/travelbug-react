import React from "react";
import { Clock } from "lucide-react";
import { MapPin } from "lucide-react";
import { UsersRound } from "lucide-react";

function Card() {
  return (
    <div style={styles.container}>
      <span style={styles.offerSpan}>
        <img src="./assets/img/thunder.png" style={{ height: 20 }} />
        19% OFF
      </span>
      <img
        src="https://iamanas.in/travel_bug/uploads/package_type_images/122024/cdbdce14f9306e8a7f2fe8b645552baf.jpg"
        alt="packageTypeImage"
        style={styles.cardImage}
      />
      <div style={styles.content}>
        <h4 style={styles.cardHeading}>Assunie Adventure Down Under</h4>
        <p style={styles.description}>
          Eu velit nulla tempor hac phasellus varius ultrices diam convallis.
          Urna rhoncus, dictumst ante ante et, tristique lectus est convallis.
        </p>
        <hr />
        <div style={styles.contentBottom}>
          <div>
            <div style={styles.span}>
              <span style={{ fontSize: "20px" }}>
                <MapPin style={styles.spanIcon} size={20} />
              </span>
              <span style={styles.spanText}>Autrailia</span>
            </div>
            <div style={styles.span}>
              <span style={{ fontSize: "20px" }}>
                <Clock style={styles.spanIcon} size={20} />
              </span>
              <span style={styles.spanText}>7 Days</span>
            </div>
            <div style={styles.span}>
              <span style={{ fontSize: "20px" }}>
                <UsersRound style={styles.spanIcon} size={20} />
              </span>
              <span style={styles.spanText}>1-5 People</span>
            </div>
          </div>
          <div style={styles.amountWrapper}>
            <div>
              <h3 style={styles.crossedPrice}>$ 3,100</h3>
              <h6 style={styles.packageTypePriceText}>$ 2,500</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "25rem",
    minHeight: "20rem",
    borderRadius: "3%",
    backgroundColor: "#F6F7F9",
    position: "relative", // Add this to make the badge position relative to the container
    overflow: "hidden",
  },
  description: {},
  span: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  spanText: {
    color: "#0a0a0a",
    fontWeight: "500",
  },
  spanIcon: {
    color: "#1B84ED",
  },

  cardImage: {
    objectFit: "cover", // Fixed typo: use objectFit
    backgroundSize: "cover",
    height: "17em",
    width: "100%",
    borderTopRightRadius: "3%",
    position: "relative",
    borderTopLeftRadius: "3%",
  },
  content: {
    padding: "1rem 2rem",
  },
  cardHeading: {
    fontSize: "20px",
    color: "#0a0a0a",
  },
  contentBottom: {
    display: "flex",
    marginTop: "16px",
    justifyContent: "space-between",
  },
  amountWrapper: {
    textAlign: "right",
    lineHeight: 1,
    display: "inline-block",
    alignSelf: "flex-end",
  },
  packageTypePriceText: {
    color: "#F66748",
    fontSize: "30px",
    margin: 0,
  },
  crossedPrice: {
    textDecoration: "line-through",
    color: "#000000",
    fontSize: "16px",
    lineHeight: 1,
    margin: 0,
  },
  offerSpan: {
    top: "10px",
    backgroundColor: "#F66748",
    padding: "0.2rem 1.4rem",
    borderRadius: 30,
    overflow: "hidden",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    position: "absolute",
    left: "10px", // Adjust position to make it stick to the top-left
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
  },
};

export default Card;
