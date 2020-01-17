export const setStateProducts = products => ({
  type: "SET_STATE_PRODUCTS",
  products
});

export const addToCart = (product, counter = 0) => ({
  type: "ADD_TO_CART",
  product,
  counter
});
