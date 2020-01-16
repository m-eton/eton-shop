export const sortByName = () => ({
  type: "SORT_BY_NAME"
});

export const sortByPriceAsc = () => ({
  type: "SORT_BY_PRICE_ASC"
});

export const sortByPriceDesc = () => ({
  type: "SORT_BY_PRICE_DESC"
});

export const sortByText = text => ({
  type: "SORT_BY_TEXT",
  text
});
