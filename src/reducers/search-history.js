const searchHistoryReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_HISTORY":
      state.unshift(action.payload);
      return state;
    default:
      return state;
  }
};

export default searchHistoryReducer;
