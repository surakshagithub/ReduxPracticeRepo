import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
} from './userTypes';

export const fetchUserRequest=(()=>{
    return {
        type:FETCH_USERS_REQUEST,
    }
})

export const fetchUserSuccess=((users)=>{
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
})

export const fetchUserFailure=((error)=>{
    return {
        type:FETCH_USERS_FAILURE,
        payload:error
    }
})

export const fetchUser=()=>{
    return function(dispatch){
        // console.log("calling fetch user dispatch")
        dispatch(fetchUserRequest());
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            const users=data;
            console.log(users)
            dispatch(fetchUserSuccess(users))
        }).catch(error => {
            dispatch(fetchUserFailure(error.message));
        })
    }
}
