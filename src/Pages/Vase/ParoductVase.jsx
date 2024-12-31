import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

const url = "https://furniture-dummy-data-api.vercel.app/data/type/vase";

const ProductVase = () => {
  const { vaseId } = useParams();
  const navigate = useNavigate();

  const [vase, setVase] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const selectedVase = response.data.payload.find(
          (vase) => vase.id === vaseId
        );
        setVase(selectedVase || null);
        if (!selectedVase) setError("No vase found");
      } catch {
        setError("An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [vaseId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    vase && (
      <>
        <Navbar />
        <div className="flex items-center justify-between flex-wrap md:flex-nowrap p-6 bg-gray-100">
          <div className="flex-shrink-0 md:w-1/2 w-full">
            <img
              src={vase.img_link}
              alt={vase.name}
              className="w-full h-auto max-w-md object-cover rounded-lg shadow-md mx-auto"
            />
          </div>
          <div className="flex flex-col md:w-1/2 w-full p-6 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{vase.name}</h1>
            <p className="text-lg text-gray-600">{vase.description}</p>
            <h2 className="text-xl font-semibold text-gray-700">
              Price: PKR {vase.price}
            </h2>
            <h2 className="text-lg text-gray-500">Type: {vase.type}</h2>
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
    )
  );
};

export default ProductVase;
