import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
} from './userTypes';

export const fetchUserRequest=(()=>{
    return {
        type:FETCH_USERS_REQUEST
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