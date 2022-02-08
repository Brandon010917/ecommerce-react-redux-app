//Types
import { actions } from "../types";

const INITAL_STATE = {
  productsList: [],
  productDetail: null,
  categories: [],
  cart: [],
  isLoading: false,
  error: null,
};

const reducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case actions.setProductsList:
      return {
        ...state,
        productsList: action.payload,
      };

    case actions.setProductDetail:
      return {
        ...state,
        productDetail: action.payload,
      };

    case actions.setCategories:
      return {
        ...state,
        categories: action.payload,
      };

    case actions.setIsLoading:
      return {
        ...state,
        isLoading: action.payload,
      };

    case actions.setError:
      return {
        ...state,
        error: action.payload,
      };

    case actions.setCart:
      return {
        ...state,
        cart: action.payload,
      };

    case actions.addToCart:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
