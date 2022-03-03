// Actions
import { setError, setIsLoading } from ".";
// Axios
import axios from "axios";
// Utils
import { config } from "../../utils/config";

export const cartActions = {
  setCart: "SET_CART",
  addToCart: "SET_ADD_TO_CART",
};

export const setCart = (products) => ({
  type: cartActions.setCart,
  payload: products,
});

export const addToCart = (product) => ({
  type: cartActions.addToCart,
  payload: product,
});

// Thunks
export const getCartThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get("https://ecommerce-exercise-backend.herokuapp.com/cart/", config())
      .then(({ data }) => dispatch(setCart(data)))
      .catch(({ response }) => dispatch(setError(response.data)))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const addToCartThunk = (product) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .post(
        "https://ecommerce-exercise-backend.herokuapp.com/products/add_to_cart/",
        product,
        config()
      )
      .then(({ data }) => dispatch(addToCart(data)))
      .catch(({ response }) => dispatch(setError(response.data)))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const deleteProductCartThunk = (id) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .delete(
        `https://ecommerce-exercise-backend.herokuapp.com/cart/${id}/remove_item/`,
        config()
      )
      .then(() => dispatch(getCartThunk()))
      .catch(({ response }) => dispatch(setError(response.data)))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const changeQuantityProductCartThunk = (id, quantity) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .put(
        `https://ecommerce-exercise-backend.herokuapp.com/cart/${id}/change_quantity/`,
        quantity,
        config()
      )
      .then(() => dispatch(getCartThunk()))
      .catch(({ response }) => dispatch(setError(response.data)))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const checkoutThunk = (cart) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .post(
        `https://ecommerce-exercise-backend.herokuapp.com/cart/buy/`,
        cart,
        config()
      )
      .then(() => dispatch(setCart([])))
      .catch(({ response }) => dispatch(setError(response.data)))
      .finally(() => dispatch(setIsLoading(false)));
  };
};
