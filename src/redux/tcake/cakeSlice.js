import { createSlice } from "@reduxjs/toolkit";

let initialState={
    numOfCake:10
}

const cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers:{
        orderded:(state)=>{
            state.numOfCake--
        },
        restocked:(state,action)=>{
            state.numOfCake += action.payload
        }

    }
})
export default cakeSlice.reducer;
export const {orderded , restocked}=cakeSlice.actions;