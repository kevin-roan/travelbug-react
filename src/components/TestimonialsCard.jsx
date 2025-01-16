import React from "react";

const TestimonialsCard = ({ index, review, author }) => {
  return (
    <SwiperSlide key={index}>
      <div
        className="testi-card"
        style={{
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          margin: "20px",
          minHeight: "16rem",
        }}
      >
        {/* Profile Section */}
        <div
          className="testi-card_wrapper"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <div
            className="testi-card_avater"
            style={{
              marginRight: "15px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <img
              src="assets/img/testimonial/testi_1_1.jpg"
              alt="testimonial"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <div>
              <h3
                className="box-title"
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  margin: 0,
                }}
              >
                {review.author}
              </h3>
              <span
                className="testi-card_desig"
                style={{ fontSize: "14px", color: "#999" }}
              >
                Traveller
              </span>
            </div>
          </div>
        </div>
        {/* Review Stars */}
        <div
          className="testi-card_review"
          style={{ marginBottom: "10px", color: "#FFD700" }}
        >
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <i key={i} className="fa-solid fa-star"></i>
            ))}
        </div>

        {/* Review Text */}
        <p
          className="testi-card_text"
          style={{
            fontSize: "14px",
            color: "#666",
            lineHeight: "1.6",
            marginBottom: "15px",
          }}
        >
          {review.review}
        </p>

        {/* Quote Icon */}
        <div className="testi-card-quote" style={{ textAlign: "center" }}>
          <img
            src="assets/img/icon/testi-quote.svg"
            alt="quote"
            style={{ width: "30px", opacity: "0.8" }}
          />
        </div>
      </div>
    </SwiperSlide>
  );
};

export default TestimonialsCard;
