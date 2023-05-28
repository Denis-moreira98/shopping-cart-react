import React from "react";
import "./ProductCart.css";
import { BsCartPlusFill } from "react-icons/bs";
import propTypes from "prop-types";
import formatCurrency from "../../utils/formatCurrency";

function ProductCart({ data }) {
   //const [title, thumbnail, price] = data;
   return (
      <section className="product-card">
         <img
            src={data.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
            alt="product"
            className="card__image"
         />
         <div className="card__infos">
            <h2 className="card__price">{formatCurrency(data.price, "BRL")}</h2>
            <h2 className="card__title">{data.title}</h2>
         </div>

         <button type="button" className="button__add-cart">
            <BsCartPlusFill />
         </button>
      </section>
   );
}

export default ProductCart;

ProductCart.propTypes = {
   data: propTypes.shape({}),
}.isRequired;
