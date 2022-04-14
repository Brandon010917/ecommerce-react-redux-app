// Actions
import { setError, setIsLoading } from ".";
// Axios
import axios from "axios";
// Utils
import { config } from "../../utils/config";

export const ordersActions = {
  setOrders: "SET_ORDERS"
};

export const setOrders = (orders) => ({
  type: ordersActions.setOrders,
  payload: orders
});

// Thunk
export const getOrdersThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .get("https://ecommerce-exercise-backend.herokuapp.com/orders/", config())
      .then(({ data }) => dispatch(setOrders(data)))
      .catch(({ response }) => dispatch(setError(response.data)))
      .finally(() => dispatch(setIsLoading(false)));
  };
};
