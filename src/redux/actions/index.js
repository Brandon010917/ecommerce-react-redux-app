//Types
import { actions } from "../types";

//Config
import { config } from "../../utils/config";

//Axios
import axios from "axios";

//Actions
export const setProductsList = (products) => ({
  type: actions.setProductsList,
  payload: products,
});

export const setIsLoading = (isLoading) => ({
  type: actions.setIsLoading,
  payload: isLoading,
});

export const setError = (error) => ({
  type: actions.setError,
  payload: error,
});

export const setCategories = (categories) => ({
  type: actions.setCategories,
  payload: categories,
});

//ThunkS
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
