import axios from 'axios';
import { returnErrors } from './errorActions';
import { PROFILE_LOADING, GET_PROFILE, EDIT_PROFILE } from './types';

export const getProfile = (id) => dispatch => {
    dispatch(setProfileLoading());
    axios.get(`/api/profile/${id}`)
        .then(res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const editProfile = (id) => dispatch => {
    axios.post(`/api/profile/${id}`)
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