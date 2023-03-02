import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { buyIceCream } from '../redux';

function IceCreamContainer() {
      const noOfIceCream=useSelector(state=>state.iceCreamReducers.noOfIceCream);
    const dispatch=useDispatch()
  return (
    <div>
        <h2>No of IceCream {noOfIceCream} </h2>
        <button onClick={()=>dispatch(buyIceCream())}> Buy IceCream</button>
    </div>
  )
}

export default IceCreamContainer