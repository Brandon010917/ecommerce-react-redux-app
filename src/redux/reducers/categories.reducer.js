import { categoriesActions } from "../actions";

const INITAL_STATE = [];

const categoriesReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case categoriesActions.setCategories:
      return action.payload;

    default:
      return state;
  }
};

export default categoriesReducer;
