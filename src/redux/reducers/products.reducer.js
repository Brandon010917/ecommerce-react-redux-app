import { productsActions } from "../actions";

const INITAL_STATE = {
  productsList: [],
  productDetail: null,
};

const productsReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case productsActions.setProductsList:
      return {
        ...state,
        productsList: action.payload,
      };

    case productsActions.setProductDetail:
      return {
        ...state,
        productDetail: action.payload,
      };

    case productsActions.resetProductsList:
      return {
        ...state,
        productsList: [],
      };

    case productsActions.resetProductDetail:
      return {
        ...state,
        productDetail: null,
      };

    default:
      return state;
  }
};

export default productsReducer;
