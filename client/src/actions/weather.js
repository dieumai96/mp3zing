import { browserHistory } from 'react-router';
import * as types from './../constant/action_constant';
import { ROOT_URL } from './../constant/endpoint_constant';
import axios from 'axios';
export function fetchInitial(name) {
  return dispatch => {
    dispatch({
      type: types.START_FETCH_WEATHER
    })
    axios.get(`api/weather/getoneweek/${name}`)
      .then((data) => {
        const results = data.data;
        dispatch({
          type: types.FETCH_WEATHER_SUCCESS,
          data: results,
        })
      })
      .catch(err => console.log(err));
  }
}