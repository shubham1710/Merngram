import { PROFILE_LOADING, GET_PROFILE, EDIT_PROFILE, FOLLOW } from '../actions/types';

const initialState = {
    profile: null,
    loading: false
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_PROFILE:
            return{
                ...state,
                profile: action.payload,
                loading: false
            }

        case EDIT_PROFILE:
            return{
                ...state,
                profile: action.payload,
                loading: false
            }

        case FOLLOW:
            return{
                ...state,
                profile: action.payload
            }

        case PROFILE_LOADING:
            return{
                ...state,
                loading: true
            }

        default:
            return state;
    }
}