// import { createStore } from 'redux'
import cakeReducers from './cake/cakeReducers';
import { configureStore } from '@reduxjs/toolkit';
import iceCreamReducers from './iceCream/iceCreamReducers';

 const store = configureStore({
   reducer: {
      cakeReducers: cakeReducers,
      iceCreamReducers:iceCreamReducers
      
    },
   //  reducer: cakeReducers,
   //  reducer2:iceCreamReducers
   });


// const store=createStore(cakeReducers);

export default store;