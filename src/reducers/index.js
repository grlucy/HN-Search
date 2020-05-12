import { combineReducers } from "redux";

import viewSearchReducer from "./view-search";
import sortTypeReducer from "./sort-type";

const allReducers = combineReducers({
  viewSearch: viewSearchReducer,
  sortType: sortTypeReducer,
});

export default allReducers;
