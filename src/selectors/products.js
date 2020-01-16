// get visible products

export default (products, { text, sortBy }) => {
  return products
    .filter(product => {
      return product.title.includes(text);
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "priceASC":
          return a.price - b.price;
        case "priceDESC":
          return b.price - a.price;
        case "name":
        default:
          return a - b;
      }
    });
};
