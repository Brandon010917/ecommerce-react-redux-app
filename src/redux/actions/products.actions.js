// Actions
import { setError, setIsLoading } from ".";
// Axios
import axios from "axios";
// Utils
import { config } from "../../utils/config";

export const productsActions = {
  setProductsList: "SET_PRODUCTS_LIST",
  setProductDetail: "SET_PRODUCT_DETAIL",
  resetProductsList: "RESET_PRODUCTS_LIST",
  resetProductDetail: "RESET_PRODUCT_DETAIL",
};

export const setProductsList = (products) => ({
  type: productsActions.setProductsList,
  payload: products,
});

export const setProductDetail = (product) => ({
  type: productsActions.setProductDetail,
  payload: product,
});

export const resetProductsList = () => ({
  type: productsActions.resetProductsList,
});

export const resetProductDetail = () => ({
  type: productsActions.resetProductDetail,
});

// Thunks
export const getProductsListThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(
        "https://ecommerce-exercise-backend.herokuapp.com/products/",
        config()
      )
      .then(({ data }) => dispatch(setProductsList(data)))
      .catch(({ response }) => dispatch(setError(response.data)))
      .finally(() =>
        setTimeout(() => {
          dispatch(setIsLoading(false));
        }, 10000)
      );
  };
};

export const getProductDetailThunk = (id) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(
        `https://ecommerce-exercise-backend.herokuapp.com/products/${id}/`,
        config()
      )
      .then(({ data }) => dispatch(setProductDetail(data)))
      .catch(({ response }) => dispatch(setError(response.data)))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const filterByNameThunk = (name) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(
        `https://ecommerce-exercise-backend.herokuapp.com/products/?name__icontains=${name}`,
        config()
      )
      .then(({ data }) => dispatch(setProductsList(data)))
      .catch(({ response }) => dispatch(setError(response.data)))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const filterByCategoryThunk = (id) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(
        `https://ecommerce-exercise-backend.herokuapp.com/products/?category=${id}`,
        config()
      )
      .then(({ data }) => dispatch(setProductsList(data)))
      .catch(({ response }) => dispatch(setError(response.data)))
      .finally(() => dispatch(setIsLoading(false)));
  };
};
