import React, { useState, useEffect } from "react";
import "./Products.css";
import fetchProducts from "../../api/fetchProducts";
import ProductCart from "../ProductCard/ProductCart";

function Products() {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      fetchProducts("iphone").then((response) => {
         setProducts(response);
         //console.log(response);
      });
   }, []);

   return (
      <section className="products container">
         {products.map((product) => (
            <ProductCart key={product.id} data={product} />
         ))}
      </section>
   );
}

export default Products;
