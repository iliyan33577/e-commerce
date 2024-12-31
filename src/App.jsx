import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Pages/Index";
import Product from "./Pages/Chair/Product"; // Ensure you import Product correctly
import Productlamp from "./Pages/Lamp/Productlamp";
import ParoductVase from "./Pages/Vase/ParoductVase";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:section" element={<Index />} />
        <Route path="/chair_product/:chairId" element={<Product />} />
        <Route path="/lampproduct/:lampId" element={<Productlamp />} />
        <Route path="/productvase/:vaseId" element={<ParoductVase />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
