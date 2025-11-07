import React from "react";
import Alert from "@mui/material/Alert";

function MainSlider({ sliderImages, current, prevSlide, nextSlide }) {
  return (
    <main className="main-section">
      <div
        className="image-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={sliderImages[current].url}
          alt={sliderImages[current].alt}
          className="campus-img"
          style={{
            width: "100%",
            maxWidth: 1200, // Increased width for a larger image
            height: "auto",
            borderRadius: 12,
            objectFit: "cover",
            boxShadow: "0 2px 12px rgba(23,70,162,0.12)",
            margin: "0 auto",
          }}
          draggable={false}
        />
        <div className="carousel-controls" style={{ marginTop: 16 }}>
          <button className="carousel-btn" onClick={prevSlide}>
            ←
          </button>
          <span
            className="carousel-indicator"
            style={{ margin: "0 12px" }}
          >
            {current + 1} / {sliderImages.length}
          </span>
          <button className="carousel-btn" onClick={nextSlide}>
            →
          </button>
        </div>
       
      </div>
    </main>
  );
}

export default MainSlider;
