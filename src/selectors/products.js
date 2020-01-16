// get visible products

export default (products, { text, sortBy }) => {
  console.log("pre-selector products:", products);

  return products
    .filter(product => {
      return product.title.includes(text);
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a < b;
        case "priceASC":
          return a.price < b.price;
        case "priceDESC":
          return a.price > b.price;
        default:
          return a < b;
      }
    });
};
