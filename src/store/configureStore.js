import { createStore, combineReducers } from "redux";

import filtersReducer from "../reducers/filters";
import productsReducer from "../reducers/products";

export default () => {
  const store = createStore(
    combineReducers({
      products: productsReducer,
      cartProducts: [],
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
