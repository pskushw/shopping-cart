import data from "../../data";
import { ADD_QUANTITY, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY } from "../actions/constant";

const initState = {
  products: data.products,
  addedProducts: [],
  total: 0,
};

const cartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    const addedProduct = state.products.find((x) => x.id === action.id);
    const exist = state.addedProducts.find((x) => x.id === action.id);
    if (exist) {
      let updatedItems = state.addedProducts.map(x => x.id === action.id ? {...exist, quantity: exist.quantity + 1 }:x )
      return {
        ...state,
        addedProducts: updatedItems,
        total: state.total + addedProduct.price,
      };
    } else {
      return {
        ...state,
        addedProducts: [...state.addedProducts, {...addedProduct, quantity:1}],
        total: state.total + addedProduct.price,
      };
    }
  } else if ( action.type === REMOVE_ITEM ) {
    const removedProduct = state.addedProducts.find((x) => x.id === action.id);
    let items = state.addedProducts.filter(x => x.id !== removedProduct.id);
    return {
      ...state,
      addedProducts: items,
      total: state.total - (removedProduct.price * removedProduct.quantity)
    };
  } else if ( action.type === ADD_QUANTITY ) {
      let addedProduct = state.products.find(x => x.id === action.id);
      return {
        ...state,
        addedProducts: [...state.addedProducts, {...addedProduct, quantity: addedProduct.quantity + 1}],
        total: state.total + addedProduct.price
      }
  } else if ( action.type === SUB_QUANTITY ) {
    let removedProduct = state.addedProducts.find(x => x.id === action.id);
    if(removedProduct.quantity === 1) {
      let items = state.addedProducts.filter(x => x.id !== removedProduct.id);
      return {
        ...state,
        addedProducts: items,
        total: state.total - removedProduct.price
      }
    } else {
      let updatedItems = state.addedProducts.map(x => x.id === action.id ? {...removedProduct, quantity: removedProduct.quantity - 1 }:x )
      return {
        ...state,
        addedProducts: updatedItems,
        total: state.total - removedProduct.price
      }
    }
  }
  return state;
};

export default cartReducer
