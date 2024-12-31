import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChairIcon from "@mui/icons-material/Chair";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();

  // increment in the cart icon
  const items = useSelector((state) => state.cart.value);
  const totalItems = items.length
   
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <div className="relative">
      <nav className="sticky top-0 z-20 flex items-center justify-between bg-green-300 p-4 shadow-md">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-2 ml-5">
          <ChairIcon className="text-green-700 text-2xl" />
          <h4 className="text-green-700 font-bold text-lg">Chair's</h4>
        </div>

        {/* Center Section: Links */}
        <div className="flex space-x-6 text-sm md:text-base">
          <Link
            to="/home"
            className="hover:underline text-green-700 font-medium"
          >
            Home
          </Link>
          <Link
            to="/crousal"
            className="hover:underline text-green-700 font-medium"
          >
            Crousal
          </Link>
          <Link
            to="/chair-product"
            className="hover:underline text-green-700 font-medium"
          >
            Chair
          </Link>
          <Link
            to="/lamp-product"
            className="hover:underline text-green-700 font-medium"
          >
            Lamp
          </Link>
          <Link
            to="/vase-product"
            className="hover:underline text-green-700 font-medium"
          >
            Vase
          </Link>
          <Link
            to="/contact"
            className="hover:underline text-green-700 font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Right Section: Cart Icon */}
        <div className="mr-5">
          <IconButton
            aria-label="cart"
            className="text-green-700"
            onClick={() => navigate("/cart")}
          >
            <StyledBadge badgeContent={totalItems} color="error">
              <ShoppingCartIcon className="text-green-700" />
            </StyledBadge>
          </IconButton>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
