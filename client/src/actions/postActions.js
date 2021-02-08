import axios from 'axios';
import { returnErrors } from './errorActions';
import { POST_LOADING, GET_ALL_POSTS, GET_SINGLE_POST, GET_USER_POSTS, GET_FOLLOWING_POSTS, ADD_POST, DELETE_POST } from './types';

export const getAllPosts = () => dispatch => {
    dispatch(setPostLoading());
    axios.get('/api/explore')
        .then(res => dispatch({
            type: GET_ALL_POSTS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getSinglePost = (id) => dispatch => {
    dispatch(setPostLoading());
    axios.get(`/api/post/${id}`)
        .then(res => dispatch({
            type: GET_SINGLE_POST,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getUserPosts = (userId) => dispatch => {
    dispatch(setPostLoading());
    axios.get(`/api/posts/${userId}`)
        .then(res => dispatch({
            type: GET_USER_POSTS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getFollowingPosts = (userId) => dispatch => {
    dispatch(setPostLoading());
    axios.get(`/api/feed/${userId}`)
        .then(res => dispatch({
            type: GET_FOLLOWING_POSTS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const addPost = (post) => dispatch => {
    axios.post('/api/post', post)
        .then(res => dispatch({
            type: ADD_POST,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const deletePost = (id) => dispatch => {
    axios.delete(`/api/post/${id}`)
        .then(res => dispatch({
            type: DELETE_POST,
            payload: id
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const setPostLoading = () => {
    return{
        type: POST_LOADING
    }
}