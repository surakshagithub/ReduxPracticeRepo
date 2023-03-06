// import cakeReducers from "./cake/cakeReducers";
// import { configureStore } from "@reduxjs/toolkit";
// import iceCreamReducers from "./iceCream/iceCreamReducers";
// import usersReducer from "./user/userReducer";
// import thunk from "redux-thunk";
// const store = configureStore({
//   reducer: {
//     cakeReducers: cakeReducers,
//     iceCreamReducers: iceCreamReducers,
//     usersReducer: usersReducer,
    
//   },
//   middleware: [thunk],  

// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import cakeReducers from "./tcake/cakeSlice";
import iceCreamReducers from "./ticeCream/iceCreamSlice";
import usersReducer from "./tusers/userSlice";

const store = configureStore({
    reducer: {
      cake:cakeReducers,
      iceCream:iceCreamReducers,
      user:usersReducer
    }
  });
  
  export default store;
