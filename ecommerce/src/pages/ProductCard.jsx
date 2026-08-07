import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="col-lg-3 col-sm-6 col-12 card">
      <img src={product.img} alt="" className="product-img" />
      <h1>{product.name}</h1>
      <p>Price : {product.price}</p>
      {
        product.category ? (<p>{product.category}</p>) : null
      }
    </div>
  );
};

export default ProductCard;
