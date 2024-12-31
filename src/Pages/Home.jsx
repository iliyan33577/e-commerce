import React, { useEffect } from "react";
import mainimg from "/Images/main.png";
import bulb from "/Images/bulb.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: false, });
  }, []);

  return (
    <div className="flex items-center justify-between gap-4 bg-gray-100 p-6">
      {/* Wrapper with padding-top to ensure content starts below the navbar */}
      <div
        className="relative lg:w-1/3 md:w-[40%] h-screen inset-0 flex items-center justify-start p-10 z-10"
        data-aos="fade-in"
      >
        {/* Grouped Blobs and Image */}
        <div className="relative">
          {/* Animated Shape Layers */}
          <div>
            <div
              className="bg-teal-300 w-full opacity-40 animate-spin-slow absolute"
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "49% 51% 63% 37% / 62% 53% 47% 38%",
              }}
            ></div>
          </div>
          <div>
            <div
              className="bg-teal-400 opacity-40 animate-spin-mid absolute"
              style={{
                width: "350px",
                height: "350px",
                borderRadius: "49% 51% 63% 37% / 62% 53% 47% 38%",
              }}
            ></div>
          </div>
          <div>
            <div
              className="bg-teal-500 opacity-40 animate-spin-fast absolute"
              style={{
                width: "400px",
                height: "400px",
                borderRadius: "49% 51% 63% 37% / 62% 53% 47% 38%",
              }}
            ></div>
          </div>

          {/* Main Image */}
          <div>
            <img
              src={mainimg}
              alt="mainimg"
              style={{
                width: "22rem",
                position: "relative",
                zIndex: "10",
              }}
            />
          </div>
        </div>
      </div>

      {/* Text and Button Section */}
      <div className="relative flex md:w-[60%] lg:w-1/2 items-center justify-center h-full text-center z-10">
        <div >
          <img data-aos="zoom-in"
            style={{
              width: "240px",
              position: "relative",
              bottom: "140px",
              left: "350px",
            }}
            src={bulb}
            alt="bulb"
            className="text-yellow-400"
          />
          <h1
            data-aos="fade-up"
            className="text-gray-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            Sit In <span className="text-rose-500">Style...</span>
          </h1>
          <p
            data-aos="fade-in"
            className="text-gray-500 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8"
          >
            We design stylish, durable, and ergonomic chairs, prioritizing
            comfort, quality, and sustainable craftsmanship for all.
          </p>
          <button
            data-aos="zoom-in"
            className="px-8 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
