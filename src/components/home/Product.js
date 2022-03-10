import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={product.image}
          width={300}
          height={200}
          alt={product.name}
        ></img>
        <span className="card-title">{product.name}</span>
      </div>
      <div className="card-content">
        <div>${product.price}</div>
        <button className="waves-effect waves-light btn pink" onClick={() => onAdd(product.id)}>Add To Cart</button>
      </div>
    </div>
  );
}
