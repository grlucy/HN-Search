const sortTypeReducer = (state = "Relevance", action) => {
  switch (action.type) {
    case "Date":
      state = "Date";
      return state;
    case "Relevance":
      state = "Relevance";
      return state;
    default:
      return state;
  }
};

export default sortTypeReducer;
