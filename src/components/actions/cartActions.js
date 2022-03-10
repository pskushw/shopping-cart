import { ADD_QUANTITY, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY } from "./constant";

//add cart action
export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};

export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};

export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};
