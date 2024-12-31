import React, { useEffect, useState } from "react";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

const Carousel = () => {
  const images = [
    "/Images/img2.webp",
    "/Images/img3.webp",
    "/Images/img4.jpg",
    "/Images/img5.jpg",
    "/Images/img6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-around text-black text-xl sm:text-2xl md:text-xl font-bold p-4 bg-blue-100 gap-2">
      {/* Left Text Section */}
      <div className="text-start lg:text-left text-black ml-8 p-6  lg:w-1/3 max-w-md">
        <h1>
          We deal in all kinds of furniture
        </h1>
      </div>

      {/* Carousel Section */}
      <div className="flex flex-col items-center w-full lg:w-2/3 md:w-1/3  p-2">
        <h1 className="text-2xl font-bold mb-6">Features</h1>
        <div className="relative w-full max-w-lg">
          {/* Carousel Wrapper */}
          <div className="relative h-40 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="block  h-full w-lvw"
            />
          </div>

          {/* Controls */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md"
            onClick={handlePrev}
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md"
            onClick={handleNext}
          >
            &#10095;
          </button>
        </div>
      </div>

      <div className="flex flex-col items-start text-wrap lg:text-right text-black m-2 w-full lg:w-1/2 max-w-md">
        <div className="flex gap-2 items-center">
          <LoyaltyIcon />
          <h1>Comfortable and Stylish Chairs</h1>
        </div>
        <br />
        <div className="flex gap-2 items-center">
          <LoyaltyIcon />
          <h1>Choose from tons of designs</h1>
        </div>
        <br />
        <div className="flex gap-2 items-center">
          <LoyaltyIcon />
          <h1>Signature your sitting in style</h1>
        </div>
        <br />
        <div className="flex gap-2 items-center">
          <LoyaltyIcon />
          <h1>Add colors to your life</h1>
        </div>
        </div>
    </div>
  );
};

export default Carousel;
