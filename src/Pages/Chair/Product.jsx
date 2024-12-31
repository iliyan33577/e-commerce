import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addItem } from "../../Features/cart/cartSlice";
import Navbar from "../../Navbar/Navbar";

const url = "https://furniture-dummy-data-api.vercel.app/data/type/chair/";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { chairId } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${url}`);
        // Find the specific product using the chairId from params
        const selectedProduct = response.data.payload.find(
          (item) => item.id === chairId
        );

        if (selectedProduct) {
          setProduct(selectedProduct);
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
  }, [chairId]);

  // Handle Add to Cart - Modified to use the specific product
  const handleAdd = () => {
    if (product) {
      dispatch(addItem(product)); // Only dispatch the single product
      toast.success(`${product.name} added to cart!`);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>No product found</p>;

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap p-6 bg-gray-100">
        {/* Left Section: Image */}
        <div className="flex-shrink-0 md:w-1/2 w-full">
          <img
            src={product.img_link}
            alt={product.name}
            className="w-full h-auto max-w-md object-cover rounded-lg shadow-md mx-auto"
          />
        </div>

        {/* Right Section: Text and Buttons */}
        <div className="flex flex-col md:w-1/2 w-full p-6 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-lg text-gray-600">{product.description}</p>
          <h2 className="text-xl font-semibold text-gray-700">
            Price: PKR {product.price}
          </h2>
          <h2 className="text-lg text-gray-500">Type: {product.type}</h2>
          <button
            className="px-6 py-2 bg-orange-400 hover:bg-orange-600 text-white font-medium text-lg rounded-lg transition duration-300"
            onClick={handleAdd} // Modified to not pass product as parameter
          >
            Add To Cart
          </button>
          <ToastContainer />
          <button
            className="px-6 py-2 bg-orange-400 hover:bg-orange-600 text-white font-medium text-lg rounded-lg transition duration-300"
            onClick={() => navigate("/")}
          >
            Back to Product List
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
