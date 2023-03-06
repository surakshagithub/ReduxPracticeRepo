import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
} from './userTypes';


//Defining initial state
const initialState={
    loading:false,
    users:[],
    error:''
}

// Defining reducers 

const userReducer=((state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:{
            return{
                ...state,
                loading:true
            }
        }

    
        case FETCH_USERS_SUCCESS:{
            return{
                ...state,
                users:action.payload || [],
                error:""
            }
        

    }

        case FETCH_USERS_FAILURE:{
            return{
                ...state,
                loading:false,
                users:[],
                error:action.payload
            }
        }
        default:return state;

    
    }
})

export default userReducer;