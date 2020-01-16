const filtersReducerDefaultState = {
  text: "",
  sortBy: "name"
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_NAME":
      return { ...state, sortBy: "name" };
    case "SORT_BY_PRICE_ASC":
      return { ...state, sortBy: "priceASC" };
    case "SORT_BY_PRICE_DESC":
      return { ...state, sortBy: "priceDESC" };
    default:
      return state;
  }
};
