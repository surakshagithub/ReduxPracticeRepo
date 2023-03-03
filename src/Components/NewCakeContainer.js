import React,{useState} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { buyCake } from '../redux';

function NewCakeContainer() {
    const [number, setNumber] = useState(1)
    const noOfCakes=useSelector(state=>state.cakeReducers.noOfCakes);
    const dispatch=useDispatch()
  return (
    <div>
        <h2>No of Cakes {noOfCakes} </h2>
        <input type='text' value={number} onChange={(e=>setNumber(e.target.value)) }/>
        <button onClick={()=>dispatch(buyCake(number))}> Buy {number} Cakes</button>
    </div>
  )
}

export default NewCakeContainer