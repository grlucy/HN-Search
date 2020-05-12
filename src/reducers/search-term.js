const searchTermReducer = (state = "", action) => {
  switch (action.type) {
    case "SEARCH":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default searchTermReducer;
