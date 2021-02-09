import axios from 'axios';
import { returnErrors } from './errorActions';
import { LIKE, COMMENT, DELETE_COMMENT, FOLLOW, PROFILE_LOADING } from './types';

export const like = (userId, postId) => dispatch => {
    axios.post(`/api/like/${userId}/${postId}`)
        .then(res => dispatch({
            type: LIKE,
            payload: postId
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const comment = (userId, postId, cmnt) => dispatch => {
    axios.post(`/api/comment/${userId}/${postId}`, {cmnt})
        .then(res => dispatch({
            type: COMMENT,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const deleteComment = (postId, commentId) => dispatch => {
    axios.delete(`/api/comment/${postId}/${commentId}`)
        .then(res => dispatch({
            type: DELETE_COMMENT,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const follow = (followerId, followingId) => dispatch => {
    dispatch(setFollowLoading());
    axios.post(`/api/follow/${followerId}/${followingId}`)
        .then(res => dispatch({
            type: FOLLOW,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const setFollowLoading = () => {
    return{
        type: PROFILE_LOADING
    }
}