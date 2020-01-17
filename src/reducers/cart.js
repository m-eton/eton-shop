const cartReducerDefaultState = [];

export default (state = cartReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newState = state;
      const sameProduct = newState.find(product => product.id === action.id);
      const productIndex = newState.indexOf(sameProduct);
      if (productIndex >= 0) {
        newState[newState.indexOf(sameProduct)].counter++;
        return [...newState];
      }
      return [
        ...state,
        { id: action.id, name: action.title, counter: action.counter }
      ];
    // case "DELETE_FROM_CART":
    //   return { ...state, sortBy: "priceDESC" };
    // case "DELETE_ALL_FROM_CART":
    //   return [];
    // case "INCREMENT_ITEM":
    //   return { ...state, sortBy: "name" };
    // case "DECREMENT_ITEM":
    //   return { ...state, sortBy: "priceASC" };
    default:
      return state;
  }
};
