import React from "react";

function AddedProducts(props) {
  const { products, onRemove, onAddQty, onSubstractQty } = props;
  return (
    <>
      {products.length &&
        products.map((product) => {
          return (
            <li key={product.id} className="collection-item avatar">
              <div className="item-img">
                <img
                  src={product.image}
                  width={300}
                  height={200}
                  alt={product.name}
                ></img>
              </div>

              <div className="item-desc">
                <span className="title">{product.name}</span>
                <p>
                  <b>Price: {product.price}$</b>
                </p>
                <p>
                  <b>Quantity: {product.quantity}</b>
                </p>
                <div className="add-remove">
                  <button onClick={()=>{onAddQty(product.id)}}>+</button>
                  <button onClick={()=>{onSubstractQty(product.id)}}>-</button>
                </div>
                <button className="waves-effect waves-light btn pink remove" onClick={()=>{onRemove(product.id)}}>
                  Remove
                </button>
              </div>
            </li>
          );
        })}
    </>
  );
}
export default AddedProducts;
