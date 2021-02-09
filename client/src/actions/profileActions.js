import axios from 'axios';
import { returnErrors } from './errorActions';
import { PROFILE_LOADING, GET_PROFILE, EDIT_PROFILE, GET_CURR_PROFILE, CURR_PROFILE_LOADING } from './types';

export const getProfile = (id) => dispatch => {
    dispatch(setProfileLoading());
    axios.get(`/api/profile/${id}`)
        .then(res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getCurrentProfile = (id) => dispatch => {
    dispatch(setCurrLoading());
    axios.get(`/api/profile/${id}`)
        .then(res => dispatch({
            type: GET_CURR_PROFILE,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const editProfile = (id, profile) => dispatch => {
    axios.put(`/api/profile/${id}`, profile)
        .then(res => dispatch({
            type: EDIT_PROFILE,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const setProfileLoading = () => {
    return{
        type: PROFILE_LOADING
    }
}

export const setCurrLoading = () => {
    return{
        type: CURR_PROFILE_LOADING
    }
}
