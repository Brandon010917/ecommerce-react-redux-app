// Actions
import { ordersActions } from "../actions";

const INITIAL_STATE = [];

const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ordersActions.setOrders:
      return action.payload;
    default:
      return state;
  }
};

export default ordersReducer;
