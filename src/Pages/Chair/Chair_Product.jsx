import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

import { addItem } from "../../Features/cart/cartSlice";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PreviewIcon from "@mui/icons-material/Preview";

const url = "https://furniture-dummy-data-api.vercel.app/data/type/chair";

const Chair_Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(url);
        setProduct(response.data.payload);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetch();
  }, []);

  const handleAdd = (product) => {
    console.log("prooo", product);

    dispatch(addItem(product)); // Add product to cart
    toast.success(`added to cart!`); // Display toast notification
  };
  return (
    <>
      <div className="flex items-center justify-center h-96 bg-fixed bg-parallax bg-cover">
        <h1 className="text-5xl text-white uppercase">
          We offer a wide variety of chairs
        </h1>
      </div>
        <ToastContainer />
      <div className="flex items-start justify-around">
        {loading ? (
          <p>Loading.............</p>
        ) : (
          product.map((items) => (
            <div
              key={items.id}
              className="card flex flex-col items-center p-4 m-4 border-none rounded-lg shadow-lg transition-transform transform hover:scale-105"
              data-aos="zoom-in"
            >
              <h1 className="text-xl font-semibold mb-2">{items.name}</h1>
              <img
                src={items.img_link}
                alt={items.name}
                className="w-44 h-52 object-cover mb-2"
              />
              <div className="flex space-x-2">
                <button
                  className="p-2 bg-green-400 hover:bg-green-600 text-white transition duration-500 rounded-lg flex items-center"
                  onClick={() => handleAdd(items)} // Pass the correct product here
                >
                  <AddShoppingCartIcon className="mr-2" /> To Cart
                </button>
                <button
                  className="p-2 bg-orange-400 hover:bg-orange-600 text-white transition-colors duration-500 rounded-lg flex items-center"
                  onClick={() => navigate(`/chair_product/${items.id}`)}
                >
                  <PreviewIcon /> View
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Chair_Product;
