import { useState } from "react";
import cake1 from "./assets/cake1.jpg";
import cake2 from "./assets/cake2.jpg";
import cake3 from "./assets/cake3.jpg";

function ImageCarousel() {
  const images = [cake1, cake2, cake3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Image Carousel</h2>
      <img
        src={images[currentIndex]}
        alt="carousel"
        style={{
          width: "700px",
          height: "350px",
          borderRadius: "10px",
          objectFit: "cover",
        }}
      />
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={prevImage}
          style={{
            position: "absolute",
            top: "25%",
            left: "650px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          onClick={nextImage}
          style={{
            position: "absolute",
            top: "25%",
            right: "650px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "50%",
          }}
        >
          &#10095;
        </button>
      </div>
      <p>
        {currentIndex + 1}/{images.length}{" "}
      </p>
    </div>
  );
}
export default ImageCarousel;
