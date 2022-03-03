import { appActions } from "../actions";

const INITAL_STATE = {
  isLoading: false,
  error: null,
};

const appReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case appActions.setIsLoading:
      return {
        ...state,
        isLoading: action.payload,
      };

    case appActions.setError:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
