import axios from "axios";
import React, { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PreviewIcon from "@mui/icons-material/Preview";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const url = "https://furniture-dummy-data-api.vercel.app/data/type/lamp";


const Lamp_Product = () => {
  const navigate = useNavigate()
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(url);
        // console.log(response.data.payload);
        
        setProduct(response.data.payload);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetch();
  }, []);
  

  return (
    <>
      <div className="flex items-center justify-center h-96 bg-fixed bg-parallax2 bg-cover">
        <h1 className="text-5xl text-orange-600 uppercase">
          We offer a wide variety of Lamp's
        </h1>
      </div>
      <div className="flex items-start justify-around">
        {loading ? (
          <p>Loading.............</p>
        ) : (
          product.map((items) => {
            return (
              <div data-aos="fade-in"
                className="card flex flex-col items-center p-4 m-4 border-none rounded-lg shadow-lg transition-transform transform hover:scale-105"
                key={items.id}
              >
                <h1 className="text-xl font-semibold mb-2">{items.name}</h1>
                <img
                  src={items.img_link}
                  alt="link"
                  className="w-44 h-52 object-cover mb-2"
                />
                <div className="flex space-x-2">
                  <button className="p-2 bg-green-400 hover:bg-green-600 text-white transition duration-500 rounded-lg flex items-center">
                    <AddShoppingCartIcon className="mr-2" /> To Cart
                  </button>

                  <button
                    className="p-2 bg-orange-400 hover:bg-orange-600 text-white transition-colors duration-500 rounded-lg flex items-center"
                    onClick={() => navigate(`/lampproduct/${items.id}`)}
                  >
                    <PreviewIcon /> View
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Lamp_Product;
