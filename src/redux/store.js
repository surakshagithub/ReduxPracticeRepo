import cakeReducers from "./cake/cakeReducers";
import { configureStore } from "@reduxjs/toolkit";
import iceCreamReducers from "./iceCream/iceCreamReducers";
import usersReducer from "./users/usersSlice";
const store = configureStore({
  reducer: {
    cakeReducers: cakeReducers,
    iceCreamReducers: iceCreamReducers,
    usersReducer: usersReducer,
  },
});

export default store;
