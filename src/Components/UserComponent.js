import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addCurrentUser } from "../redux/users/usersSlice";

export const UserComponent = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.usersReducer.currentUser);
  return (
    <div>
      <p>Curent UserName : {currentUser} </p>
      <p>User Count :</p>

      <button
        onClick={() => {
          console.log("clicked");
          dispatch(addCurrentUser("Tilak"));
        }}
      >
        {" "}
        Add Tilak As User
      </button>
      <button
        onClick={() => {
          console.log("clicked");
          dispatch(addCurrentUser("Surakshya"));
        }}
      >
        {" "}
        Add Surakshya As User
      </button>
      <button
        onClick={() => {
          console.log("clicked");
          dispatch(addCurrentUser("Kamal"));
        }}
      >
        {" "}
        Add Kamal As User
      </button>
    </div>
  );
};
