export const addToCart = (id, title, counter = 1) => ({
  type: "ADD_TO_CART",
  id,
  title,
  counter
});
