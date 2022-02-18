//Types
import { actions } from "../types";

//Config
import { config } from "../../utils/config";

//Axios
import axios from "axios";
import history from "../../utils/history";

//Actions
export const setProductsList = (products) => ({
  type: actions.setProductsList,
  payload: products,
});

export const setProductDetail = (product) => ({
  type: actions.setProductDetail,
  payload: product,
});

export const setCategories = (categories) => ({
  type: actions.setCategories,
  payload: categories,
});

export const setCart = (products) => ({
  type: actions.setCart,
  payload: products,
});

export const addToCart = (product) => ({
  type: actions.addToCart,
  payload: product,
});

export const setIsLoading = (isLoading) => ({
  type: actions.setIsLoading,
  payload: isLoading,
});

export const setError = (error) => ({
  type: actions.setError,
  payload: error,
});

//Thunks
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

export const getCategoriesThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get(
        "https://ecommerce-exercise-backend.herokuapp.com/categories/",
        config()
      )
      .then(({ data }) => dispatch(setCategories(data)))
      .catch(({ response }) => dispatch(setError(response.data)))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

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

export const signInUserThunk = (user) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .post("https://ecommerce-exercise-backend.herokuapp.com/login/", user)
      .then(({ data }) => {
        localStorage.setItem("token", data.access);
        history.replace("/");
        dispatch(setError(null));
      })
      .catch(({ response }) => dispatch(setError(response.data)))
      .finally(() => dispatch(setIsLoading(false)));
  };
};

export const signUpUserThunk = (user) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .post("https://ecommerce-exercise-backend.herokuapp.com/users/", user)
      .then(() => {
        history.replace("/signin");
        dispatch(setError(null));
      })
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
