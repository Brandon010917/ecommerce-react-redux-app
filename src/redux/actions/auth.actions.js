// Actions
import { setError, setIsLoading } from ".";
// Axios
import axios from "axios";
// Utils
import history from "../../utils/history";

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
