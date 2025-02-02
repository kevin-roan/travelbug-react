import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ImagePopup = ({ image, onClose, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (image) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [image]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  if (!image) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transition: "opacity 0.3s ease, visibility 0.3s ease",
      }}
      onClick={handleClose}
    >
      <div
        style={{
          position: "relative",
          maxWidth: "90%",
          maxHeight: "90%",
          transform: isVisible
            ? "scale(1) translateY(0)"
            : "scale(0.9) translateY(20px)",
          opacity: isVisible ? 1 : 0,
          transition: "transform 0.3s ease, opacity 0.3s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.image || "/placeholder.svg"}
          alt={image.title}
          style={{
            width: "680px", // Fixed width
            height: "420px", // Fixed height
            objectFit: "cover", // Ensures the image covers the area, may crop
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        />
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "-50px",
            right: "0",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            color: "black",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          <X size={24} />
        </button>
        {["left", "right"].map((direction) => (
          <button
            key={direction}
            onClick={() => onNavigate(direction === "left" ? -1 : 1)}
            style={{
              position: "absolute",
              top: "50%",
              [direction]: "-50px",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              color: "black",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              transition: "background-color 0.3s ease, transform 0.3s ease",
            }}
          >
            {direction === "left" ? (
              <ChevronLeft size={24} />
            ) : (
              <ChevronRight size={24} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImagePopup;
