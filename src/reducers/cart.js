const cartReducerDefaultState = [];

export default (state = cartReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, text: action.text };
    case "DELETE_FROM_CART":
      return { ...state, sortBy: "priceDESC" };
    case "DELETE_ALL_FROM_CART":
      return [];
    case "INCREMENT_ITEM":
      return { ...state, sortBy: "name" };
    case "DECREMENT_ITEM":
      return { ...state, sortBy: "priceASC" };
    default:
      return state;
  }
};
