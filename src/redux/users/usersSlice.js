import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "UserSlice",
  initialState: {
    currentUser: "john doe",
  },
  reducers: {
    addCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },

    setCurrentUserAsTilak: (state) => {
      state.currentUser = "Hy Tilak";
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCurrentUser, setCurrentUserAsTilak } = usersSlice.actions;

export default usersSlice.reducer;
