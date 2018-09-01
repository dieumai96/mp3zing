import * as types from './../constant/action_constant';
const initialState = {
  city: {},
  listWeatherDay: [],
  suggesweather: [],
  isFetching: false,
  country: '',
  change_city: '',
  temp_today: {},
  errors : {},
}
export default function (state = initialState, action) {
  switch (action.type) {
    case types.START_FETCH_WEATHER:
      return { ...state, isFetching: true }
    case types.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        city: action.data.city,
        listWeatherDay: action.data.list
      }
    case types.CHANGE_CITY_SUCCESS:
      return {
        ...state,
        change_city: action.data,
      }
    case types.GET_COUNTRY:
      return {
        ...state,
        country: action.data,
      }
    case types.FETCH_WEATHER_FAILED:
      return {
        ...state,
        isFetching: false,
        errors : action.data,
      }
    case types.FETCH_WETHER_BY_TODAY_SUCCESS:
      return {
        ...state,
        temp_today: action.data
      }
    case types.FETCH_WEATHER_FAILED_BY_TODAY:
      return {
        ...state,
        isFetching: false,
        errors : action.data,
      }
    default:
      return state;
  }
}
