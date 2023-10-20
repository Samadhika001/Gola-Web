import { MiddlewareArray, configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import TravellerReducer from "../reducers/TravellerReducer";
const rootReducer = combineReducers({
  TravellerReducer,
});
const Store = configureStore({
  reducer: rootReducer,
  middleware: new MiddlewareArray(),
});

export default Store;
