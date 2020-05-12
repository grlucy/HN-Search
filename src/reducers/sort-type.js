const sortTypeReducer = (state = "Relevance", action) => {
  switch (action.type) {
    case "Date":
      return "Date";
    default:
      return "Relevance";
  }
};

export default sortTypeReducer;
