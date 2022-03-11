import { cartActions } from "../actions";

const INITAL_STATE = [];

const cartReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case cartActions.setCart:
      return action.payload;

    case cartActions.addToCart:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};

export default cartReducer;
