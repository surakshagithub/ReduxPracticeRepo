// import { createStore } from 'redux'
import cakeReducers from './cake/cakeReducers';
import { configureStore } from '@reduxjs/toolkit';
import iceCreamReducers from './iceCream/iceCreamReducers';
import { composeWithDevTools } from '@redux-devtools/extension';
import userReducer from './user/userReducer';
import thunk from 'redux-thunk';


 const store = configureStore({
   reducer: {
      cakeReducers: cakeReducers,
      iceCreamReducers:iceCreamReducers,
      userReducer:userReducer
      
    },
    middleware:composeWithDevTools[thunk]
    // devTools:composeWithDevTools     
    
   //  reducer: cakeReducers,
   //  reducer2:iceCreamReducers
   });


// const store=createStore(cakeReducers);

export default store;