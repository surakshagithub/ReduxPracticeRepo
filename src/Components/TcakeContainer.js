import React , {useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { orderded,restocked } from '../redux/tcake/cakeSlice';

function TcakeContainer() {
  const [value, setValue] = useState(1)
    const numOfCake=useSelector(state=>state.cake.numOfCake);
    const dispatch=useDispatch();
  return (
    <div>
        <h2>Number of Cake: {numOfCake} </h2>
        <button onClick={()=>dispatch(orderded())}>Orderded Cake: </button><br></br>
        <input type='number' value={value} onChange={(e)=>setValue(parseInt(e.target.value))}></input>
        <button onClick={()=>dispatch(restocked(value))}>Restock Cake: </button>
    </div>
  )
}

export default TcakeContainer;