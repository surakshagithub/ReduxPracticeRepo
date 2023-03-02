import React from 'react';
import { connect } from 'react-redux';
import {buyCake} from '../redux';


function CakeContainer(props) {
  return (
    <div>
        <h2>NO of cakes {props.noOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Now</button>
    </div>
  )
}
const mapStateToProps=(state)=>{
    return{
        noOfCakes:state.cakeReducers.noOfCakes
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer)