export const addToCart = (product, counter = 1) => ({
  type: "ADD_TO_CART",
  product,
  counter
});

export const removeFromCart = id => ({
  type: "REMOVE_FROM_CART",
  id
});

export const counterPlus = id => ({
  type: "COUNTER_PLUS",
  id
});

export const counterMinus = id => ({
  type: "COUNTER_MINUS",
  id
});

export const removeAllFromCart = () => ({
  type: "REMOVE_ALL_FROM_CART"
});
