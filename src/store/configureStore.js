import { createStore, combineReducers } from "redux";

import filtersReducer from "../reducers/filters";
import productsReducer from "../reducers/products";
import cartReducer from "../reducers/cart";

export default () => {
  const store = createStore(
    combineReducers({
      products: productsReducer,
      cartProducts: cartReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  // store.subscribe(() => {
  //   const state = store.getState();
  //   console.log(state);
  // });
  return store;
};
