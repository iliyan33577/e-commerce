import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../src/index.css";
import Navbar from "../Navbar/Navbar";
import Home from "./Home";
import Crousal from "../Pages/Crousal";
import Contact from "../Pages/Contact";
import Chair_Product from "./Chair/Chair_Product";
import Lamp_Product from "./Lamp/Lamp_Product";
import Vase_Product from "./Vase/Vase_Product";

const Index = () => {
  const { section } = useParams(); // Extract section from URL params

  // Scroll to the section whenever the URL changes
  useEffect(() => {
    if (section) {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [section]);

  return (
    <div>
      <header className="sticky top-0 z-50 shadow-md">
        <Navbar />
      </header>

      <section id="home">
        <Home />
      </section>

      <section id="crousal">
        <Crousal />
      </section>

      <section id="chair-product">
        <Chair_Product />
      </section>

      <section id="lamp-product">
        <Lamp_Product />
      </section>

      <section id="vase-product">
        <Vase_Product />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <section id="contact">{/* <Product /> */}</section>

      {/* Footer */}
      <footer className="p-2 bg-blue-300 text-center">
        <p>Chair's All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
