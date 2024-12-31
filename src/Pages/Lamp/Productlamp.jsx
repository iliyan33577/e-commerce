import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

const url = "https://furniture-dummy-data-api.vercel.app/data/type/lamp";

const Productlamp = () => {
  const { lampId } = useParams();
  const [lamp, setLamp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate =useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(url);

        // Use find to get the specific product by lampId
        const selectedProduct = response.data.payload.find(
          (Productlamp) => Productlamp.id ===(lampId)
        );

        if (selectedProduct) {
          setLamp(selectedProduct); // Set the specific product
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError("An error occurred while fetching the product.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [lampId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return lamp ? (
    <>
      <Navbar />
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap p-6 bg-gray-100">
        <div className="flex-shrink-0 md:w-1/2 w-full">
          <img
            src={lamp.img_link}
            alt="chair"
            className="w-full h-auto max-w-md object-cover rounded-lg shadow-md mx-auto"
          />
        </div>

        {/* Right Section: Text and Buttons */}
        <div className="flex flex-col md:w-1/2 w-full p-6 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{lamp.name}</h1>
          <p className="text-lg text-gray-600">{lamp.description}</p>
          <h2 className="text-xl font-semibold text-gray-700">
            Price: PKR {lamp.price}
          </h2>
          <h2 className="text-lg text-gray-500">Type: {lamp.type}</h2>
          <button
            className="px-6 py-2 bg-orange-400 hover:bg-orange-600 text-white font-medium text-lg rounded-lg transition duration-300"
            onClick={() => navigate("/")}
          >
            Add To Cart
          </button>
          <button
            className="px-6 py-2 bg-orange-400 hover:bg-orange-600 text-white font-medium text-lg rounded-lg transition duration-300"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </>
  ) : (
    <p>No data available.</p>
  );
};

export default Productlamp;
