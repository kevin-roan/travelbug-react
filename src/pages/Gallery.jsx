import { useEffect, useState } from "react";
import GalleryItem from "../components/GalleryItem";
import ImagePopup from "../components/ImagePopup";
import axios from "axios";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryData, setGalleryData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://iamanas.in/travel_bug/web_api/gallery`)
      .then((response) => {
        setGalleryData(response.data.data.gallery);
        console.log("Gallery data", response.data.data.gallery);
      })
      .catch((error) => {
        setError(error);
        console.log("Error occurred", error);
      });
  }, []);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = galleryData.findIndex(
      (item) => item.image === selectedImage.image,
    );
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = galleryData.length - 1;
    if (newIndex >= galleryData.length) newIndex = 0;
    setSelectedImage(galleryData[newIndex]);
  };

  return (
    <div className="gallery page">
      <div
        className="breadcumb-wrapper "
        data-bg-src="assets/img/bg/breadcumb-bg.jpg"
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Gallery</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="/#/">Home</a>
              </li>
              <li>Gallery</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="gallery">
        <div
          style={{
            padding: "2rem",
            backgroundColor: "#fff",
          }}
        >
          <div className="title-area text-center">
            <span
              className="poppins-item"
              style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: 500,
              }}
            >
              Moments from Our Journeys
            </span>
            <h2
              style={{
                fontSize: "50px",
                fontFamily: "Poppins",
                fontWeight: 700,
              }}
            >
              Latest Travel Highlights
            </h2>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            {galleryData.map((item, index) => (
              <GalleryItem
                key={index}
                image={item}
                onClick={() => openImage(item)}
              />
            ))}
          </div>
          {selectedImage && (
            <ImagePopup
              image={selectedImage}
              onClose={closeImage}
              onNavigate={navigateImage}
            />
          )}
        </div>
      </section>
    </div>
  );
}

export default Gallery;
