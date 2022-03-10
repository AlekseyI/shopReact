import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  product: productReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;