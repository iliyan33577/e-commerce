import React from "react";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";

// import { useNavigate, useParams } from "react-router-dom"; // Don't forget to import useNavigate

const Cart = () => {
  // const navigate = useNavigate();
  // const { cartId } = useParams();
  const items = useSelector((state) => state.cart);

  console.log("items in cart:", items);
  return (
    <>
      <Navbar />
      <p>{items.product.name}</p>
      {items.product.map((item) => {
        return (
          <div
            data-aos="fade-in"
            className="card flex items-center p-4 m-4 w-96 border-none rounded-lg shadow-lg transition-transform transform hover:scale-105"
            key={item.id}
          >
           
            <img
              src={item.img_link}
              alt="link"
              className="w-60 h-52 object-cover rounded-full mr-4 p-2"
            />

         
            <div className="flex flex-col">
          
              <h1 className="text-xl font-semibold mb-2">{item.name}</h1>

              <p className="text-lg font-medium mb-2">${item.price}</p>

              {/* Buttons */}
              <div className="flex space-x-2">
                {/* Increase button */}
                <button className="p-2 bg-blue-300 hover:bg-blue-600 text-white transition duration-500 rounded-lg">
                  +
                </button>

                {/* Decrease button */}
                <button className="p-2 bg-blue-300 hover:bg-blue-600 text-white transition duration-500 rounded-lg">
                  -
                </button>

                {/* Delete button */}
                <button className="p-2 bg-red-300 hover:bg-red-600 text-white transition duration-500 rounded-lg">
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cart;
