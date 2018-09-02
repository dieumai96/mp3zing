import * as types from './../constant/action_constant';
import axios from 'axios';
import { BASE_API_AUTH } from './../constant/endpoint_constant';
import jwt_decode from 'jwt-decode';
export function loginUser(userData) {
  return dispatch => {
    dispatch({
      type: types.START_PROCESS
    })
    axios.post(`${BASE_API_AUTH}/login`, userData)
      .then(user => {
        dispatch({
          type: types.LOGIN_SUCCESS,
          data: user.data,
        })
        const jwt_token = user.data.access_token;
        localStorage.setItem('jwt_token', jwt_token);
        const decoded = jwt_decode(jwt_token);
        dispatch(setCurrentUser(decoded));
        dispatch({
          type: types.END_PROCESS,
        })
      })
      .catch(err => {
        dispatch({
          type: types.LOGIN_FAILED,
          data: err.response.data
        })
        dispatch({
          type: types.END_PROCESS,
        })
      })
  }
}
export function registerUser(newUser , history) {
  return dispatch => {
      dispatch ({
          type : types.START_PROCESS
      })
      axios.post(`${BASE_API_AUTH}/register`,newUser)
        .then(user => history.push('/login'))
        .catch(err => {
          dispatch({
            type : types.SIGN_UP_FAILED,
            data : err.response.data,
          })
          dispatch({
            type : types.END_PROCESS
          })
        })
  }
}
export function setCurrentUser(decode) {
  return {
    type: types.SET_CURRENT_USER,
    data: decode,
  }
}
export function logoutUser() {
  localStorage.removeItem('jwt_token');
  return {
    type: types.LOG_OUT,
  }
}