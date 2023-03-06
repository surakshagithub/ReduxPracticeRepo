import React , {useEffect} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { fetchUser } from '../redux';

function FetchingUsers() {
    const users=useSelector(state=>(state.usersReducer.users));
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    },[])
    
   
  return (
    <div>
        <h3>Fetching users</h3>
        {
           users.length&&
             users.map((user,index)=>{
                return(
                    <div key={index}>
                    <h3>{user.name}</h3>
                    </div>
                )
                
            })
        }


    </div>
  )
}

export default FetchingUsers