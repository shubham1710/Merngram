import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import postReducer from './postReducer';
import profileReducer from './profileReducer';

export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    profile: profileReducer,
    post: postReducer
});