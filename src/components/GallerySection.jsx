import React from "react";

export function GallerySection({ title, heading, images }) {
  return (
    <div className="gallery-area ">
      <div className="container th-container">
        <div className="title-area text-center">
          <span
            className="poppins-item"
            style={{
              fontFamily: "Poppins",
              marginTop: "90px",
            }}
          >
            {title}
          </span>
          <h2 className="libre-font-item">{heading}</h2>
        </div>
        <div className="row gy-10 gx-10 justify-content-center align-items-center">
          <div className="col-md-6 col-lg-2">
            <div className="gallery-card">
              <div className="box-img global-img">
                <a href={images[0]} className="popup-image">
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus"></i>
                  </div>
                  <img src={images[1].image} alt="gallery image" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="gallery-card">
              <div className="box-img global-img">
                <a
                  href={
                    homeData && homeData.gallery
                      ? homeData.gallery[1].image
                      : ""
                  }
                  className="popup-image"
                >
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus"></i>
                  </div>
                  <img
                    src={
                      homeData && homeData.gallery
                        ? homeData.gallery[1].image
                        : ""
                    }
                    alt="gallery image"
                  />
                </a>
              </div>
            </div>
            <div className="gallery-card">
              <div className="box-img global-img">
                <a
                  href={
                    homeData && homeData.gallery
                      ? homeData.gallery[2].image
                      : ""
                  }
                  className="popup-image"
                >
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus"></i>
                  </div>
                  <img
                    src={
                      homeData && homeData.gallery
                        ? homeData.gallery[2].image
                        : ""
                    }
                    alt="gallery image"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="gallery-card">
              <div className="box-img global-img">
                <a
                  href={
                    homeData && homeData.gallery
                      ? homeData.gallery[3].image
                      : ""
                  }
                  className="popup-image"
                >
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus"></i>
                  </div>
                  <img
                    src={
                      homeData && homeData.gallery
                        ? homeData.gallery[3].image
                        : ""
                    }
                    alt="gallery image"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="gallery-card">
              <div className="box-img global-img">
                <a
                  href={
                    homeData && homeData.gallery
                      ? homeData.gallery[4].image
                      : ""
                  }
                  className="popup-image"
                >
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus"></i>
                  </div>
                  <img
                    src={
                      homeData && homeData.gallery
                        ? homeData.gallery[4].image
                        : ""
                    }
                    alt="gallery image"
                  />
                </a>
              </div>
            </div>
            <div className="gallery-card">
              <div className="box-img global-img">
                <a
                  href={
                    homeData && homeData.gallery
                      ? homeData.gallery[6].image
                      : ""
                  }
                  className="popup-image"
                >
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus"></i>
                  </div>
                  <img
                    src={
                      homeData && homeData.gallery
                        ? homeData.gallery[6].image
                        : ""
                    }
                    alt="gallery image"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="gallery-card">
              <div className="box-img global-img">
                <a
                  href={
                    homeData && homeData.gallery
                      ? homeData.gallery[2].image
                      : ""
                  }
                  className="popup-image"
                >
                  <div className="icon-btn">
                    <i className="fal fa-magnifying-glass-plus"></i>
                  </div>
                  <img
                    src={
                      homeData && homeData.gallery
                        ? homeData.gallery[2].image
                        : ""
                    }
                    alt="gallery image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="shape-mockup  d-none d-xl-block"
        data-top="-25%"
        data-left="0%"
      >
        <img src="assets/img/shape/line.png" alt="shape" />
      </div>
      <div
        className="shape-mockup movingX d-none d-xl-block"
        data-top="30%"
        data-left="3%"
      >
        <img
          className="gmovingX"
          src="assets/img/shape/shape_4.png"
          alt="shape"
        />
      </div>
    </div>
  );
}

