const searchTermReducer = (state = "Redux", action) => {
  switch (action.type) {
    case "SEARCH":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default searchTermReducer;
