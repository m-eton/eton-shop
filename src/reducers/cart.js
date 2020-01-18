const cartReducerDefaultState = [];

export default (state = cartReducerDefaultState, action) => {
  let newState, thisProduct, productIndex;
  switch (action.type) {
    case "ADD_TO_CART":
      newState = state;
      thisProduct = newState.find(obj => obj.product.id === action.product.id);
      productIndex = newState.indexOf(thisProduct);
      if (productIndex > -1) {
        newState[newState.indexOf(thisProduct)].counter++;
        return [...newState];
      }
      return [...state, { product: action.product, counter: action.counter }];

    case "REMOVE_FROM_CART":
      newState = state.filter(obj => obj.product.id !== action.id);
      return [...newState];
    case "REMOVE_ALL_FROM_CART":
      return [];
    case "COUNTER_PLUS":
      newState = state;
      thisProduct = newState.find(obj => obj.product.id === action.id);
      productIndex = newState.indexOf(thisProduct);
      newState[newState.indexOf(thisProduct)].counter++;
      return [...newState];

    case "COUNTER_MINUS":
      newState = state;
      thisProduct = newState.find(obj => obj.product.id === action.id);
      productIndex = newState.indexOf(thisProduct);
      if (newState[newState.indexOf(thisProduct)].counter > 1) {
        newState[newState.indexOf(thisProduct)].counter--;
        return [...newState];
      }
      return state;

    default:
      return state;
  }
};
