import React, { useContext } from "react";
import "./ProductCart.css";
import { BsCartPlusFill } from "react-icons/bs";
import propTypes from "prop-types";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";

function ProductCart({ data }) {
   const { title, thumbnail, price } = data;
   const { cartItems, setCartItems } = useContext(AppContext);

   const handleAddCart = () => setCartItems([...cartItems, data]);

   return (
      <section className="product-card">
         <img
            src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
            alt="product"
            className="card__image"
         />
         <div className="card__infos">
            <h2 className="card__price">{formatCurrency(price, "BRL")}</h2>
            <h2 className="card__title">{title}</h2>
         </div>

         <button
            type="button"
            className="button__add-cart"
            onClick={handleAddCart}
         >
            <BsCartPlusFill />
         </button>
      </section>
   );
}

export default ProductCart;

ProductCart.propTypes = {
   data: propTypes.shape({}),
}.isRequired;
