import { createSlice } from "@reduxjs/toolkit";
import cakeSlice from "../tcake/cakeSlice";

let initialState={
    numOfIcecream:10
}

const iceCreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        orderded:(state)=>{
            state.numOfIcecream--
        },
        restocked:(state,action)=>{
            state.numOfIcecream += action.payload
        }

    },
    extraReducer:(builder)=>{
        builder.addCase(cakeSlice.orderded,state=>{
            state.numOfCake--
        })
    }
})
export default iceCreamSlice.reducer;
export const {orderded , restocked}=iceCreamSlice.actions;