// Actions
import { setError, setIsLoading } from ".";
// Axios
import axios from "axios";
// Utils
import { config } from "../../utils/config";

export const categoriesActions = {
  setCategories: "SET_PRODUCTS_CATEGORIES",
};

export const setCategories = (categories) => ({
  type: categoriesActions.setCategories,
  payload: categories,
});

// Thunks
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
