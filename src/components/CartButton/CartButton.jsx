import React from "react";
import "./CartButton.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import AppContext from "../../context/AppContext";
import { useContext } from "react";

function CartButton() {
   const { cartItems, isCartVisible, setIsCartVisible } =
      useContext(AppContext);

   return (
      <button
         onClick={() => setIsCartVisible(!isCartVisible)}
         className="cart-button"
      >
         <AiOutlineShoppingCart />
         {cartItems.length > 0 && (
            <span className="cart-status">{cartItems.length}</span>
         )}
      </button>
   );
}

export default CartButton;
