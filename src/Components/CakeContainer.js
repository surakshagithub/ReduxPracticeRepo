import React from "react";
import { connect, useSelector } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  const userWhoAteCake = useSelector((store) => store.usersReducer.currentUser);
  return (
    <div>
      <h2>NO of cakes {props.noOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Now</button>
      <h2>Who ate the cake: {userWhoAteCake} </h2>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    noOfCakes: state.cakeReducers.noOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
