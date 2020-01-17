export const addToCart = (product, counter = 1) => ({
  type: "ADD_TO_CART",
  product,
  counter
});
