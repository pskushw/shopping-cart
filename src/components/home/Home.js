import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";
import ProductList from "./ProductList";

function Home(props) {
  const { products, addToCart } = props;
  const onAdd = (id) => {
    addToCart(id);
  };
  return (
    <div className="container">
      <h4 className="center">Products</h4>
      <ProductList products={products} onAdd={onAdd} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
