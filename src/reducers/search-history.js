const searchHistoryReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_HISTORY":
      let newArr = state.slice();
      newArr.unshift(action.payload);
      return newArr;
    default:
      return state;
  }
};

export default searchHistoryReducer;
