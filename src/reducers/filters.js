const filtersReducerDefaultState = {
  text: "",
  sortBy: "name"
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY":
      return { ...state, sortBy: action.sortBy };
    default:
      return state;
  }
};
