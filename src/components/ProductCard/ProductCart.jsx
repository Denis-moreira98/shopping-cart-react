import React from "react";

function ProductCart() {
   return (
      <section className="product-card">
         <img src="https://" alt="product" className="card__image" />
         <div className="card__infos">
            <h2 className="card__price">R$ 200.20</h2>
            <h2 className="card__title">Motorola</h2>
         </div>

         <button type="button" className="button__add-card">
            +
         </button>
      </section>
   );
}

export default ProductCart;
