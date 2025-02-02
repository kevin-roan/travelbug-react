const GalleryItem = ({ image, onClick }) => {
  const itemStyle = {
    width: "480px",
    height: "280px",
    overflow: "hidden",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div
      style={itemStyle}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.querySelector("img").style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.querySelector("img").style.transform = "scale(1)";
      }}
    >
      <img
        src={image.image || "/placeholder.svg"}
        alt={image.title}
        style={imageStyle}
      />
    </div>
  );
};

export default GalleryItem;
