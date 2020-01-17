export const addToCart = (id, counter = 1) => ({
  type: "ADD_TO_CART",
  id,
  counter
});
