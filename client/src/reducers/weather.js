import * as types from './../constant/action_constant';
const initialState = {
  data: {},
  suggesweather: [],
  isFetching: false,
}
export default function (state = initialState, action) {
  switch (action.type) {
    case types.START_FETCH_WEATHER:
      return { ...state, isFetching: true }
    case types.FETCH_WEATHER_SUCCESS : 
      return {
        ...state,
        isFetching : false,
        data : action.data,
      }  
    default:
      return state;
  }
}
