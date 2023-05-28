import React from "react";
import "./CartButton.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

function CartButton() {
   return (
      <button className="cart-button">
         <AiOutlineShoppingCart />
         <span className="cart-status">1</span>
      </button>
   );
}

export default CartButton;
