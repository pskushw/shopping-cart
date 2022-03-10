import React from "react";
import { connect } from "react-redux";
import { addQuantity, removeItem, subtractQuantity } from "../actions/cartActions";
import AddedProducts from "./AddedProducts";

function Cart(props) {
  const { addedProducts } = props;
  const onRemove = (id) => {
    props.removeItem(id);
  };
  const onAddQty = (id) => {
    props.addQuantity(id);
  };
  const onSubstractQty = (id) => {
    props.subtractQuantity(id);
  };
  return (
    <div className="container">
      <div className="cart">
        <h4>Order list:</h4>
        <AddedProducts
          products={addedProducts}
          onRemove={onRemove}
          onAddQty={onAddQty}
          onSubstractQty={onSubstractQty}
        />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    addedProducts: state.addedProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
