import React from "react";
import "./ProductCard.css";
const ProductCard = (props) => {
  const { titulo, precio, descripccion } = props;
  return (
    <div>
      <h2>{titulo}</h2>
      <h3>{precio}</h3>
      <button>{descripccion}</button>
    </div>
  );
};

export default ProductCard;
