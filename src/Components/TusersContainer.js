import React , {useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchUsers } from '../redux/tusers/userSlice';

function TusersContainer() {
  const users=useSelector(state=>state.user.users)
  console.log(users)
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [])
  
  return (
    <>
   <h3>Fetching Users ....</h3>
        {
           users.length&&
             users.map((user,index)=>{
                return(
                    <div key={index}>
                    <li>{user.name}</li>
                    </div>
                )
                
            })
        }
    </>
  )
}

export default TusersContainer