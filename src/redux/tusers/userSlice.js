import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

let initialState={
    loading:false,
    users:[],
    error:""
}
export const fetchUsers=createAsyncThunk('user/fetchUsers',()=>{
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        return data;
        // console.log(users)
    })
})

const usersSlice=createSlice({
    name:'user',
    initialState,
    extraReducers:
    (builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading=true
        })
    
   
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false
            state.users=action.payload
            state.error=""
        })
    
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false
            state.users=[]
            state.error=action.payload
        })
    }

})



export default usersSlice.reducer;
