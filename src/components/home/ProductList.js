import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  const { products, onAdd } = props;
  return (
    <div className="row">
      {products &&
        products.map((product) => {
          return <Product key={product.id} product={product} onAdd={onAdd} />;
        })}
    </div>
  );
}
