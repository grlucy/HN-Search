const sortTypeReducer = (state = "Relevance", action) => {
  switch (action.type) {
    case "Date":
      return "Date";
    case "Relevance":
      return "Relevance";
    default:
      return state;
  }
};

export default sortTypeReducer;
