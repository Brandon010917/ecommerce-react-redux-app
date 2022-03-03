export const appActions = {
  setIsLoading: "SET_IS_LOADING",
  setError: "SET_ERROR",
};

export const setIsLoading = (isLoading) => ({
  type: appActions.setIsLoading,
  payload: isLoading,
});

export const setError = (error) => ({
  type: appActions.setError,
  payload: error,
});
