import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderded, restocked } from '../redux/ticeCream/iceCreamSlice';

function TicecreamContainer() {
    const numOfIcecream=useSelector(state=>state.iceCream.numOfIcecream);
    const dispatch=useDispatch()

  return (
    <div>
        <h2>Number of iceCream:{numOfIcecream} </h2>
        <button onClick={()=>dispatch(orderded())}>Orderded iceCream: </button>
        <button onClick={()=>dispatch(restocked(3))}>Restock iceCream: </button>
    </div>
  )
}

export default TicecreamContainer