import { PROFILE_LOADING, GET_PROFILE, EDIT_PROFILE, FOLLOW, GET_CURR_PROFILE, CURR_PROFILE_LOADING } from '../actions/types';

const initialState = {
    currProfile: null,
    profile: null,
    loading: false,
    currLoading: false
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_PROFILE:
            return{
                ...state,
                profile: action.payload,
                loading: false
            }
        
        case GET_CURR_PROFILE:
            return{
                ...state,
                currProfile: action.payload,
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
                loading: false
            }

        case PROFILE_LOADING:
            return{
                ...state,
                loading: true
            }

        case CURR_PROFILE_LOADING:
            return{
                ...state,
                currLoading: true
            }

        default:
            return state;
    }
}