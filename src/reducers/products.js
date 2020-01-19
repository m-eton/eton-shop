let productsReducerDefaultState = [];

export default (state = productsReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_STATE_PRODUCTS":
      return (state = action.products);
    default:
      return state;
  }
};
