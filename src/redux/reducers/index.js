// Redux
import { combineReducers } from "redux";
// Reduces
import appReducer from "./app.reducer";
import cartReducer from "./cart.reducer";
import categoriesReducer from "./categories.reducer";
import productsReducer from "./products.reducer";

const rootReducer = combineReducers({
  app: appReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
});

export default rootReducer;
