import * as types from './../constant/action_constant';
import { BASE_API } from './../constant/endpoint_constant';
import axios from 'axios';
export function fetchInitial(name) {
  return dispatch => {
    dispatch({
      type: types.START_FETCH_WEATHER
    })
    axios.get(`${BASE_API}/getoneweek/${name}`)
      .then((data) => {
        const results = data.data;
        if (results.cod == 404) {
          dispatch({
            type: types.FETCH_WEATHER_FAILED,
            data: results.message,
          })
        }
        if(results.cod == 200){
          dispatch({
            type: types.FETCH_WEATHER_SUCCESS,
            data: results,
          })
          dispatch({
            type: types.FETCH_WEATHER_FAILED,
          })
        }
      
        dispatch({
          type: types.GET_COUNTRY,
          data: results.city.country,
        })
      })
      .catch(err => {
        console.log(err);
      });
      dispatch(fetchByToday(name));
  }
}
export function fetchByToday(value) {
  return dispatch => {
    dispatch({
      type: types.START_FETCH_WEATHER
    })
    axios.get(`${BASE_API}/getoneday/${value}`)
      .then(data => {
        const results = data.data;
        if (results.cod == 404) {
          dispatch({
            type: types.FETCH_WEATHER_FAILED_BY_TODAY,
            data: results.message,
          })
        }
        if(results.cod == 200){
          dispatch({
            type: types.FETCH_WETHER_BY_TODAY_SUCCESS,
            data: results.list[0].temp,
          })
          dispatch({
            type: types.FETCH_WEATHER_FAILED_BY_TODAY,
          })
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
}
export function change_city(value) {
  return dispatch => {
    dispatch({
      type: types.CHANGE_CITY_SUCCESS,
      data: value
    })
    dispatch(fetchInitial(value));
    dispatch(fetchByToday(value));
  }
}