import { combineReducers } from "redux";

import viewSearchReducer from "./view-search";

const allReducers = combineReducers({
  viewSearch: viewSearchReducer,
});

export default allReducers;
