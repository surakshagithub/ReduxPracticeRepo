import  { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUser } from "../redux";

function UserContainer() {

    const {loading,users=[]} = useSelector((state) => ({...state.usersReducer}));
    const dispatch = useDispatch();
   
  useEffect(() => {
    console.log("calling fetch user")
    dispatch(fetchUser());
  },[]);

  if(loading){
    return <h3>Loading..</h3>
  }

 return(
    <div>
        
    {
        (users.length && users.map((user)=><h3>(user.name)</h3>))
    }
    </div>
 )
}

export default UserContainer;
