import { POST_LOADING, GET_ALL_POSTS, GET_SINGLE_POST, GET_USER_POSTS, GET_FOLLOWING_POSTS, ADD_POST, DELETE_POST, LIKE, COMMENT, DELETE_COMMENT } from '../actions/types';

const initialState = {
    allPosts: [],
    followingPosts: [],
    userPosts: [],
    singlePost: null,
    loading: false
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_ALL_POSTS:
            return{
                ...state,
                allPosts: action.payload,
                loading: false
            }
        
        case GET_SINGLE_POST:
            return{
                ...state,
                singlePost: action.payload,
                loading: false
            }
        
        case GET_USER_POSTS:
            return{
                ...state,
                userPosts: action.payload,
                loading: false
            }

        case GET_FOLLOWING_POSTS:
            return{
                ...state,
                followingPosts: action.payload,
                loading: false
            }

        case ADD_POST:
            return{
                ...state,
                allPosts: [action.payload, ...state.allPosts]
            }

        case DELETE_POST:
            return{
                ...state,
                allPosts: state.allPosts.filter(post => post._id!==action.payload)
            }

        case LIKE:
            return{
                ...state,
            }

        case COMMENT:
            return{
                ...state,
                singlePost: action.payload
            }

        case DELETE_COMMENT:
            return{
                ...state,
                singlePost: action.payload
            }

        case POST_LOADING:
            return{
                ...state,
                loading: true
            }

        default:
            return state;
    }
}